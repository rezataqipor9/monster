import React, { Component } from 'react';
import ListCards from './components/ListComponent'
class App extends Component {
  state = {users:[],search:''}
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({users:json}))
  }  
  handleChange=(e)=>{
    this.setState({search:e.target.value})
  }
  render() { 
    const {search,users} =this.state
    const filterMonster=users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))            
          
    return ( <div style={{textAlign:'center'}} className='ui container'> 

      <input type="text"  name="Monster" placeholder="Search Monster" value={this.state.s} onChange={this.handleChange} />   
      <ListCards search={this.state.search} users={filterMonster} />      
      </div> 
      );
  }
}
 
export default App;