import React, { Component } from 'react';
 
class CardComponnet extends Component {
    state = {  }
   
    render() { 
        const {users,search}=this.props
        if (search && search===users.name) {
            <div className='card-container'>
            <img src={`https://robohash.org/${users.id}?set=set2&size=180x180`}/>
           <h2 key={users.id}> {users.name}</h2>
           <p>{users.email}</p>          
            </div>
        }
        return ( 
            <div className='card-container'>
            <img src={`https://robohash.org/${users.id}?set=set2&size=180x180`}/>
           <h2 key={users.id}> {users.name}</h2>
           <p>{users.email}</p>
            </div>

         );
    }
}
 
export default CardComponnet;