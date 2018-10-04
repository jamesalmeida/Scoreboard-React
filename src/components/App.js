import React, { Component } from 'react';
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        highscore: false,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        highscore: false,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        highscore: false,
        id: 3
      },
      {
        name: "James",
        score: 0,
        highscore: false,
        id: 4
      }
    ],
    highscore: null
  };

  // Player id couter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));


    // console.log('index: ' + index, 'delta: ' + delta);
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  handleAddPlayer = (name) => {
    // console.log(...this.state.players);
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  // handleAddPlayer = (name) => {
  //   let newPlayer = {
  //     name,
  //     score: 0,
  //     id: this.prevPlayerId += 1
  //   };
  //   this.setState( prevState => ({
  //     players: prevState.players.concat(newPlayer)
  //   }));
  // }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highscore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            isHighScore={highscore === player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
