import React from 'react';
import '../../assets/lib/css/CategoriesMenu.css'


function ButtonCategorieMenu(props) {
    return ( 
            
            <button className="button-categories">{props.name}</button>
        
     );
}

export default ButtonCategorieMenu;