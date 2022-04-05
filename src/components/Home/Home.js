import React from 'react';
import './Home.css'
import img from '../../car.png'
import Reviews from '../Reviews/Reviews';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';


const Home = () => {
    const [products, setProducts] = useProducts();
    
        const partProducts =products.slice(0,3);
       
    return (
        <div >
            <div className='home-contianer'>

                <div className='text-contianer'>
                    <h1 >Your best Car</h1>
                    <h1 className='home-heading'>Your next Car</h1>
                    <p  style={{margin:'0'}}>Welcome to world Biggest car website ! Don't be cofuse to Which car you can buy </p>                   
                    <p style={{margin:'0'}}>You can choose any one ! You will get answer very soon</p>
                    <p>You can scrool discover a car that you math your self</p>
                </div>
                <div className='img-contianer'>
                    <img src={img} alt="" />

                </div>
            </div>

            <div >


                <h1 style={{ textAlign: 'center' }}>Happy Client says</h1>

                <div className='client-contianer'>
                     
                    {
                        partProducts.map(product => <Reviews
                            product={product}
                          
                        ></Reviews>)
                    }
                    <div style={{display:"flex" ,justifyContent:'center'}}>

                    </div>
                    <Link to='/reviews' >  <button  className='btn-home'>See All Reviews</button></Link>
              
                </div>
            </div>
        </div>
    );
};

export default Home;