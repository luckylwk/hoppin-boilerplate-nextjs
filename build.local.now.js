// This file creates an unversioned now.dev.json file based on now.json to use for local testing/proxying
const fs = require('fs');
const path = require('path');

const devPath = path.join(__dirname, 'now.dev.json');
const nowPath = path.join(__dirname, 'now.json');

const prodAppUrl = 'https://app.gohoppin.com';
const prodApiUrl = 'https://beta.gohoppin.com';

const localAppUrl = 'http://localhost:8080';
const localApiUrl = 'http://localhost:12345';

// eslint-disable-next-line
const nowConfig = require(nowPath);

nowConfig.env.API_URL = localApiUrl;
nowConfig.env.NODE_ENV = 'development';
nowConfig.build.env.API_URL = localApiUrl;
nowConfig.build.env.NODE_ENV = 'development';

nowConfig.routes.forEach((route) => {
  if (route.dest.includes(prodAppUrl)) {
    route.dest = route.dest.replace(prodAppUrl, localAppUrl);
  }

  if (route.dest.includes(prodApiUrl)) {
    route.dest = route.dest.replace(prodApiUrl, localApiUrl);
  }
});

fs.writeFileSync(devPath, JSON.stringify(nowConfig, null, 2), 'utf8');

console.log('File written ===', devPath);

process.exit(0);
