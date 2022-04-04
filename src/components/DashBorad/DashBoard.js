import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import './DahsBoard.css'

const DashBoard = () => {
  
    return (
        <div>
        <div  className='dash-header'>
            <h1>OUR achivement</h1>
        </div>
            

            <Chart></Chart>
        </div>
    );
};

export default DashBoard;