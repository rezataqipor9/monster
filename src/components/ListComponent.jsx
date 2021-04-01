import React, { Component } from 'react';
import CardComponnet from './CardComponent'
import './listComponent_css.css'

class ListCards extends Component {
    state = {  }   
    render() { 
        return ( 
            
            <div className='listComponent' >                     
           {this.props.users.map((user)=>{              
                return<CardComponnet search={this.props.search} users={user}/>               
            })}   
            </div>
         );
    }
}
 
export default ListCards;