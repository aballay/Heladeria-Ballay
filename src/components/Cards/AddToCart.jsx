import React, { Component,useState,setState} from 'react';
import '../../assets/lib/css/AddToCartWidgetCars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'

class AddToCartWidget extends Component {
    constructor(props) {
        super(props);
    }
    handleQuitAmount = () => {
        this.props.handleQuitAmountUnit();
    }
    handleAddAmount = () => {
        this.props.handleAddAmountUnit()
    }
    render() { 
        return (
             <div className="containerAddToCartWidget">
                 
                    <button className="btnCartWidget" onClick={() => this.handleQuitAmount()} >
                        <FontAwesomeIcon icon={faMinus}  />
                    </button>
                    <div className="container-unit">
                     <h2 id="unit-number">{this.props.amountUnit}</h2>

                    <div className="stlye-unit-text-u">u</div>

                 </div>
                
                <button className="btnCartWidget" onClick={() => this.handleAddAmount()} >
                    <FontAwesomeIcon icon={faPlus}  />
                </button>
            </div>
        );
    }
}
 
export default AddToCartWidget;
