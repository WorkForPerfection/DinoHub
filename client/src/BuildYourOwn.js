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
	       alt="car"
	  />
	  <button className="square" onClick={props.onClick}>
	      {props.value}
	  </button>
      </div>
  );
}

class Leg_Choice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	index: Array(9).fill(null),
	leg_url: [leg_1,leg_2,leg_3,leg_4,leg_5,leg_6,leg_7,leg_8,leg_9],
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
      if(this.state.last!=-1){return;}
      ind[i]=this.state.mark;
      this.setState({index:ind, mark: this.state.mark, last: 0});
      
  }

    renderLeg(i) {
	return (<Image value={this.state.index[i]} onClick={() => this.handleClick(i)} url={this.state.leg_url[i]}/>);
    }
    render() {
	const status = "Choose from below";
	const leg = "Legs: "
	return (
	    <div>
		<div className="status">{status}</div>
		<div className="title">{leg}</div>
		<div className="choice-row">
		    {this.renderLeg(0)}
		    {this.renderLeg(1)}
		    {this.renderLeg(2)}
		    {this.renderLeg(3)}
		    {this.renderLeg(4)}
		    {this.renderLeg(5)}
		    {this.renderLeg(6)}
		    {this.renderLeg(7)}
		    {this.renderLeg(8)}
		</div>
	    </div>
	);
    }
}

class Head_Choice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	index: Array(9).fill(null),
	head_url: [head_1,head_2,head_3,head_4,head_5,head_6,head_7,head_8,head_9],
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
      if(this.state.last!=-1){return;}
      ind[i]=this.state.mark;
      this.setState({index:ind, mark: this.state.mark, last: 0});
      
  }

    renderHead(i) {
	return (<Image value={this.state.index[i]} onClick={() => this.handleClick(i)} url={this.state.head_url[i]}/>);
    }
    render() {
	const status = "Choose from below";
	const head = "Heads: "
	return (
	    <div>
		<div className="status">{status}</div>
		<div className="title">{head}</div>
		<div className="choice-row">
		    {this.renderHead(0)}
		    {this.renderHead(1)}
		    {this.renderHead(2)}
		    {this.renderHead(3)}
		    {this.renderHead(4)}
		    {this.renderHead(5)}
		    {this.renderHead(6)}
		    {this.renderHead(7)}
		    {this.renderHead(8)}
		</div>
	    </div>
	);
    }
}

class Body_Choice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	index: Array(9).fill(null),
	body_url: [body_1,body_2,body_3,body_4,body_5,body_6,body_7,body_8,body_9],
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
      if(this.state.last!=-1){return;}
      ind[i]=this.state.mark;
      this.setState({index:ind, mark: this.state.mark, last: 0});
      
  }

    renderBody(i) {
	return (<Image value={this.state.index[i]} onClick={() => this.handleClick(i)} url={this.state.body_url[i]}/>);
    }
    render() {
	const status = "Choose from below";
	const body = "Bodys: "
	return (
	    <div>
		<div className="status">{status}</div>
		<div className="title">{body}</div>
		<div className="choice-row">
		    {this.renderBody(0)}
		    {this.renderBody(1)}
		    {this.renderBody(2)}
		    {this.renderBody(3)}
		    {this.renderBody(4)}
		    {this.renderBody(5)}
		    {this.renderBody(6)}
		    {this.renderBody(7)}
		    {this.renderBody(8)}
		</div>
	    </div>
	);
    }
}


class Tail_Choice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	index: Array(9).fill(null),
	tail_url: [tail_1,tail_2,tail_3,tail_4,tail_5,tail_6,tail_7,tail_8,tail_9],
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
      if(this.state.last!=-1){return;}
      ind[i]=this.state.mark;
      this.setState({index:ind, mark: this.state.mark, last: 0});
      
  }

    renderTail(i) {
	return (<Image value={this.state.index[i]} onClick={() => this.handleClick(i)} url={this.state.tail_url[i]}/>);
    }
    render() {
	const status = "Choose from below";
	const tail = "Tails: "
	return (
	    <div>
		<div className="status">{status}</div>
		<div className="title">{tail}</div>
		<div className="choice-row">
		    {this.renderTail(0)}
		    {this.renderTail(1)}
		    {this.renderTail(2)}
		    {this.renderTail(3)}
		    {this.renderTail(4)}
		    {this.renderTail(5)}
		    {this.renderTail(6)}
		    {this.renderTail(7)}
		    {this.renderTail(8)}
		</div>
	    </div>
	);
    }
}

class Build extends React.Component {
  render() {
    return (
	<div className="build">
            <div className="build-choice">
		<Leg_Choice />
		<Head_Choice />
		<Body_Choice />
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
