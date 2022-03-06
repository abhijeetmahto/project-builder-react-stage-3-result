import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Result.css';
class ResultComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ans: [...this.props.sentAns],
            res: ""
        }
    }
    render(){
        return(
            <div className='container'>
                <div id="img"></div>
                <h1 className='head'>Result</h1>
                <div className='box'>
                {
                        ((this.state.ans.filter((answer) => {
                            return answer === 1
                        }).length) / (this.state.ans.length) * 100) < 60 ?
                            <h2 className='feed'>You need more practice</h2>
                            :
                            <h2 className='feed'>You did good!!</h2>
                }
                
                <h1 className='score'>Your Score: {
                        ((this.state.ans.filter((answer) => {
                            return answer === 1
                        }).length) / (this.state.ans.length) * 100).toFixed(2)
                    }%</h1>
                <div className='res'>
                <div className="details"><span>Total number of questions</span><span>{this.state.ans.length}</span></div>
                        <div className="details"><span>Number of attempted questions</span><span>{
                            this.state.ans.filter((answer) => {
                                return answer !== 0
                            }).length
                        }</span></div>
                        <div className="details"><span>Number of Correct Answers</span><span>{
                            this.state.ans.filter((answer) => {
                                return answer === 1
                            }).length
                        }</span></div>
                        <div className="details"><span>Number of Wrong Answers</span><span>{
                            this.state.ans.filter((answer) => {
                                return answer === -1
                            }).length
                        }</span></div>
                </div>
                </div>
                <div className='btn'><Link to='/quiz'><button className='pbtn'>Play Again</button></Link><Link to='/'><button className='hbtn'>Back to Home</button></Link></div>
            </div>
        );
    }
    
}
export default ResultComponent;