import React, {Component} from 'react';
import img from './pets-01.jpg';
import img1 from './pets-02.jpg';





const Home = () => {
  return (
    <div >
    <img className="mt-2" src={img} width="100%"/>
    <img  className="mt-3" src={img1} width="100%"/>

    </div>
  )
}

export default Home;
