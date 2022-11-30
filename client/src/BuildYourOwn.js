import{useNavigate} from "react-router-dom";
import React from 'react';
import styles from "./general.module.css";
import ReactDOM from 'react-dom/client';
import './css/build-your-own.css';

class Image extends React.Component {
    constructor(props){
	super(props);
	this.state={
	    value:null,
	}
    }
    render() {
	return (
	    <div>
		<img className='image'
		    src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
		    alt="car"
		/>
		<button className="square" onClick={() => this.setState({value:'X'})}>
		    {this.state.value}
		</button>
	    </div>
	);
    }
}

class Choice extends React.Component {
  renderImage(i) {
      return <Image value={i} />;
  }

  render() {
      const status = 'Choose from bellow:';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="choice-row">
          {this.renderImage(0)}
          {this.renderImage(1)}
          {this.renderImage(2)}
        </div>
        <div className="choice-row">
          {this.renderImage(3)}
          {this.renderImage(4)}
          {this.renderImage(5)}
        </div>
        <div className="choice-row">
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
