import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';






const List = ({listsData}) => {
  return (
    <ul className='list'>
     {listsData.map((list, index) => {
         return <ListItem data={list} key={list.id} order={index}  />
       })
     }
     <li className='listItem'>
       <a href="https://news.ycombinator.com/news?p=2" className='listItem--more'>
        More
       </a>
     </li>
    </ul>
  )
}


export default List; 

List.propTypes = {
  listsData: PropTypes.array.isRequired 
}