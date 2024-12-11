import React from 'react';

const Card = (props) => {

    // деструктуризация
    const {w, h, bgColor} = props

    return (
        <div style={
            {
                width: w  ? w : '200px',
                height: h ? h : '200px',
                backgroundColor: bgColor ? bgColor : 'red',
                borderRadius: '5px',
            }
        }>

        </div>
    );
};

export default Card;
