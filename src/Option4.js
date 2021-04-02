import React, { useState, useRef, useEffect } from 'react'
import hospitalLogo from './images/hospitalLogo.svg'
import piller from './images/piller.png'
import Question from './Question.js'




export default function Option4(){
var array = [0,1,2,3];
const [gameState, setgameState] = useState(false);
const [numberCor, setnumberCor] = useState(0);
const [randomNum, setrandomNum] = useState(0);
const [randomNum2, setrandomNum2] = useState(0);
const [wrongAnswerFix, setwrongAnswerFix] = useState(0);
const [wrongAnswerFix2, setwrongAnswerFix2] = useState(0);

function getRandomWithOneExclusion(lengthOfArray,indexToExclude, secondindexToExclude){

  var rand = null;  //an integer

    while(rand === null || rand === indexToExclude || rand === secondindexToExclude || rand === 0){
       rand = Math.round(Math.random() * (lengthOfArray ));
    }

  return rand ;
}

function getRandomWithout0(lengthOfArray){

  var rand = null;  //an integer

    while(rand === null || rand === 0){
       rand = Math.round(Math.random() * (lengthOfArray));
    }

  return rand ;
}

function startSpil(){
  setgameState(!gameState)
  var numberlol= getRandomWithout0(array.length)
  setnumberCor(numberlol)
  var randomNumber = getRandomWithOneExclusion(array.length,numberlol)
  var randomNumber2 = getRandomWithOneExclusion(array.length,randomNumber,numberlol)
  setrandomNum(randomNumber)
  setrandomNum2(randomNumber2)
}


  if(gameState === true){
    return(
      <div>
        <div className="header">
          <div className="headerFont">
            Min Tidslinje
          </div>
        </div>
        <button className="startSpil" onClick={startSpil}> Slut Spil</button>
        <Question maxNum={array.length} numberCor={numberCor} randomNum={randomNum} randomNum2={randomNum2} />
      </div>
    )
  }


  return(
    <div>
      <div className="header">
        <div className="headerFont">
          Min Tidslinje
        </div>
      </div>
        <button className="startSpil" onClick={startSpil}> Start Spil</button>
    </div>
  )
}
