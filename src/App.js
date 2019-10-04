import React from 'react';
import Header from './Header';
import List from './List';
import Nav from './Nav';
import NavItem from './NavItem';
import links from './data/links';
import PropTypes from 'prop-types';


const App = ({listsData}) => {
  return (
    <div className='container--site'>
      <Header/>
      <List listsData={listsData} />
      <div className='orange__bar'></div>
      <footer className='footer'>
      <Nav>
         {
           links.map(link => {
             return <NavItem url={link.link} key={link.id}>{link.text}</NavItem>
           })
         }
      </Nav>
     
       <label className='footer__label'>
       Search: 
        <input type='text' />
        </label>
      </footer>
    </div>
  )
}


export default App; 


App.propTypes = {
  listsData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
      }).isRequired,
      timeLink: PropTypes.string.isRequired,
      hideLink: PropTypes.string.isRequired 
    }).isRequired
  )
}