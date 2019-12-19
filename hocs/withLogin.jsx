import { Component } from 'react';
import PropTypes from 'prop-types';

import { IS_PRODUCTION } from 'config/constants';
import { getExperience, authPing } from 'utils/api';

const loggingPrefix = '🔐  WithLoginComponent';

const withLogin = (
  WrappedComponent,
  { requiresLogin = false, requiresLogout = false, requiresExperience = false },
) => {
  class WithLoginComponent extends Component {
    static propTypes = {
      experience: PropTypes.object,
      router: PropTypes.object.isRequired,
    };

    static defaultProps = {
      experience: null,
      pageLoadError: false,
    };

    static async getInitialProps({ query }) {
      if (requiresExperience) {
        console.log(
          `${loggingPrefix} - getInitialProps - experience slug ${query.slug}`,
        );

        try {
          const experience = await getExperience(query.slug);

          return {
            experience,
            pageLoadError: false,
          };
        } catch (err) {
          return {
            experience: null,
            pageLoadError: true,
          };
        }
      }
    }

    constructor(props) {
      super(props);
      if (!IS_PRODUCTION) console.log(`${loggingPrefix} - constructor`);

      this.state = {
        auth: {
          isLoggedIn: false,
          userId: null,
          email: null,
          avatar: null,
          user: {},
        },
      };
    }

    async componentDidMount() {
      if (!IS_PRODUCTION) console.log(`${loggingPrefix} - componentDidMount`);

      if (!this.state.isLoggedIn) {
        try {
          const data = await authPing();
          if (!IS_PRODUCTION)
            console.log(
              `${loggingPrefix} - componentDidMount - 👋🏼 Found user: ${data.user.email}`,
            );

          this.setState({
            auth: {
              isLoggedIn: true,
              id: data.user._id,
              email: data.user.email,
              avatar: data.user.profile.image_url,
              user: data.user,
            },
          });
        } catch (error) {
          this.setState({
            auth: {
              isLoggedIn: false,
              id: null,
              email: null,
              data: {},
            },
          });
        }
      }
    }

    // TODO:
    componentDidUpdate() {
      if (!IS_PRODUCTION) console.log(`${loggingPrefix} - componentDidUpdate`);

      // const { router } = this.props;

      const {
        auth: { isLoggedIn },
      } = this.state;

      if (requiresLogout && isLoggedIn) {
        console.log('tick');
      }

      if (requiresLogin && !isLoggedIn) {
        console.log('tock');
      }
    }

    render() {
      const { router } = this.props;

      const { auth } = this.state;

      // TODO:
      // if (requiresLogout && auth.isLoggedIn) {
      //   return <div>Redirecting...</div>;
      // }

      if (requiresLogin && !auth.isLoggedIn) {
        return <div>Auth required: {router.asPath}</div>;
      }

      return <WrappedComponent auth={auth} {...this.props} />;
    }
  }

  return WithLoginComponent;
};

export default withLogin;
