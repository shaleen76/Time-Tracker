import React from 'react';
import TimerForm from './TimerForm';


class ToggleableTimerForm extends React.Component {

    state = {
        isOpen: false
    };

    handleCreatTimer = () => {
        this.setState({isOpen : true});
    };

    handleSubmit = (timer) =>   {
        this.props.handleSubmit(timer);
        this.setState({isOpen : false});
    };

    onFormClose = () => {
        this.setState({isOpen : false});
    };

    render()    {
        if(this.state.isOpen)   {
            return(
                <TimerForm 
                    onFormSubmit = {this.handleSubmit}
                    onFormClose = {this.onFormClose}/>
            );
        }
        else    {
            return(
                <div className = 'ui basic content center aligned segment'>
                    <button className = 'ui basic button icon' onClick = {this.handleCreatTimer}>
                        <i className = 'plus icon' />
                    </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;