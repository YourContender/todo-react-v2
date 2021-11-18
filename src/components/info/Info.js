import React from "react";

class Info extends React.Component {
    
    render() {
        let doneItems = this.props.data.filter(item => item.done)

        return (
            <div>
                <h2>todo: {this.props.data.length}</h2>
                <h4>done: {doneItems.length}</h4>
            </div>
        )
    }
}

export default Info;