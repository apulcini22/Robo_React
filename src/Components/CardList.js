import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
    {
      robots.map( (userData, index) => {
        return ( 
          <Card 
            key={index}
            id={userData.id} 
            name={userData.name} 
            image={`https://robohash.org/${userData.username}?200x200`} 
            email={userData.email}
          />
        )
      })
    }
    </div>
  )
}

export default CardList;