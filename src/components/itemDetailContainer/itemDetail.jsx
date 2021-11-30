import React from 'react';

function ItemDetail (props) {
    return ( <React.Fragment>
        <div>
            <ul>
                <li> <img src={props.image} alt={props.title} /> </li>
                <li> {props.title} </li>
                <li> ${props.price} </li>
                <li> {props.desc} </li>
                <li>
                    <button onClick={() => {
                      alert("se compro!")
                    }}>shop</button>
                </li>
            </ul>
        </div>
    </React.Fragment> );
}

export default ItemDetail ;

