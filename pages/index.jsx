import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

import { withLogin } from 'hocs';
import { IS_PRODUCTION } from 'config/constants';
import { sleep } from 'utils/functions';
// import { getExperiences } from "utils/api";
import { ERRORS } from 'config/settings/errors';

import { Container, Box } from 'hoppin-design-system';
import { StatusPage, NavigationBar } from 'components/Common';
import { Layout } from 'components/Layout';

const loggingPrefix = '🏚  HomePage';

class HomePage extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    auth: PropTypes.object,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    if (!IS_PRODUCTION) console.log(`${loggingPrefix} - constructor`);

    this.state = {
      experiences: null,
      pageIsLoading: true,
      pageLoadError: false,
    };
  }

  async componentDidMount() {
    if (!IS_PRODUCTION) console.log(`${loggingPrefix} - componentDidMount`);

    try {
      if (!IS_PRODUCTION) await sleep(500);

      this.setState({
        experiences: [],
        pageIsLoading: false,
      });
      // const updatedExperiences = await getExperiences(null);
      // this.setState({
      //   experiences: updatedExperiences,
      //   pageIsLoading: false
      // });
    } catch (err) {
      this.setState({
        pageIsLoading: false,
        pageLoadError: true,
      });
    }
  }

  render() {
    if (!IS_PRODUCTION) console.log(`${loggingPrefix} - render`);

    const { experiences, pageIsLoading, pageLoadError } = this.state;

    if (pageLoadError) {
      return <StatusPage title="Oops!" message={ERRORS.DEFAULT} />;
    } else if (!experiences && !pageIsLoading) {
      return <StatusPage title="Not found!" message={ERRORS.DEFAULT} />;
    } else {
      return (
        <Layout
          title={`(${experiences &&
            experiences.length}) Hoppin, the Job Shadowing Marketplace.`}
          description="Some description!"
        >
          <NavigationBar {...this.props} />
          <Container>
            <Box paddingY="90px" minHeight="90vh">
              <Link href="/form">Technical Screen: Form</Link>
            </Box>
          </Container>
        </Layout>
      );
    }
  }
}

export default withRouter(
  withLogin(HomePage, {
    requiresLogin: false,
    requiresLogout: false,
    requiresExperience: false,
  }),
);
