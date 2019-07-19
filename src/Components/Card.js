import React from 'react';
import 'tachyons';

const Card = ({id, name, username, image, email}) => {
  return (
    <div key={id} className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Robots" src={image} />
      <div> 
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;