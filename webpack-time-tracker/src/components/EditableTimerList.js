import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {

    onFormSubmit = (editedTimer)    =>  {
        this.props.onFormSubmit(editedTimer);
    };

    handleDeleteTimer = (id) => {
        this.props.handleDeleteTimer(id);
    };

    render()    {
        const timersList = this.props.timers.map((timer) => 
            <EditableTimer 
                key = {timer.id}
                id = {timer.id}
                title = {timer.title}
                project = {timer.project}
                runningSince = {timer.runningSince}
                elapsed = {timer.elapsed}
                handleDeleteTimer = {this.handleDeleteTimer}
                onFormSubmit = {this.props.onFormSubmit}
                onStartClick = {this.props.onStartClick}
                onStopClick = {this.props.onStopClick}
            />
        );
        return(
            <div id = "timers">
                {timersList}
            </div>
        );
    }
}

export default EditableTimerList;