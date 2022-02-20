import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';


function Home() {
  return <div className="home">
    <input type="checkbox" id="active"/>
        <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
        <div class="wrapper">
        <ul>
    <li> <Link to="/contact"> CONTACT</Link></li>
    <li> <Link to="/Addcontact">Add Contact</Link></li>
    </ul>
    </div>
    <div class="content">
        <div class="title"> Mern App </div>
    </div>

  </div>;
}

export default Home;
