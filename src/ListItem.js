import React from 'react';
import PropTypes from 'prop-types';
import Triangle from './assets/grayarrow2x.gif';
import StatusBar from './StatusBar';
import StatusBarItem from './StatusBarItem';

const ListItem = ({data, order}) => {
  let {title, link, points, time, comments, author, source, timeLink, hideLink} = data; 
  let itemOrder = order + 1; 
  return (
    <li className='listItem'>
    <span className='listItem__order'>
    {`${itemOrder}.`}
    </span>
    <img className="listItem__img" src={Triangle} alt='triangle' />
     <div className='listItem__title-container'>
     <a className='listItem__title' href={link}>{title}</a>
     <a className="listItem__source" href={source}>{`(${source})`}</a>
     </div>

    <StatusBar points={points}>
     <StatusBarItem source={author.link}>{author.name}</StatusBarItem>
     <StatusBarItem source={timeLink}>{`${time} minutes ago`}</StatusBarItem>
     <StatusBarItem source={hideLink}>hide</StatusBarItem>
     <StatusBarItem source={timeLink}>{`${comments} comments`}</StatusBarItem>
    </StatusBar>
    </li>
  )
}

export default ListItem;

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
  order: PropTypes.number.isRequired
}