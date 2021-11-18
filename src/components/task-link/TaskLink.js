import React from "react";

class TaskLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false,
            editText: this.props.text,
            done: false
        }
    }

    editClick = () => {
        const {value, editText} = this.state;
        const {id, editItemText} = this.props;

        this.setState({
            value: !value
        })

        if (value === true) {
            editItemText(editText, id)
        }
    }

    handleInputEdit = (e) => {
        this.setState({
            editText: e.target.value
        })
    }

    render() {
        const {text, deleteItem, id, toggleClass, done} = this.props;
        const {value} = this.state;
        let classes = done ? {'backgroundColor': 'rgba(144, 226, 144, 0.836)'} : {'backgroundColor': 'white'}
        
        return (
            <li className="list-group-item" style={classes}> 
                    <span onClick={() => toggleClass(id)}>{text}</span> 
                <div>
                    {value ? <input onChange={this.handleInputEdit} className='edit-input' placeholder='enter edit'/> : null}

                    <button onClick={this.editClick} type="button" className="btn btn-outline-secondary">
                        edit
                    </button>

                    <button onClick={() => deleteItem(id)} type="button" className="btn btn-danger">
                        X
                    </button>
                </div>

            </li>
        )
    }
}

export default TaskLink;