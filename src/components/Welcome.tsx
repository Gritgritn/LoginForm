import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`)
  }

  return (
    <div>
      <p className="welcome__text" >Здравствуйте, <b>steve.jobs@example.com</b></p>
      <button className="exit__button" onClick={ handleClick }>Выйти</button>
    </div>
  );
}

export default Welcome;