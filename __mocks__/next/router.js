module.exports = {
  withRouter: (component) => {
    component.defaultProps = {
      ...component.defaultProps,
      router: {
        route: 'mocked-route',
        pathname: 'mocked-path',
        query: {},
        push: () => {},
        replace: () => {},
      },
    };
    return component;
  },
};
