
import React, { Component } from 'react';
import EmojiCard from "./components/EmojiCard";
import Wrapper from "./components/Wrapper";
import emojis from "./emojis.json";
import Footer from "./components/Footer";
import Score from "./components/Score/Score";
import "./App.css"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emojis,
      score: 0,
      goal: 8,
      highScore: 0,
      status: ""
    }

  }
  componentDidMount() {
    const newEmojis = this.state.emojis.map(emoji => {
      return { ...emoji, count: 0 }
    })

  }
  gameOver = () => {

    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log(this.state.highScore)
      });

    }
    const newEmojis = this.state.emojis.map(emoji => {
      return { ...emoji, count: 0 }
    });
   
    this.setState({ score: 0, status: "Game Over! You lost. Click to play again", emojis: newEmojis });

  }

  gameWon = () => {

    if (this.state.score === 8) {
      this.setState({ highScore: this.state.score }, function () {
        console.log("You win!")
      });

    }
    const newEmojis = this.state.emojis.map(emoji => {
      return { ...emoji, count: 0 }
    });

    this.setState({ score: 8, status: "You won! Great job, Click to play again", emojis: newEmojis });
  }

  selectEmoji = id => {
    console.log(emojis);
    if (this.state.score === 0) {
      this.setState({ status: "Starting new Game!" })
    }
    this.state.emojis.find((j, i) => {
      if (j.id === id) {
        if (emojis[i].count === 0) {
          emojis[i].count = emojis[i] + 1;
          this.setState({ score: this.state.score + 1, status: "You guessed correctly!" }, function () {
          });
          this.state.emojis.sort(() => Math.random() - 0.5)
          return true;

        } else if (this.gameWon()) {

        } else {
          this.gameOver();
        }
      }
    });


  }


  render() {
    return (

      <div className="App">

        <header>

          <div className="topnav fixed-top py-4 bg-dark text-white-50">
            <div className="containerNavFooter">
              <a className="activeButton" href="#home">Clicky Game</a>

              <Score
                total={this.state.score}
                highScore={this.state.highScore}
                goal={8}
                status={this.state.status}
              />


            </div>

          </div>

          <div className="container1">
            <h1 >Clicky Game!</h1>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>

          </div>

        </header>

        <Wrapper>
          <main className="container">

            {this.state.emojis.map(emoji => (
              <EmojiCard
                selectEmoji={this.selectEmoji}
                key={emoji.id}
                id={emoji.id}
                image={emoji.image}
              />

            ))}
          </main>
        </Wrapper>

        < Footer />

      </div>
    );
  }
}



export default App;