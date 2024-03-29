
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
    });
    this.setState({ status: " ", emojis: newEmojis });
  }
  resetImages = ()=>{
    const newEmojis = this.state.emojis.map(emoji => {
      return { ...emoji, count: 0 }
    });
    return newEmojis
  }
  gameOver = () => {

    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
    }
   
    this.setState({ score: 0, status: "Game Over! You lost. Click to play again", emojis: this.resetImages() });

  }
  gameWon = () => {

    if (this.state.score === this.state.goal) {
      this.setState({ highScore: this.state.score });

      this.setState({ score: 8, status: "You won! Great job, Click to play again", emojis: this.resetImages() });
      return true
    }
    return false

  }

  selectEmoji = id => {
    this.state.emojis.find((emoji) => {
      if (emoji.id === id) {
        if (emoji.count === 0) {
          emoji.count = emoji + 1;
          this.setState({ score: this.state.score + 1, status: "You guessed correctly!" }, function () {
          });
          
          this.state.emojis.sort(() => Math.random() - 0.5)
          return true;

        }else if(this.gameWon())  {
         
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
              <a className="activeButton" href="#home"> <ion-icon name="logo-game-controller-b"></ion-icon> <ion-icon name="happy"></ion-icon> </a>

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