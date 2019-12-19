import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Navigation,
  NavLeft,
  NavRight,
  LogoResponsive,
  MenuToggle,
  Avatar,
  MenuSheet,
  MenuButton,
  Button,
} from 'hoppin-design-system';

const menuContent = (
  <MenuSheet>
    <MenuButton children="Item one" />
    <MenuButton>Item two</MenuButton>
    <Button
      variant="subtle"
      context="whiteout"
      size="large"
      children="Item three"
      paddingLeft={0}
    />
  </MenuSheet>
);

const NavigationBar = ({ auth }) => (
  <Navigation menuContent={menuContent} position="absolute">
    <NavLeft>
      <LogoResponsive />
    </NavLeft>
    <NavRight>
      {auth && auth.isLoggedIn && (
        <Box flexGrow="0" position="relative">
          <Avatar src={auth.avatar} size="icon" justifyContent="flex-end" />
        </Box>
      )}
      <MenuToggle />
    </NavRight>
  </Navigation>
);

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
};

NavigationBar.defaultProps = {};

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
