import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        tags:[
            {count:0},
            {count:0},
            {count:0},
            {count:0}
        ]
    };
    constructor(){
        super();
        this.handleincrement = this.handleincrement.bind(this);
    }
    handleincrement(){
        this.state.count = this.state.count + 1;
        this.setState({
            count: this.state.count
        })
    }
    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleincrement} className='btn btn-secondary btn-sm'>Increament</button>
            </React.Fragment>
        );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes+= this.state.count === 0 ? "warning":"primary";
        return classes;
    }
}
 
export default Counter;