import React from 'react';
import PropTypes from 'prop-types';


const StatusBar = ({points, children}) => {

  let items = React.Children.toArray(children); 

  for(let i = children.length - 1; i >= 2; i--) {
    items.splice( i,0, <span key={i} className='separator--status-bar'>|</span> );
  }


  return (
    <nav className='status__bar'>
    <span className='status__bar-item status__bar-points'>{`${points} points by`}</span>
     {items}
    </nav>
  )
};

export default StatusBar; 

StatusBar.propTypes = {
  points: PropTypes.number.isRequired,
  children: PropTypes.node 
}