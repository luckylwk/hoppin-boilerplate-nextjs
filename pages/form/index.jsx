// import { Component } from "react";
// import PropTypes from "prop-types";
import { withRouter } from 'next/router'

import { Container, Box } from 'hoppin-design-system'

import React, { useState } from 'react'

const FormPage = ({ router }) => {
  const [username, setUsername] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUsername(value)
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setCheckbox(checked)
  }

  return (
    <Container marginY='base' width='narrow'>
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
      <Box padding='base' bg='neutral.lighter'>
        <div>
          <input
            name='username'
            type='text'
            onChange={handleChange}
            value={username}
          />
          ;
          <input
            type='checkbox'
            onChange={handleCheckboxChange}
            name='checkbox'
            checked={checkbox}
          />
        </div>
      </Box>
    </Container>
  )
}

export default FormPage
