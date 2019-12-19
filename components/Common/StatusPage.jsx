import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Flex,
  Box,
  Paragraph,
  Heading,
  Text,
} from 'hoppin-design-system';

const StatusPage = ({ title, message, errorCode, children, ...rest }) => (
  <Flex alignItems="center" justifyContent="center" height="100vh">
    <Box>
      <Container width="narrow" height="100%" justifyContent="center" {...rest}>
        {errorCode && (
          <Paragraph marginBottom="none">
            <Text fontSize="huge" color="neutral.lighter">
              {errorCode}
            </Text>{' '}
            <Text fontSize="h3" color="neutral.lighter" marginLeft="large">
              That's an error, sorry.
            </Text>
          </Paragraph>
        )}
        {title && (
          <Heading as="h2" color="neutral.dark">
            {title}
          </Heading>
        )}
        {message && <Paragraph>{message}</Paragraph>}
        {children && <Box>{children}</Box>}
      </Container>
    </Box>
  </Flex>
);

StatusPage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  errorCode: PropTypes.string,
};

StatusPage.defaultProps = {};

StatusPage.displayName = 'StatusPage';

export default StatusPage;
