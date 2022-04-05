import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import './DahsBoard.css'

const DashBoard = () => {
  
    return (
        <div>
        <div  className='dash-header'>
            <h2>Daily Treeding info</h2>
            <p>Our daily order minimum 50m car. it is the biggest achimnet for us </p>
            <br />
            
        </div>
            

            <Chart></Chart>
        </div>
    );
};

export default DashBoard;