import React from "react";
import TaskLink from "../task-link/TaskLink";
import './Content.css'

class Content extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.data.map(item => {
                    return (
                        <TaskLink 
                            key={item.id} 
                            text={item.text} 
                            id={item.id} 
                            done={item.done}
                            deleteItem={this.props.deleteItem}
                            editItemText={this.props.editItemText}
                            toggleClass={this.props.toggleClass}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default Content;