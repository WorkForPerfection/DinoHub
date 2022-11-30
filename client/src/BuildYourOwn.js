import{useNavigate} from "react-router-dom";
import React from 'react';
import styles from "./general.module.css";
import ReactDOM from 'react-dom/client';
import './css/build-your-own.css';

import leg_1 from './1.png';
import leg_2 from './2.png';
import leg_3 from './3.png';
import leg_4 from './4.png';
import leg_5 from './5.png';
import leg_6 from './6.png';
import leg_7 from './7.png';
import leg_8 from './8.png';
import leg_9 from './9.png';


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

class Choice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	index: Array(9).fill(null),
	url: leg_1,
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

  renderImage(i) {
      return (<Image value={this.state.index[i]} onClick={() => this.handleClick(i)} url={this.state.url}/>);
  }

    render() {
	const status = "Choose from below: ";
	
	return (
	    <div>
		<div className="status">{status}</div>
		<div className="choice-row">
		    {this.renderImage(0)}
		    {this.renderImage(1)}
		    {this.renderImage(2)}
		    {this.renderImage(3)}
		    {this.renderImage(4)}
		    {this.renderImage(5)}
		    {this.renderImage(6)}
		    {this.renderImage(7)}
		    {this.renderImage(8)}
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
          <Choice />
        </div>
        <div className="build-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
