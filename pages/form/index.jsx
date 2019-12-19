// import { Component } from "react";
// import PropTypes from "prop-types";
import { withRouter } from 'next/router';

import { Container, Box } from 'hoppin-design-system';

const FormPage = ({ router }) => {
  return (
    <Container marginY="base" width="narrow">
      <div>
        Instructions:
        <ol>
          <li>
            Add a form with controlled inputs. Use one text field and one
            checkbox.
          </li>
          <li>Hooks.</li>
          <li>Async select.</li>
        </ol>
      </div>
      <Box padding="base" bg="neutral.lighter">
        <div>Insert form here.</div>
      </Box>
    </Container>
  );
};

export default withRouter(FormPage);
