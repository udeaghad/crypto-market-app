import React from 'react';
import { NavLink } from 'react-router-dom';
import './coinPage.css';
import { MdSettings, MdArrowBackIosNew } from 'react-icons/md';
import { FaMicrophone } from 'react-icons/fa';

import DetailsRender from './CoinDetailsRender';

const CoinPage = () => (
  <div className="pg-container">
    <nav>
      <NavLink to="/">
        <MdArrowBackIosNew style={{ color: 'white' }} />
      </NavLink>
      <p className="heading">Top Exchange</p>
      <div className="nav-icon">
        <FaMicrophone style={{ color: 'white', marginRight: '2rem' }} />
        <MdSettings style={{ color: 'white' }} />
      </div>
    </nav>

    <DetailsRender />

  </div>
);

export default CoinPage;
