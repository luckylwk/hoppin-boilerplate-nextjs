const path = require('path');
const webpack = require('webpack');
const { parsed: env } = require('dotenv').config();
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');

// paths to be used as absolute imports
const absolutePaths = [
  'pages',
  'components',
  'hocs',
  'utils',
  'config',
  'styles',
];

if (process.env.NODE_ENV === 'development') {
  console.warn(
    `> Using hack in ${process.env.NODE_ENV} environment: require.extensions['.css'] = (file) => {};`,
  );
  // https://github.com/aws-amplify/amplify-js/issues/3854#issuecomment-522895770
  // https://github.com/aws-amplify/amplify-js/issues/1934#issuecomment-479116673
  if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {};
  }
}

module.exports = withCSS(
  withPurgeCss({
    cssModules: true,
    cssLoaderOptions: {
      camelCase: true,
      namedExport: true,
    },
    target: 'serverless',
    webpack(config) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'UglifyJsPlugin',
      );

      if (process.env.NODE_ENV !== 'production') {
        config.plugins.push(new webpack.EnvironmentPlugin(env));
      }

      absolutePaths.forEach((absolutePath) => {
        config.resolve.alias[absolutePath] = path.join(__dirname, absolutePath);
      });

      return config;
    },
  }),
);
