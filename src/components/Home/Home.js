import React from 'react';
import './Home.css'
import img from '../../car.png'
import Reviews from '../Reviews/Reviews';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';


const Home = () => {
    const [products,setProducts]= useProducts();

    return (
        <div >
            <div className='home-contianer'>

           <div className='text-contianer'>
         <h1 >Your best Car</h1>
         <h1 className='home-heading'>Your next Car</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maxime alias eligendi laboriosam nam architecto reiciendis delectus quas a eos porro quibusdam molestiae provident, suscipit aliquam, sunt sit molestias saepe.</p>
         <Link  to='/reviews'><button className='btn-home'>Live demo</button></Link>
           </div>
           <div className='img-contianer'>
            <img src={img} alt="" />
            
           </div>
        </div>
        
        <div >
          

            <h1 style={{textAlign:'center'}}>Happy Client says</h1>
         
            <div className='client-contianer'>

           {
               products.map(product=><Reviews 
               product={product}
               ></Reviews>)
           }
            </div>
        </div>
        </div>
    );
};

export default Home;