
import React from 'react';
import PropTypes from 'prop-types';


const Nav = ({children}) => {
   let items = React.Children.toArray(children);

   for(let i = items.length - 1; i >= 1; i-- ) {
     items.splice(i, 0,
      <span key={i} className='separator'>|</span>
      ); 
   }
   

  return (
    <nav className='nav'>
     {items}
    </nav>
  )
}


export default Nav; 



Nav.propTypes = {
  children: PropTypes.node.isRequired,
}