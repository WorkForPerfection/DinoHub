import { useNavigate } from "react-router-dom";
import styles from "./general.module.css";
import './css/Dino.css'
import './css/App.css'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/build-your-own.css'
import leg_1 from './BuildYourOwn/Leg/1.png';
import leg_2 from './BuildYourOwn/Leg/2.png';
import leg_3 from './BuildYourOwn/Leg/3.png';
import leg_4 from './BuildYourOwn/Leg/4.png';
import leg_5 from './BuildYourOwn/Leg/5.png';
import leg_6 from './BuildYourOwn/Leg/6.png';
import leg_7 from './BuildYourOwn/Leg/7.png';
import leg_8 from './BuildYourOwn/Leg/8.png';
import leg_9 from './BuildYourOwn/Leg/9.png';

import head_1 from './BuildYourOwn/Head/1.png';
import head_2 from './BuildYourOwn/Head/2.png';
import head_3 from './BuildYourOwn/Head/3.png';
import head_4 from './BuildYourOwn/Head/4.png';
import head_5 from './BuildYourOwn/Head/5.png';
import head_6 from './BuildYourOwn/Head/6.png';
import head_7 from './BuildYourOwn/Head/7.png';
import head_8 from './BuildYourOwn/Head/8.png';
import head_9 from './BuildYourOwn/Head/9.png';

import body_1 from './BuildYourOwn/Body/1.png';
import body_2 from './BuildYourOwn/Body/2.png';
import body_3 from './BuildYourOwn/Body/3.png';
import body_4 from './BuildYourOwn/Body/4.png';
import body_5 from './BuildYourOwn/Body/5.png';
import body_6 from './BuildYourOwn/Body/6.png';
import body_7 from './BuildYourOwn/Body/7.png';
import body_8 from './BuildYourOwn/Body/8.png';
import body_9 from './BuildYourOwn/Body/9.png';

import tail_1 from './BuildYourOwn/Tail/1.png';
import tail_2 from './BuildYourOwn/Tail/2.png';
import tail_3 from './BuildYourOwn/Tail/3.png';
import tail_4 from './BuildYourOwn/Tail/4.png';
import tail_5 from './BuildYourOwn/Tail/5.png';
import tail_6 from './BuildYourOwn/Tail/6.png';
import tail_7 from './BuildYourOwn/Tail/7.png';
import tail_8 from './BuildYourOwn/Tail/8.png';
import tail_9 from './BuildYourOwn/Tail/9.png';


const caraStyle = {
	display: 'flex',
	flexWrap: 'wrap'
}

const cardStyle = {
	textAlign: 'center', padding: '0', display: 'flex', flexWrap: 'wrap'
}

function Image(props) {
	return (
		<div>
			<img className='image'
				src={props.url}
				alt="dino skeleton"
			/>
			<button className="button-d"
				style={{ height: '2rem', width: '2rem', textAlign: 'center' }}
				onClick={props.onClick}>
				{props.value}
			</button>
		</div>
	);
}

class Choice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: Array(36).fill(null),
			url: [leg_1, leg_2, leg_3, leg_4, leg_5, leg_6, leg_7, leg_8, leg_9, head_1, head_2, head_3, head_4, head_5, head_6, head_7, head_8, head_9, body_1, body_2, body_3, body_4, body_5, body_6, body_7, body_8, body_9, tail_1, tail_2, tail_3, tail_4, tail_5, tail_6, tail_7, tail_8, tail_9],
			mark: 'X',
			last: -1,
			isvalid: false,
			result: [],

		};
	}
	handleClick(i) {
		const ind = this.state.index.slice();
		if (ind[i]) {
			ind[i] = null;
			this.setState({ index: ind, mark: this.state.mark, last: -1 })
			return;
		}
		let temp = Math.floor(i / 9);
		let head = -1;
		let legs = -1;
		let tail = -1;
		let body = -1;
		for (let k = 0; k < 9; k++) {
			if (ind[k] !== null) { legs = k; }
		}
		for (let k = 9; k < 18; k++) {
			if (ind[k] !== null) { head = k; }
		}
		for (let k = 18; k < 27; k++) {
			if (ind[k] !== null) { body = k; }
		}
		for (let k = 27; k < 36; k++) {
			if (ind[k] !== null) { tail = k; }
		}
		if ((legs !== -1 && temp === 0) || (head !== -1 && temp === 1) || (body !== -1 && temp === 2) || (tail !== -1 && temp === 3)) { return; }
		ind[i] = this.state.mark;
		this.setState({ index: ind, mark: this.state.mark, last: i });

	}

	renderChoice(i) {
		return (<Image
			value={this.state.index[i]}
			onClick={() => this.handleClick(i)}
			style={{ width: '4rem', height: 'auto' }}
			url={this.state.url[i]} />);
	}

	getResult(props) {
		let n = 0;
		this.state.isvalid = false;
		this.state.result = Array(4).fill(null);
		for (let k = 0; k < 36; k++) {
			if (this.state.index[k] != null) {
				this.state.result[n] = this.state.url[k];

				n++;
			}
		}
		if (this.state.result.length === 4 && this.state.result[0] !== null && this.state.result[1] !== null && this.state.result[2] !== null && this.state.result[3] !== null)
			this.setState({ index: this.state.index, mark: this.state.mark, last: this.state.last, isvalid: true, result: this.state.result });
	}

	return_back(props) {
		this.setState({ index: Array(36).fill(null), mark: this.state.mark, last: this.state.last, isvalid: false, result: this.state.result });
	}
	normal(props) {
		const status = "Choose from below";
		const leg = "Legs: ";
		const head = "Heads: ";
		const body = "Bodys: ";
		const tail = "Tails: ";
		const normal_render = (
			<Card>
				<div className="status">{status}</div>
				<Carousel>
					<Carousel.Item style={caraStyle}>

						<Card style={cardStyle}>
							<Card.Header className="title">{leg}</Card.Header>
							{this.renderChoice(0)}
							{this.renderChoice(1)}
							{this.renderChoice(2)}
							{this.renderChoice(3)}
							{this.renderChoice(4)}
							{this.renderChoice(5)}
							{this.renderChoice(6)}
							{this.renderChoice(7)}
							{this.renderChoice(8)}
						</Card>
					</Carousel.Item>
					<Carousel.Item style={caraStyle}>
						<Card style={cardStyle}>

							<Card.Header className="title">{head}</Card.Header>
							{this.renderChoice(9)}
							{this.renderChoice(10)}
							{this.renderChoice(11)}
							{this.renderChoice(12)}
							{this.renderChoice(13)}
							{this.renderChoice(14)}
							{this.renderChoice(15)}
							{this.renderChoice(16)}
							{this.renderChoice(17)}
						</Card>
					</Carousel.Item>
					<Carousel.Item style={caraStyle}>
						<Card style={cardStyle}>

							<Card.Header className="title">{body}</Card.Header>
							{this.renderChoice(18)}
							{this.renderChoice(19)}
							{this.renderChoice(20)}
							{this.renderChoice(21)}
							{this.renderChoice(22)}
							{this.renderChoice(23)}
							{this.renderChoice(24)}
							{this.renderChoice(25)}
							{this.renderChoice(26)}
						</Card>
					</Carousel.Item>
					<Carousel.Item style={caraStyle}>
						<Card style={cardStyle}>
							<Card.Header className="title">{tail}</Card.Header>
							{this.renderChoice(27)}
							{this.renderChoice(28)}
							{this.renderChoice(29)}
							{this.renderChoice(30)}
							{this.renderChoice(31)}
							{this.renderChoice(32)}
							{this.renderChoice(33)}
							{this.renderChoice(34)}
							{this.renderChoice(35)}
						</Card>
					</Carousel.Item>
				</Carousel>
				<Row>
					<button className='button-d' onClick={() => this.getResult()}> Build </button>
				</Row>
			</Card>);
		const display_render = (
			<div className='grid'>
				<img className='legs'
					src={this.state.result[0]}
					alt="dino skeleton"
				/>
				<img className='head'
					src={this.state.result[1]}
					alt="dino skeleton"
				/>
				<img className='body'
					src={this.state.result[2]}
					alt="dino skeleton"
				/>
				<img className='tail'
					src={this.state.result[3]}
					alt="dino skeleton"
				/>
				<button onClick={() => this.return_back()}> Rebuild </button>
			</div>
		);
		if (this.state.isvalid) { return display_render; }
		else return normal_render;
	}
	render() {
		return (
			this.normal()
		);
	}
}

class Display extends React.Component {
	renderLegs() {
		if (this.props.data.size() != 4) { return; }
		return this.props.data[0];
	}
	renderHead() {
		if (this.props.data.size() != 4) { return; }
		return this.props.data[1];
	}
	renderBody() {
		if (this.props.data.size() != 4) { return; }
		return this.props.data[2];
	}
	renderTail() {
		if (this.props.data.size() != 4) { return; }
		return this.props.data[3];
	}
	render() {
		return (
			<div className="build">
				<img className='image'
					src={this.renderLegs()}
					alt="dino skeleton"
				/>
			</div>
		)
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



export function BuildYourOwn() {
	const navigate = useNavigate();
	return (
		<Container>
			<Container style={{ textAlign: 'center' }}>
				<button className='button-d' style={{ margin: '3rem 0 0 0' }} onClick={() => { navigate(-1) }}> Back </button>
			</Container>

			<Build />
		</Container>
	);
}

