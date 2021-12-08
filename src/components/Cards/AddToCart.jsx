import React from 'react';
import '../../assets/lib/sass/AddToCartWidgetCars.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import ItemCount from './itemCount';
import ButtonCount from './buttonsCount';

function AddToCartWidget(props) {
    

    return ( 
        <div className="containerAddToCartWidget">
            
                    <div id="button-item-count-minus">
                        <ButtonCount eventCart={props.quitItem} fontIcon={<FontAwesomeIcon icon={faMinus}  />}/>
                    </div>
                    <div className="container-unit">
                        <ItemCount itemCount={props.itemCount} />
                    <div className="stlye-unit-text-u">u</div>
                 </div>
                 <div id="button-item-count-plus">
                    <ButtonCount  eventCart={props.addItem} fontIcon={<FontAwesomeIcon   icon={faPlus}  />}/>
                </div>
            </div>
     );
}

export default AddToCartWidget;