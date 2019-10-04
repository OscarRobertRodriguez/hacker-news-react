
import React from 'react';
import PropTypes from 'prop-types';


const StatusBarItem = ({source, children}) => {
  return (
    <a className='status__bar-item' href={source}>{children}</a>
  )
}

export default StatusBarItem;

StatusBarItem.propTypes = {
  source: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}