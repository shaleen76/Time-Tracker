import React, { Component } from 'react';
import TimerActionButton from './TimerActionButton';

class Timer extends Component   {

    deleteTimer = () => {
        this.props.handleDeleteTimer(this.props.id);
    };

    handleOnStartClick = () =>  {
        this.props.onStartClick(this.props.id);
    };

    handleOnStopClick = ()  =>  {
        this.props.onStopClick(this.props.id);
    };
    
    render()    {
        const elapsedString = this.props.elapsed;
        return(
            <div className = 'ui centered card'>
                <div className = 'content'>
                    <div className = 'header'>
                        {this.props.title}
                    </div> 
                    <div className = 'meta'>
                        {this.props.project}
                    </div>
                    <div className = 'center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className = 'right floated edit icon' onClick = {this.props.onEditClick}>
                            <i className = 'edit icon' />
                        </span>
                        <span className = 'right floated trash icon' onClick = {this.deleteTimer}>
                            <i className = 'trash icon' />
                        </span>
                    </div>
                </div>
                <TimerActionButton
                    id = {this.props.id}
                    timerIsRunning = {!!this.props.runningSince}
                    onStartClick = {this.handleOnStartClick}
                    onStopClick = {this.handleOnStopClick}/>
            </div>
        );
    }
}

export default Timer;