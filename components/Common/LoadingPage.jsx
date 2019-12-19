import React from 'react';
import PropTypes from 'prop-types';

import { Loader, Flex, Box } from 'hoppin-design-system';

const LoadingPage = ({ type, size }) => (
  <Flex alignItems="center" justifyContent="center" height="100vh">
    <Box textAlign="center">
      <Loader size={size} />
    </Box>
  </Flex>
);

LoadingPage.propTypes = {
  size: PropTypes.number,
  message: PropTypes.string,
};

LoadingPage.defaultProps = {
  type: 'default',
  size: 12,
};

LoadingPage.displayName = 'LoadingPage';

export default LoadingPage;
