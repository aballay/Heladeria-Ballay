import {Component } from 'react';
import TitleComponent from '../title/title'

class Catalog extends Component{
    constructor(props){
        super(props);
        this.state= {
            name:'Mamen'
        }
    }

    render(){
        return(
            <div>
                <TitleComponent name={this.state.name}></TitleComponent>
            </div>
        )
    }
}

export default Catalog