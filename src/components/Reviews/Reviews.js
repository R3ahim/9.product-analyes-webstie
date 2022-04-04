
import './Reviws.css'

const Reviews = ({ product }) => {
    const { img, name, comment, rathings } = product;
   
    return (
        <div className='comment-contianer'>
            <div className='reviw-info'>
                <img src={img} alt="" />
                <h2 className='cart-info'>{name}</h2>
                <h4 className='cart-info'>Rathings:{rathings}</h4>

                <p>{comment}</p>


            </div>


        </div>
    );
};

export default Reviews;