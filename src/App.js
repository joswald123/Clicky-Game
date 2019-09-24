
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
      emojisArray: [],
      goal: 8,
      status: ""

    }
    // this.increment = this.increment.bind(this)
  }
  componentDidMount() {

    this.setState({ emojisArray: emojis })
  }

  // increment = () => {

  //   this.setState({ score: this.state.score + 1 })

  // }

  selectEmoji = id => {

    console.log(id);

    let emojisArray = this.state.emojisArray;

    if(emojisArray.includes(id)){
      
      this.setState({ emojisArray: [], score: 0, status: "Game Over! You lost. Click to play again"});
      console.log("Game Over! You lost. Click to play again")
      return;
    }else{

      emojisArray.push(id)

      if(emojisArray.length === 8){
         this.setState({ score: 8, status: "You won! Great job, Click to play again", emojisArray: []});
        console.log("You win!")
      }
    }
    this.setState({emojis, emojisArray, score: emojis.length, status: " "});


    for (let i = emojis.push.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [emojis[i], emojis[j]] = [emojis[j], emojis[i]];
    }
  


  }



  render() {
    return (

      <div className="App">

        <header>

          <div className="topnav fixed-top py-4 bg-dark text-white-50">
            <div className="containerNavFooter">
              <a className="active" href="#home">Clicky Game</a>
              <Score total={this.state.score}
              goal= {8}
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

            {this.state.emojisArray.map(emoji => (
              <EmojiCard
                selectEmoji={() => this.selectEmoji(emoji.id)}
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