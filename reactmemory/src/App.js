import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "Click an image to begin!",
    friends: friends,
    topScore: 0,
    score: 0,
    unselectedQueen: friends
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  selectQueen = name => {
    const findQueen = this.state.unselectedQueen.find(item => item.name === name);

    if(findQueen === undefined) {
      this.setState({
        message: "You chose poorly!",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        friends: friends,
        unselectedQueen: friends
      });
    }
    else {
      const newFriends = this.state.unselectedQueen.filter(item => item.name !== name);

      this.setState({
        message: "You chose wisely",
        score: this.state.score + 1,
        friends: friends,
        unselectedQueen: newFriends
      });
    }
    this.shuffleArray(friends);

  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title>RuPaul's Memory Race</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            selectQueen={this.selectQueen}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
