import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import './App.css';

const paper = 'img/paper.png';
const rock = 'img/rock.png';
const scissors = 'img/scissors.png';
const winMessage = 'You WON';
const looseMessage = 'You lose';
const drawMessage = 'DRAW';

const Game = () => {

    const itemsList = [paper, rock, scissors];
    const [compScore, setCompScore] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [compChoose, setCompChoose] = useState();
    const [compChoosedAlt, setCompChoosedAlt] = useState();
    const [whoWinMessage, setWhoWinMessage] = useState('');
    const [whoWinMessageCSSClass, setWhoWinMessageCSSClass] = useState('');
    const [itemPlayerChoosedClass, setItemPlayerChoosedClass] = useState('');
    const [itemCompChoosedClass, setItemCompChoosedClass] = useState('');
    const [itemChoosed, setItemChoosed] = useState([]);
    const [itemChoosedAlt, setItemChoosedAlt] = useState('');

    const HandleClick = (item) => {

        // computer turn
        let compChoose = Math.floor(Math.random() * 3);
        setCompChoose(compChoose);

        if (item === "paper") {
            setItemChoosed(paper);
            setItemChoosedAlt('paper');
            setItemPlayerChoosedClass('imgItemChoosed');

            if (compChoose === 0) { // comp. choosed PAPER
                setWhoWinMessage(drawMessage);
                setWhoWinMessageCSSClass('gray')
                setCompChoosedAlt('paper');
                setItemPlayerChoosedClass('imgItemChoosed');
                setItemCompChoosedClass('imgItemChoosed');
            } else if (compChoose === 1) { // comp. choosed ROCK
                setPlayerScore(playerScore + 1);
                setWhoWinMessage(winMessage);
                setWhoWinMessageCSSClass('green');
                setItemPlayerChoosedClass('imgItemChoosedWin');
                setItemCompChoosedClass('imgItemChoosedLoose');
                setCompChoosedAlt('rock');
            } else { // comp. choosed SCISSORS
                setWhoWinMessage(looseMessage);
                setCompScore(compScore + 1);
                setWhoWinMessageCSSClass('red');
                setItemPlayerChoosedClass('imgItemChoosedLoose');
                setItemCompChoosedClass('imgItemChoosedWin');
                setCompChoosedAlt('scissors');
            }
        } else if (item === "rock") {
            setItemChoosed(rock);
            setItemChoosedAlt('rock');
            setItemPlayerChoosedClass('imgItemChoosed');
            if (compChoose === 0) { // comp. choosed PAPER
                setWhoWinMessage(looseMessage);
                setCompScore(compScore + 1);
                setWhoWinMessageCSSClass('red');
                setItemPlayerChoosedClass('imgItemChoosedLoose');
                setItemCompChoosedClass('imgItemChoosedWin');
                setCompChoosedAlt('paper');
            } else if (compChoose === 1) { // comp. choosed ROCK
                setWhoWinMessage(drawMessage);
                setWhoWinMessageCSSClass('gray')
                setCompChoosedAlt('paper');
                setItemPlayerChoosedClass('imgItemChoosed');
                setItemCompChoosedClass('imgItemChoosed');
            } else { // comp. choosed SCISSORS
                setWhoWinMessage(winMessage);
                setPlayerScore(playerScore + 1);
                setWhoWinMessageCSSClass('green');
                setItemPlayerChoosedClass('imgItemChoosedWin');
                setItemCompChoosedClass('imgItemChoosedLoose');
                setCompChoosedAlt('scissors');
            }
        } else {
            setItemChoosed(scissors);
            setItemChoosedAlt('scissors');
            setItemPlayerChoosedClass('imgItemChoosed');
            if (compChoose === 0) { // comp. choosed PAPER
                setWhoWinMessage(winMessage);
                setPlayerScore(playerScore + 1);
                setWhoWinMessageCSSClass('green');
                setItemPlayerChoosedClass('imgItemChoosedWin');
                setItemCompChoosedClass('imgItemChoosedLoose');
                setCompChoosedAlt('paper');
            } else if (compChoose === 1) { // comp. choosed ROCK
                setWhoWinMessage(looseMessage);
                setCompScore(compScore + 1);
                setWhoWinMessageCSSClass('red');
                setItemPlayerChoosedClass('imgItemChoosedLoose');
                setItemCompChoosedClass('imgItemChoosedWin');
                setCompChoosedAlt('rock');
            } else { // comp. choosed SCISSORS
                setWhoWinMessage(drawMessage);
                setWhoWinMessageCSSClass('gray')
                setCompChoosedAlt('scissors');
                setItemPlayerChoosedClass('imgItemChoosed');
                setItemCompChoosedClass('imgItemChoosed');
            }
        }
    };

    return (
        <div className="App">
				<header className="header">
					<div className="banner">
						<img src="img/game.png" alt="game" className="imgGame" />
						<h1>Game - Rock-paper-scissors</h1>
					</div>

					<a href="/" className="newGameOption">
						Start a new game
					</a>
				</header>
                <p className="scores">
					Your score: <span className="score green">{playerScore}</span>{' '}
					| Computer score:{' '}
					<span className="score compScore">{compScore}</span>
				</p>
                    <h2>Play, choose:</h2>
                    <img
                        src={itemsList[0]}
                        alt="paper"
                        className="imgItem"
                        onClick={() => HandleClick("paper")}
                    />
                    <img
                        src={itemsList[1]}
                        alt="rock"
                        className="imgItem"
                        onClick={() => HandleClick("rock")}
                    />
                    <img
                        src={itemsList[2]}
                        alt="scissors"
                        className="imgItem"
                        onClick={() => HandleClick("scissors")}
                    />
              
      
				<div className="game-place">
					<div className="your-choice">
						<h3>Your choice</h3>
						<img
							src={itemChoosed}
							alt={itemChoosedAlt}
							className={itemPlayerChoosedClass}
						/>
					</div>
                        <div className="result">
                        <h3>Who won</h3>
                        <h2 className={whoWinMessageCSSClass}>
                            {whoWinMessage}
                        </h2>
                        </div>
                   
					<div className="comp-choice">
						<h3>Computer choice</h3>
						<FadeIn transitionDuration="2000">
							<img
								src={itemsList[compChoose]}
								alt={compChoosedAlt}
								className={itemCompChoosedClass}
							/>
						</FadeIn>
					</div>
                </div>
		</div>

    );
}

export default Game;
