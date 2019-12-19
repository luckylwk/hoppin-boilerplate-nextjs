import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { withRouter } from 'next/router';

import AsyncSelect from 'react-select/async';



import { Container, Box } from 'hoppin-design-system';

const FormPage = ({ router }) => {

  const [name, setName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const colourOptions = [
    {
      label: 'Red', value: '123'
    },
    {
      label: 'Blue', value: '456'
    }
  ];

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCheckboxChange(e) {
    setCheckbox(e.target.checked);
  }


  const promiseOptions = inputValue =>
  {
  return fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=" + inputValue)
  //return a promise")
  .then(res => res.json())
  .then(
    (result) => {
      return result.map(value => ({label: value.name, value: value.domain}));
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      // what to return here, I wonder
    }
  )
  }

  const filterColors = (inputValue) => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
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
          <li>1b. Implement or update to use hooks. If not explain what they may improve.</li>
          <li>2a. Implement or Pseudo-code an async select input that requests a company name</li>
          <li>2b. URL when needed: https://autocomplete.clearbit.com/v1/companies/suggest?query=hoppin</li>
        </ol>
      </div>
      <Box padding="base" bg="neutral.lighter">
        <div>Insert form here.</div>
        <form>
        <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
            True?
            <input type="checkbox" checked={checkbox} onChange={handleCheckboxChange} />
            </label>
            <div>
            <AsyncSelect cacheOptions loadOptions={promiseOptions} />
            </div>
            <input type="submit" value="Submit" />
          </form>


      </Box>
    </Container>
  );
};

export default withRouter(FormPage);
