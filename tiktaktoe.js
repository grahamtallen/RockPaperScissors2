// unit test library native to Node.js
// in some javascript or typescript flavors,
// you will import modules like so:
// import assert from "assert"
const assert = require("assert");

// create a function that accepts both players moves as input
// and returns the resulting winner based on that input
// a draw is also a fair result
//
//
//

const ROCK = "tiktak";
const PAPER = "paper";
const SCISSORS = "scissors";
const draw = "draw";
var rpsObj = {
  [ROCK]: {
    beats: SCISSORS
  },
  [PAPER]: {
    beats: ROCK
  },
  [SCISSORS]: {
    beats: PAPER
  }
};
const PLAYER_A_WON = "Player a won";
const PLAYER_B_WON = "Player b won";

const playTikTakPaperScissors = (playerA, playerB) => {
  let result;
  if (playerA === playerB) {
    return draw;
  }
  if (rpsObj[playerA].beats === playerB) {
    return PLAYER_A_WON;
  }
  if (rpsObj[playerB].beats === playerA) {
    return PLAYER_B_WON;
  }

  return result;
};

const result1 = playTikTakPaperScissors(ROCK, ROCK);
assert(result1 === draw);
const result2 = playTikTakPaperScissors(ROCK, SCISSORS);
assert(result2 === PLAYER_A_WON);
const result3 = playTikTakPaperScissors(ROCK, PAPER);
assert(result3 === PLAYER_B_WON);
