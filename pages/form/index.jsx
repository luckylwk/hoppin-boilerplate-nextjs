// import { Component } from "react";
// import PropTypes from "prop-types";
import { withRouter } from 'next/router';
import { useState } from 'react';
import { Container, Box } from 'hoppin-design-system';

import AsyncSelect from 'react-select/async';

const FormPage = ({ router }) => {
  const [textbox, setText] = useState('asdf');
  const [inputValue, setInputValue] = useState('');
  const [checkbox, setCheck] = useState(false);

  const loadOptions = (inputValue, callback) => {
    fetch(
      'https://autocomplete.clearbit.com/v1/companies/suggest?query=' +
        inputValue,
    )
      .then((val) => val.json())
      .then((apiResponse) => {
        let res = [];
        for (let i = 0; i < apiResponse.length; i++) {
          res.push({ value: apiResponse[i], label: apiResponse[i].name });
        }
        callback(res);
      });
  };

  return (
    <Container marginY="base" width="narrow">
      <div>
        Instructions:
        <ol>
          <li>
            1a. Add a form with controlled inputs. Use one text field and one
            checkbox.
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
        <div>
          <p>{textbox}</p>
          <p>{checkbox ? 'true' : 'false'}</p>
          <form>
            <input
              value={textbox}
              onChange={(ev) => {
                setText(ev.target.value);
              }}
              type="text"
            />
            <input
              checked={checkbox}
              onChange={(ev) => {
                setCheck(ev.target.checked);
              }}
              type="checkbox"
            />
            <br />

            <AsyncSelect loadOptions={loadOptions} />
          </form>
        </div>
      </Box>
    </Container>
  );
};

export default withRouter(FormPage);
