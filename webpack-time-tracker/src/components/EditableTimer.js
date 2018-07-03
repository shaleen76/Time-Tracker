import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';
import helpers from '../helper';

class EditableTimer extends Component   {
    state = {
        editFormOpen: false
    };

    handleDeleteTimer = (id) => {
        this.props.handleDeleteTimer(id);
    };

    handleEditClick = () =>   {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };
    
    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };
        
    closeForm = () => {
        this.setState({ editFormOpen: false });
    };

    openForm = () => {
        this.setState({ editFormOpen: true });
    };

    componentDidMount = () =>   {
        this.forceUpdateInterval = setInterval(this.forceUpdate(), 50);
    };

    // called if a component is removed
    componentWillMount = () =>  {
        clearInterval(this.forceUpdateInterval);
    };

    render()    {

        const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince
        );  
        if(this.state.editFormOpen) {
            return(
                <TimerForm
                    id = {this.props.id}
                    title = {this.props.title}
                    project = {this.props.project}
                    onFormSubmit = {this.handleSubmit}
                    onFormClose = {this.handleFormClose}
                />
            );
        } else {
            return(
                <Timer
                    id = {this.props.id}
                    title = {this.props.title}
                    project = {this.props.project}
                    elapsed = {elapsedString}
                    runningSince = {this.props.runningSince}
                    handleDeleteTimer = {this.handleDeleteTimer}
                    onEditClick = {this.handleEditClick}
                    onStartClick = {this.props.onStartClick}
                    onStopClick = {this.props.onStopClick}
                />
            );
        }
    }
}

export default EditableTimer;