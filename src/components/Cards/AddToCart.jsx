import React,{useContext} from 'react';
import '../../assets/lib/sass/AddToCartWidgetCars.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import ItemCount from './itemCount';
import ButtonCount from './buttonsCount';
import {CardContext} from "../../js/CardContext";


function AddToCartWidget(props) {
    const cardContext = useContext(CardContext);

    return ( 
        <div className="containerAddToCartWidget">
            
                    <div id="button-item-count-minus">
                        <ButtonCount eventCart={cardContext.quitItem} fontIcon={<FontAwesomeIcon icon={faMinus}  />}/>
                    </div>
                    <div className="container-unit">
                        <ItemCount itemCount={cardContext.itemCount} />
                    <div className="stlye-unit-text-u">u</div>
                 </div>
                 <div id="button-item-count-plus">
                    <ButtonCount  eventCart={cardContext.addItem} fontIcon={<FontAwesomeIcon   icon={faPlus}  />}/>
                </div>
            </div>
     );
}

export default AddToCartWidget;