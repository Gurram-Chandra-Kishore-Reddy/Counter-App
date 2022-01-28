import React, { Component } from 'react';
import ".//styles.css"
class Counter_new extends Component {
    state = { 
        totalCount:0,
        count1:0,
        count2:0,
        count3:0,                               // maintains all the data that is used in the html
        count4:0
     }
    constructor(){   // if no constructor is written parent constructor is called by default but if we write constrcutor 
        super();                  // we need to call a super() in order to execute parent constructor.
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        if(e.target.id == 'reset')
        {
            this.state["totalCount"] = 0;
            this.state.count1=0;
            this.state.count2=0;
            this.state.count3=0;
            this.state.count4=0;
            this.setState({
                totalCount: this.state.totalCount,
                count1:this.state.count1,
                count2:this.state.count2,
                count3:this.state.count3,
                count4:this.state.count4
            })
        }
        else if(e.target.id[1] == '0'){
            this.state["count" + e.target.id[0]] = this.state["count" + e.target.id[0]] + 1;
            this.state.totalCount = this.state.totalCount + 1;
            this.setState({
                totalCount: this.state.totalCount,
                count1:this.state.count1,
                count2:this.state.count2,
                count3:this.state.count3,
                count4:this.state.count4
            })
        }
        else if(e.target.id[1] == '1')
        {
            if(this.state["count" + e.target.id[0]] >0)
            {this.state["count" + e.target.id[0]] = this.state["count" + e.target.id[0]] - 1;
            this.state.totalCount = this.state.totalCount - 1;
            this.setState({
                totalCount: this.state.totalCount,
                count1:this.state.count1,
                count2:this.state.count2,
                count3:this.state.count3,
                count4:this.state.count4
            })
            }
        }
    }   
    getSpanClassName(id){
        let classes = "badge m-4 badge-";
        if(id == "TC")
        {
            if(this.state.totalCount === 0)
            {
                return classes+"warning";
            }
            else
            {
                return classes+"primary";
            }
        }
        else{
            if(this.state["count"+id] === 0)
            {
                return classes+"warning";
            }
            else
            {
                return classes+"primary";
            }
        }
    } 
    getSpanData(id){
        if(id == "TC")
        {
            if(this.state.totalCount === 0)
            {
                return "Zero";
            }
            else
            {
                return this.state.totalCount;
            }
        }
        else{
            if(this.state["count"+id] === 0)
            {
                return "Zero";
            }
            else
            {
                return this.state["count"+id];
            }
        }
    }
    getBtnClassName(id){
        let classes = "btn btn-sm ";
        if(this.state["count"+id] === 0)
        {
            classes = classes + "btn-secondary";
        }
        else{
            classes = classes + "btn-dark";
        }
        return classes;
    }
    // getLi1BtnClassName(){
    //     let classes = "btn btn-sm ";
    //     if(this.state.count1 === 0)
    //     {
    //         classes = classes + "btn-secondary";
    //     }
    //     else{
    //         classes = classes + "btn-dark";
    //     }
    //     return classes;
    // } 
    // getLi2BtnClassName(){
    //     let classes = "btn btn-sm ";
    //     if(this.state.count2 === 0)
    //     {
    //         classes = classes + "btn-secondary";
    //     }
    //     else{
    //         classes = classes + "btn-dark";
    //     }
    //     return classes;
    // } 
    // getLi3BtnClassName(){
    //     let classes = "btn btn-sm ";
    //     if(this.state.count3 === 0)
    //     {
    //         classes = classes + "btn-secondary";
    //     }
    //     else{
    //         classes = classes + "btn-dark";
    //     }
    //     return classes;
    // } 
    // getLi4BtnClassName(){
    //     let classes = "btn btn-sm ";
    //     if(this.state.count4 === 0)
    //     {
    //         classes = classes + "btn-secondary";
    //     }
    //     else{
    //         classes = classes + "btn-dark";
    //     }
    //     return classes;
    // }
    
    render() { 
        return (
            <React.Fragment>
                <header className='header-class'>
                <h3>Total Count</h3>
                <span className={this.getSpanClassName("TC")}>{this.getSpanData("TC")}</span>
                </header>
                <body>
                    <button id='reset' type="button" onClick={this.handleClick} class="btn btn-primary btn-sm my-btn">Reset</button>
                    <ul className="my-ul">
                        <li className='my-li-ul c1'><ul className='my-ul'>
                            <div className='f'>
                            <li className='my-li'><span className={this.getSpanClassName("1")}>{this.getSpanData("1")}</span></li>
                            </div>
                            <li id='i1' className='my-li'><button id='10' onClick={this.handleClick} type="button" className="btn btn-sm btn-dark ">+</button></li>
                            <li className='my-li'><button id='11' onClick={this.handleClick} type="button" className={this.getBtnClassName("1")}>-</button></li>
                        </ul></li>
                        <li className='my-li-ul'><ul className='my-ul'>
                            <div className="f">
                            <li className='my-li'><span className={this.getSpanClassName("2")}>{this.getSpanData("2")}</span></li>
                            </div>
                            <li className='my-li'><button id='20' onClick={this.handleClick} type="button" className="btn btn-sm btn-dark ">+</button></li>
                            <li className='my-li'><button id='21' onClick={this.handleClick} type="button" className={this.getBtnClassName("2")}>-</button></li>
                        </ul></li>
                        <li className='my-li-ul'><ul className='my-ul'>
                            <div className="f">
                            <li className='my-li'><span className={this.getSpanClassName("3")}>{this.getSpanData("3")}</span></li>
                            </div>
                            <li className='my-li'><button id='30' onClick={this.handleClick} type="button" className="btn btn-sm btn-dark ">+</button></li>
                            <li className='my-li'><button id='31' onClick={this.handleClick} type="button" className={this.getBtnClassName("3")}>-</button></li>
                        </ul></li>
                        <li className='my-li-ul'><ul className='my-ul'>
                            <div className="f">
                            <li className='my-li'><span className={this.getSpanClassName("4")}>{this.getSpanData("4")}</span></li>
                            </div>
                            <li className='my-li'><button id='40' onClick={this.handleClick} type="button" className="btn btn-sm btn-dark ">+</button></li>
                            <li className='my-li'><button id='41' onClick={this.handleClick} type="button" className={this.getBtnClassName("4")}>-</button></li>
                        </ul></li>
                    </ul>
                </body>
            </React.Fragment>
        );
    }
}
 
export default Counter_new;