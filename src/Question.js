import React, { useState, useRef, useEffect } from 'react'

import kalender from './images/kalender.png'
import piller from './images/piller.png'
import surgery from './images/surgery.png'
import user from './images/user.png'

export default function Question({numberCor, randomNum, randomNum2, maxNum}){
const pills = [user,kalender, piller, surgery, user]
const pillsAnswer = ['placeholder','kalender','piller', 'surgery','user']
const [previousAnswer, setpreviousAnswer] = useState(0);

var arrayToRandom = []
arrayToRandom.push(numberCor)
arrayToRandom.push(randomNum)
arrayToRandom.push(randomNum2)

console.log(arrayToRandom)
arrayToRandom.sort()

console.log(arrayToRandom)


function checkAnswer(answer){
  if(answer === numberCor){
    alert("CORRECT!")
  }
  else{
    alert("WRONG")
  }
}

useEffect(() => {
  if(previousAnswer){
      checkAnswer(previousAnswer)
  }
},[previousAnswer]);

function answer1(){
  setpreviousAnswer(arrayToRandom[0])
}
function answer2(){
  setpreviousAnswer(arrayToRandom[1])
}
function answer3(){
  setpreviousAnswer(arrayToRandom[2])
}
  return (
    <div className="spilContainer">
     <div className="gameHeader">Gæt Pillen</div>
     <img className="logos" src={pills[numberCor]} />
     <div className="allanswerButtonContainer">
      <div className="answerButtonContainer">
        <li> A </li>
        <button className="answerButton" onClick={answer1}>{pillsAnswer[arrayToRandom[0]]}</button>
      </div>
      <div className="answerButtonContainer">
        <li> B </li>
        <button className="answerButton" onClick={answer2}>{pillsAnswer[arrayToRandom[1]]}</button>
      </div>
      <div className="answerButtonContainer">
        <li> C </li>
        <button className="answerButton" onClick={answer3}>{pillsAnswer[arrayToRandom[2]]}</button>
      </div>
     </div>
    </div>
  )

}
