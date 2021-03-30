import React, { useState, useRef, useEffect } from 'react'
import Option1 from './Option1'
import Option2 from './Option2'
import Option3 from './Option3'
import Option4 from './Option4'
import kalender from './images/kalender.png'
import piller from './images/piller.png'
import surgery from './images/surgery.png'


export default function TimelineCreation ({isLoggedIn, completeState, handleClick, handleLogoutClick}) {
  const [state, setState] = useState({})
  const [mainPageState, setmainPageState] = useState(true);
  const [option1State, setoption1State] = useState(false);
  const [option2State, setoption2State] = useState(false);
  const [option3State, setoption3State] = useState(false);
  const [option4State, setoption4State] = useState(false);


  function handleOption1(){
    setoption1State(!option1State)
    setmainPageState(!mainPageState)
  }
  function handleOption2(){
    setoption2State(!option2State)
    setmainPageState(!mainPageState)
  }
  function handleOption3(){
    setoption3State(!option3State)
    setmainPageState(!mainPageState)
  }
  function handleOption4(){
    setoption4State(!option4State)
    setmainPageState(!mainPageState)
  }



  if(mainPageState === true){
    return (

      <div className="mainPage">
        <button className="tilbageKnap" onClick={handleLogoutClick}> Log Ud </button>
        <div className="header">
          <div className="headerFont">
            App Navn
          </div>
        </div>
        <div className="optionContainer">
          <button className="mainPagebutton" onClick={handleOption1}>
            <div className="option">
              Min Bruger
            </div>
          </button>

          <button className="mainPagebutton" onClick={handleOption2}>
            <img src={piller}/>
            <div className="option">
              Medicin Guide
            </div>
          </button>

          <button className="mainPagebutton" onClick={handleOption3}>
            <img src={surgery}/>
            <div className="option">
              Læs Om Operationen
            </div>
          </button>

          <button className="mainPagebutton" onClick={handleOption4}>
            <img src={kalender}/>
            <div className="option">
              Min Tidslinje
            </div>
          </button>
        </div>

      </div>
    )
  }

  if(option1State === true){
    return(
      <div>
      <button className="tilbageKnap" onClick={handleOption1}> Tilbage </button>
      <Option1  />
      </div>
    )
  }

  if(option2State === true){
    return(
      <div>
      <button className="tilbageKnap" onClick={handleOption2}> Tilbage </button>
      <Option2  />
      </div>
    )
  }

  if(option3State === true){
    return(
      <div>
      <button className="tilbageKnap" onClick={handleOption3}> Tilbage </button>
      <Option3  />
      </div>
    )
  }

  if(option4State === true){
    return(
      <div>
      <button className="tilbageKnap" onClick={handleOption4}> Tilbage </button>
      <Option4 />
      </div>
    )
  }

}
