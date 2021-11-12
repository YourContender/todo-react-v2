import React from 'react';
import './App.css';
import Content from './components/content/Content';
import Forms from './components/forms/Forms'; 

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
    console.log(this.state);
  }

  addTask = (text, id) => {
    let items = [...this.state.tasks, {text, id}];

    this.setState({
      tasks: items
    })
  }

  deleteItem = (id) => {
    let filteredItems = this.state.tasks.filter(item => {
      return item.id !== id
    })

    this.setState({
      tasks: filteredItems
    })
  }

  editItemText = (text, id) => {
    this.setState(({tasks}) => ({
      tasks: tasks.map(item => {
        return item.id === id ? {...item, text: text} : item
      })
    }))    
  }

  render() {
    return (
      <div className="container">
          <Forms addTask={this.addTask}/>
          <Content data={this.state.tasks} deleteItem={this.deleteItem} editItemText={this.editItemText}/>
      </div>
    );
  }
}

export default App;
