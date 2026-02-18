import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {

    const { img, name, price, stock } = bottle;
    // console.log(bottle);
    return (
        <div className='card bottle'>
            <img src={img} width="400px" alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Stock: {stock}</p>
            <button onClick={() => handleAddToCart(bottle)}>Bye Now</button>
        </div>
    );
};

export default Bottle;