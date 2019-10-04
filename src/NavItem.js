import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({children, url}) => {
  return (
   <a className='nav__item' href={url}>{children}</a>
  )
}

export default NavItem;


NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}