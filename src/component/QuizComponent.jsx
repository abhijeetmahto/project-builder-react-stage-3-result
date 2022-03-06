import React, { Component } from 'react';
import Questions from '../resources/question.json';
import './Quiz.css';
import {Link} from 'react-router-dom';

class QuizComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            qid:0,
            time:250,
            ans:[0,0,0,0,0,0,0,0,0,0]
        }
        this.intervalId = setInterval(this.timer.bind(this), 1000)
        this.removeId = setInterval(this.removeAns.bind(this), 2000);
    }
    nextQ = () => {
        this.setState({
            qid: this.state.qid + 1
        })
        if (this.state.qid >= 8) {
            document.getElementById("next").classList.add("dis");
            this.setState({
                qid: 9
            })
        } else {
            document.getElementById("pre").classList.remove("dis");
        }
    }
    preQ = () => {
        this.setState({
            qid: this.state.qid - 1
        })
        if (this.state.qid <= 1) {
            document.getElementById("pre").classList.add("dis");
            this.setState({
                qid: 0
            })
        } else {
            document.getElementById("next").classList.remove("dis");
        }
    }
    quitbtn = () => {
        clearInterval(this.intervalId);
        clearInterval(this.removeId);
        this.props.sentAns(this.state.ans);
    }
    timer = () => {
        this.setState({
            time: this.state.time - 1
        })
        if (this.state.time < 1) {
            this.quitBtn();
        }
    }
    optionSelect = (e) => {
        let span = document.createElement("span");
        if (Questions[this.state.qid].answer === e.target.value) {
            span.textContent = "Correct Answer";
            span.classList.add("yes");
            let newAns = [...this.state.ans];
            newAns[this.state.qid] = 1;
            this.setState({
                ans: [...newAns]
            })
        } else {
            span.textContent = "Wrong Answer";
            span.classList.add("no");
            let newAns = [...this.state.ans];
            newAns[this.state.qid] = -1;
            this.setState({
                ans: [...newAns]
            })
        }
        document.getElementById("ans").appendChild(span);
        this.nextQ()
    }

    removeAns = () => {
        let spans = document.getElementById("ans");
        if (spans === null) {
            clearInterval(this.removeId);
        } else {

            if (spans.hasChildNodes()) {
                spans.removeChild(spans.firstChild);
            }
        }
    }
    render(){
        return(
             <div className="box">
                    <h1>Question</h1>
                    <div className="ans" id="ans"></div>
                    
                    <div className="QueData">
                    <span className="quesNo">{this.state.qid + 1} of 10</span>
                    <span>{Questions[this.state.qid].question}</span>
                    <span className='tim'>{this.state.time} <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/twelve-thirty_1f567.png" alt="stopwatch" height="30px" /></span>
                    </div>
                    <div className="options">
                        <button onClick={this.optionSelect} value={Questions[this.state.qid].optionA}>{Questions[this.state.qid].optionA}</button>
                        <button onClick={this.optionSelect} value={Questions[this.state.qid].optionB}>{Questions[this.state.qid].optionB}</button>
                        <button onClick={this.optionSelect} value={Questions[this.state.qid].optionC}>{Questions[this.state.qid].optionC}</button>
                        <button onClick={this.optionSelect} value={Questions[this.state.qid].optionD}>{Questions[this.state.qid].optionD}</button>
                    </div>
                    <div className="bottom">
                        <button onClick={this.preQ} id="pre" className="dis">Previous</button>
                        <button onClick={this.nextQ} id="next">Next</button>
                        <Link to="/result"><button onClick={this.quitbtn}>Quit</button></Link>
                    </div>
                </div>
        )
    }
}
export default QuizComponent;