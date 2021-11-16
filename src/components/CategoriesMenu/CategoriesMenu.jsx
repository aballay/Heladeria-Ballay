import React, { Component } from 'react';
import ButtonCategorieMenu from './ButtonCategorieMenu';
import '../../assets/lib/css/CategoriesMenu.css'
import { CardGroup } from "react-bootstrap";

function CategoriesMenu() {

    const categories = [
        {
            id:0,
            name:'Potes',
        },
        {
            id:1,
            name:'Baldes'
        },
        {
            id:2,
            name:'Bombones'
        },
        {
            id:3,
            name:'Tortas Heladas'
        },
        {
            id:4,
            name:'Palitos'
        }
    ]
    return (
        <CardGroup className="container-categories-menu">
            {categories.map( ({id,name}) => (
                <div key={id}>
                    <ButtonCategorieMenu name={name}/>
                </div>
            ))}
            
        </CardGroup>
      );
}

export default CategoriesMenu;