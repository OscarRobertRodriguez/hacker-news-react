import React from 'react';
import Logo from './assets/hacker.png';
import Nav from './Nav';
import NavItem from './NavItem';


const Header = ()  => {
  return (
    <header className='header'>
     <img className='header__logo' src={Logo} alt='hello' />
     <h1 className='header__title'>Hacker News</h1>
       <Nav>
        <NavItem url='https://news.ycombinator.com/newest'>new</NavItem>
        <NavItem url='https://news.ycombinator.com/front'>past</NavItem>
        <NavItem url='https://news.ycombinator.com/newcomments'>comments</NavItem>
        <NavItem url='https://news.ycombinator.com/ask'>ask</NavItem>
        <NavItem url='https://news.ycombinator.com/show'>show</NavItem>
        <NavItem url='https://news.ycombinator.com/jobs'>jobs</NavItem>
        <NavItem url='https://news.ycombinator.com/submit'>submit</NavItem>
      </Nav>

    </header>
  )
}
 
export default Header; 

