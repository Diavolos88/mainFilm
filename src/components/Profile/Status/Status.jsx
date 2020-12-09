import React from 'react'
import s from './Status.module.css';

class Status extends React.Component {

    state = {
        editMode: false
    }


    activateEditMode = () => {
        this.setState({
            editMode: this.state.editMode ? false : true
        })
    }
    render(){

        if (!this.state.editMode) {
            return (
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status :'Update status'}</span>
                </div>
            );
        } else {
            return (
                <div>
                    <input autoFocus={true} onBlur={this.activateEditMode} className={s.inputField} value={this.props.status ? this.props.status :'Update status'}/>
                </div>
            );
        }
    }
}

export default Status