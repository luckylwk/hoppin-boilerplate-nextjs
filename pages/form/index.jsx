import { Component } from 'react';
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
            1a. Add a form with controlled inputs. Use one text field for a
            'username' and one checkbox for 'terms'.
          </li>
          <li>
            1b. Implement or update to use hooks. If not explain what they may
            improve.
          </li>
          <li>
            2a. Implement or Pseudo-code an async select input that requests a
            company name
          </li>
          <li>
            2b. URL when needed:
            https://autocomplete.clearbit.com/v1/companies/suggest?query=hoppin
          </li>
        </ol>
      </div>
      <Box padding="base" bg="neutral.lighter">
        <div>Insert form here.</div>
      </Box>
    </Container>
  );
};

export default withRouter(FormPage);
