import React from 'react';

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
      <img src={`https://www.robohash.org/${id}?200x200`} alt='robots'></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
export default Card;