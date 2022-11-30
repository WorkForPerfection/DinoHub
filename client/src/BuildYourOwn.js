import{useNavigate} from "react-router-dom";
import React from 'react';
import styles from "./general.module.css";
import ReactDOM from 'react-dom/client';
import './css/build-your-own.css';

import leg_1 from './Leg/1.png';
import leg_2 from './Leg/2.png';
import leg_3 from './Leg/3.png';
import leg_4 from './Leg/4.png';
import leg_5 from './Leg/5.png';
import leg_6 from './Leg/6.png';
import leg_7 from './Leg/7.png';
import leg_8 from './Leg/8.png';
import leg_9 from './Leg/9.png';

import head_1 from './Head/1.png';
import head_2 from './Head/2.png';
import head_3 from './Head/3.png';
import head_4 from './Head/4.png';
import head_5 from './Head/5.png';
import head_6 from './Head/6.png';
import head_7 from './Head/7.png';
import head_8 from './Head/8.png';
import head_9 from './Head/9.png';

import body_1 from './Body/1.png';
import body_2 from './Body/2.png';
import body_3 from './Body/3.png';
import body_4 from './Body/4.png';
import body_5 from './Body/5.png';
import body_6 from './Body/6.png';
import body_7 from './Body/7.png';
import body_8 from './Body/8.png';
import body_9 from './Body/9.png';

import tail_1 from './Tail/1.png';
import tail_2 from './Tail/2.png';
import tail_3 from './Tail/3.png';
import tail_4 from './Tail/4.png';
import tail_5 from './Tail/5.png';
import tail_6 from './Tail/6.png';
import tail_7 from './Tail/7.png';
import tail_8 from './Tail/8.png';
import tail_9 from './Tail/9.png';




function Image(props) {
  return (
      <div>
	  <img className='image'
	       src={props.url}
	       alt="dino skeleton"
	  />
	  <button className="square" onClick={props.onClick}>
	      {props.value}
	  </button>
      </div>
  );
}

class Choice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	index: Array(36).fill(null),
	url: [leg_1,leg_2,leg_3,leg_4,leg_5,leg_6,leg_7,leg_8,leg_9,head_1,head_2,head_3,head_4,head_5,head_6,head_7,head_8,head_9,body_1,body_2,body_3,body_4,body_5,body_6,body_7,body_8,body_9,tail_1,tail_2,tail_3,tail_4,tail_5,tail_6,tail_7,tail_8,tail_9],
	mark: 'X',
	last: -1,
	
    };
  }
  handleClick(i){
      const ind = this.state.index.slice();
      if(ind[i]){
	  ind[i]=null;
	  this.setState({index:ind, mark: this.state.mark, last: -1})
	  return;
      }
      let temp=Math.floor(i/9);
      if(this.state.last!=-1 && temp == Math.floor(this.state.last/9)){return;}
      ind[i]=this.state.mark;
      this.setState({index:ind, mark: this.state.mark, last: i});
      
  }

    renderChoice(i) {
	return (<Image value={this.state.index[i]} onClick={() => this.handleClick(i)} url={this.state.url[i]}/>);
    }
    
    getResult(){
	let results = [];
	for(let k=0; k<36; k++){
	    if(this.state.index[k]!=null){
		results.push(this.state.url[k]);
	    }
	}
	return results;
    }
    
    render() {
	const status = "Choose from below";
	const leg = "Legs: ";
	const head = "Heads: ";
	const body = "Bodys: ";
	const tail = "Tails: ";
	
	return (
	    <div>
		<div className="status">{status}</div>
		<div className="title">{leg}</div>
		<div className="choice-row">
		    {this.renderChoice(0)}
		    {this.renderChoice(1)}
		    {this.renderChoice(2)}
		    {this.renderChoice(3)}
		    {this.renderChoice(4)}
		    {this.renderChoice(5)}
		    {this.renderChoice(6)}
		    {this.renderChoice(7)}
		    {this.renderChoice(8)}
		</div>
		<div className="title">{head}</div>
		<div className="choice-row">
		    {this.renderChoice(9)}
		    {this.renderChoice(10)}
		    {this.renderChoice(11)}
		    {this.renderChoice(12)}
		    {this.renderChoice(13)}
		    {this.renderChoice(14)}
		    {this.renderChoice(15)}
		    {this.renderChoice(16)}
		    {this.renderChoice(17)}
		</div>
		<div className="title">{body}</div>
		<div className="choice-row">
		    {this.renderChoice(18)}
		    {this.renderChoice(19)}
		    {this.renderChoice(20)}
		    {this.renderChoice(21)}
		    {this.renderChoice(22)}
		    {this.renderChoice(23)}
		    {this.renderChoice(24)}
		    {this.renderChoice(25)}
		    {this.renderChoice(26)}
		</div>
		<div className="title">{tail}</div>
		<div className="choice-row">
		    {this.renderChoice(27)}
		    {this.renderChoice(28)}
		    {this.renderChoice(29)}
		    {this.renderChoice(30)}
		    {this.renderChoice(31)}
		    {this.renderChoice(32)}
		    {this.renderChoice(33)}
		    {this.renderChoice(34)}
		    {this.renderChoice(35)}
		</div>
		<Display data={this.getResult()} />
	    </div>
	    
	);
    }
}

class Display extends React.Component {
    renderLegs(){
	if(this.props.data.size()!=4){return;}
	return this.props.data[0];
    }
    renderHead(){
	if(this.props.data.size()!=4){return;}
	return this.props.data[1];
    }
    renderBody(){
	if(this.props.data.size()!=4){return;}
	return this.props.data[2];
    }
    renderTail(){
	if(this.props.data.size()!=4){return;}
	return this.props.data[3];
    }
    render(){
	return{
	    
	}
    }
}

class Build extends React.Component {
  render() {
    return (
	<div className="build">
            <div className="build-choice">
		<Choice />
            </div>
	</div>
    );
  }
}


export function BuildYourOwn(){
    const navigate = useNavigate();
    return (
        <dev className={styles.content_begin}>
            <button onClick={()=>{navigate(-1)}}> Back </button>
            <Build />
        </dev>
    );
}
