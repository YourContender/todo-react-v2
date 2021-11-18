import React from 'react';
import Content from './components/content/Content';
import Forms from './components/forms/Forms'; 
import Info from './components/info/Info';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    fetch('http://167.71.41.212:8000/api/tasks/list')
      .then(res => res.json())
      .then(data => data.forEach(item => {
        let currentTask = {
          text: item.title,
          id: Date.now(),
          done: false
        }
        
        this.setState({
          tasks: [...this.state.tasks, currentTask]
        })
      }))
  }

  addTask = async (text, id) => {
    let items = [...this.state.tasks, {text, id}];

    this.setState({
      tasks: items
    })

    try {
      const data = {
        id: Date.now(),
        title: text,
        description: 'hello hello hello',
        status: 1,
      }

      const response = await fetch('http://167.71.41.212:8000/api/tasks/add', {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
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

  toggleClass = (id) => {
    this.setState(({tasks}) => ({
      tasks: tasks.map(item => {
        return item.id === id ? {...item, done: !item.done} : item
      })
    }))
  }

  render() {
    return (
      <div className="container">
          <Info data={this.state.tasks} />
          <Forms addTask={this.addTask}/>
          <Content 
            data={this.state.tasks} 
            deleteItem={this.deleteItem} 
            editItemText={this.editItemText}
            toggleClass={this.toggleClass}
          />
      </div>
    );
  }
}

export default App;
