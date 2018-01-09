import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import GameHeader from './Components/GameHeader';
import MainContainer from './Components/MainContainer';
import ImageBlock from './Components/ImageBlock';
import images from './images.json';
import './Components/components.css';

class App extends Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",


  };

  shuffleArray = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

  handleClick = id => {
    console.log("in handle click " + id);
    let score = this.state.score;
    // Filter this.state.friends for friends with an id not equal to the id being removed
  //  const friends = this.state.friends.filter(friend => friend.id !== id);
    let message = "";
    let topScore = this.state.topScore;
    let currentImages = this.state.images;
    const clickedImage = currentImages.find(image => image.id === id);



      if (clickedImage.clicked===false)
      {
        score++;
          if (score > topScore)
          {
            topScore = score;
          }
        clickedImage.clicked = true;
        message = "You guessed correctly!";
      }
      else {
        currentImages.map(image => (image.clicked=false));
        message = "You guessed incorrectly!";
        score=0;
      }

     currentImages = this.shuffleArray(currentImages);

      this.setState({
      score:score,
      topScore: topScore,
      message:message,
      images:currentImages
      }

    );



    console.log(score);
  };



  render() {
    return (
      <div className="App">
          <Navbar
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.message}
          />

          <GameHeader/>
          <MainContainer>
          {this.state.images.map(image => (
            <ImageBlock
            handleClick={this.handleClick}
            id={image.id}
            key={image.id}
            url={image.url}
            />


          ))}
          </MainContainer>


      </div>
    )};
  };




export default App;
