import React from 'react';

function ButtonCount(props) {
    return ( 
    <button onClick={props.eventCart} className="btnCartWidget"  >
       {props.fontIcon}
    </button>
 );
}

export default ButtonCount;