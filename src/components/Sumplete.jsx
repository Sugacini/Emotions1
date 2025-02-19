import "../Sumplete.css";
import { useRef } from "react";

function Sumplete() {

    const headDiv = useRef();
    const backBtn = useRef();
    const startBtn = useRef();
    const hideRef = useRef();

    function startHandler(){
        console.log("Enter");
        console.log(headDiv.current.id);
    }

    function backButton(){
        console.log("Enter");
    }

    function playButton(){
        console.log("This is play Button");
    }
    return (
        <>

            <div className="background" ref={backBtn}>
                <div className="heading" ref={headDiv}>Sumplete</div>
                <div className="play" onclick={playButton}>How to play</div>
                <div className="startButton" onclick={startHandler} ref={startBtn}>Start</div>
            </div>
            {/* <div id="background" ref={backRef}>
                <div className="heading" ref={headRef}>Sumplete</div>
                <div id="play" onclick="playButton()">How to Play</div>
                <button onclick={startHandler} id="startButton" ref={startRef}>Start</button>
            </div> */}

            <div id="instruction" onclick="instructor()">
                <p className="first">How to Play? </p>
                <p className="second">In this game to find out the specific number(outside the grid) you need to cut down the irrelevant number inside the grid. If you click on the irrelevant numbers, it will be removed. You can undo the click, if you find the number relevant. If the specific number matches the sum of the numbers inside the grid, it will change color. There is a hint option help you. Click on the submit button to complete the game.</p>
                <div className="back" onclick={backButton}>
                    <img src="left.png"></img>
                </div>
            </div>

            <div id="hideDiv" ref={hideRef}>
                <p className="headName">Sumplete</p>
                <div className="firstBox">
                    <div id="totalMoves"></div>
                    <div className="finalComment"></div>
                    <div id="timer">
                        <img src="/sumplete/images/timer.png" />
                        <p id="timerCount"></p>
                    </div>
                </div>
                <div className="secondDiv">
                    <div id="gridDiv"></div>
                    <div id="answerDiv"></div>
                    <div id="optionsDiv">
                        <button className="menuBox" onclick="hintOption()">Hint</button>
                        <button className="menuBox" onclick="reset()">Reset</button>
                        <div className="menuBox1">
                            <p className="word1">Grid :</p>
                            <div className="box1">
                                <button className="subheading" onclick="createGrid(3)">3*3</button>
                                <button className="subheading" onclick="createGrid(4)">4*4</button>
                                <button className="subheading" onclick="createGrid(5)">5*5</button>
                            </div>
                        </div>
                        <button className="menuBox" onclick="submit()">Submit</button>
                    </div>
                </div>
                <div id="answerDiv1"></div>
            </div>
        </>
    )
}

export default Sumplete;