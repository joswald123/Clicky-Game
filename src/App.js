
import React, { Component } from 'react';
import EmojiCard from "./components/EmojiCard";
import Wrapper from "./components/Wrapper";
import emojis from "./emojis.json";
import Footer from "./components/Footer"
import "./App.css"



class App extends Component {
  
  constructor(props) {
    super(props)
     this.state = {
       count: 0, 
       emojiScore: [],
     }
     this.increment = this.increment.bind(this)
    }

  increment = () => {
    
    this.setState({ count: this.state.count +1 })

  }

  selectEmoji = id => {
    const emojiSelected = emojis.filter(emoji => emoji.id !== id);
    this.setState({ emojiScore:emojiSelected });
  }



  render() {
    return (

      <div className="App">

        <header>
           <div className="container1">
          <h1 >Clicky Game!</h1>
          <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </div>
        <nav className="navbar inverse fixedTop">
          <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li className="brand"><a href="/">You guessed correctly!</a></li>
            <li className="brand"><a href="/">Score: { this.state.count } </a></li>
            <button onClick={this.increment}>Increase</button>
            </ul>
        </nav>
        </header>
     
        <Wrapper>

        {this.state.emojiScore.map(emoji => (
            <EmojiCard
              selectEmoji={this.selectEmoji}
              image={emoji.image}
            />

          ))}


        </Wrapper>

        < Footer />
      </div>
    );
  }
}



export default App;