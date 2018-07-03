import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimeForm from './ToggleableTimerForm';
import uuid from 'uuid';
import helpers from '../helper';

class TimerDashboard extends Component {

  state = {
    timers: [{
      title: 'Practice squat',
      project: 'Gym Chores',
      id: uuid.v4(),
      elapsed: 5456099,
      runningSince: Date.now(),
    }, {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: uuid.v4(),
      elapsed: 1273998,
      runningSince: null, 
    }]
  };

handleStartClick = (timerId) => {
  this.startTimer(timerId);
};

handleStopClick = (timerId) => {
  this.stopTimer(timerId);
};

startTimer = (timerId) => {
  const now = Date.now();
  this.setState({timers: this.state.timers.map((timer) => {
    if (timer.id === timerId) {
      return Object.assign({}, timer, {
        runningSince: now,
      });
    } 
    else {
      return timer;
    }
  }),
 });
};

stopTimer = (timerId) => {
  const now = Date.now();
  this.setState({
    timers: this.state.timers.map((timer) => {
    if (timer.id === timerId) {
      const lastElapsed = now - timer.runningSince;
        return Object.assign({}, timer, {
          elapsed: timer.elapsed + lastElapsed,
          runningSince: null,
        });
      } else {
          return timer;
        }
     }),
  });
};

handleCreateFormSubmit = (timer) => {
  this.createTimer(timer);
};
  
createTimer = (timer) => {
  const t = helpers.newTimer(timer);
  this.setState({timers: this.state.timers.concat(t)})
};
    
  handleDeleteTimer = (timerID)  => {
    this.deleteTimer(timerID);
  };

  deleteTimer = (timerID) => {
    this.setState({timers: this.state.timers.filter(t => t.id !== timerID)});
  };

  handleEditFormSubmit = (editedTimer) =>  {
    this.updateTimers(editedTimer);
  };

  updateTimers = (editedTimer) => {
    this.setState({timers: this.state.timers.map((t) =>  {
      if(t.id === editedTimer.id)  {
        return Object.assign({}, t, {
          title: editedTimer.title,
          project: editedTimer.project
        });
      }
      else{
        return t;
      }
    })
  });
  };

  render() {
      return(
        <div className = "ui three column centered grid">
          <div className = "column">
            <EditableTimerList timers = {this.state.timers}
              handleDeleteTimer = {this.handleDeleteTimer}
              onFormSubmit = {this.handleEditFormSubmit}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
            />
            <ToggleableTimeForm handleSubmit = {this.handleCreateFormSubmit}/>
          </div>
        </div>
      );
  }  
}

export default TimerDashboard;