import React from "react";
import "./App.css";
import quotes from "./quotes.json";
import colors from "./colors.json";
import twitter from "./icons8-twitter.svg";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			randomNum: Math.floor(Math.random() * 102),
			randomColor: Math.floor(Math.random() * colors.length),
		};
		this.newQuote = this.newQuote.bind(this);
	}
	// Previously: Math.floor(Math.random() * 16777215).toString(16)
	newQuote() {
		this.setState({
			randomNum: Math.floor(Math.random() * 102),
			randomColor: Math.floor(Math.random() * colors.length),
		});
	}
	render() {
		console.log(colors[0].color);
		document.documentElement.style.setProperty(
			"--color",
			`${colors[this.state.randomColor].color}`
		);
		const tweet = `"${quotes[this.state.randomNum].quote}" ${
			quotes[this.state.randomNum].author
		}`;

		return (
			<div className="app">
				<div id="quote-box">
					<div id="text">"{quotes[this.state.randomNum].quote}"</div>
					<div id="author">- {quotes[this.state.randomNum].author}</div>
					<div id="actions">
						<a
							href={`https://twitter.com/intent/tweet?text=${tweet}&hashtags=quotes`}
							id="tweet-quote"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={twitter} alt="twitter icon" />
						</a>
						<button id="new-quote" onClick={this.newQuote}>
							New Quote
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
