import React from "react";

class Forms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            id: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            text: e.target.value,
            id: Date.now()
        })
    }

    handleClick = () => {
        const {text, id} = this.state;

        this.props.addTask(text, id);

        this.setState({
            text: '',
            id: ''
        })
    }

    render() {
        return(
            <div className="input-group mb-3">
                <input onChange={this.handleInput} value={this.state.text} type="text" className="form-control" placeholder="введите задачу" aria-label="Имя получателя" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button onClick={this.handleClick} className="btn btn-primary" type="button">Добавить</button>
                </div>
            </div>
        )
    }
}
export default Forms;