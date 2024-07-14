 import React, {useState} from "react";
import Square from "./Square";


    


 const Board =() => {
    const [state,setState]=useState(Array(9).fill(null))
        const[isXTurn,setIsXTurn]=useState(true);

        const checkWinner = () => {
            const winnerLogic =[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
            ];

            for(let logic of winnerLogic) {
                const [a, b, c]= logic;
                if(state[a] !== null && state[a]===state[b] && state[a]===state[c]){
                    return state[a];
                } 
            }

            return false;
        };

        const isWinner = checkWinner();


    const handleCLick=(index) => {
        if(state[index] !== null){
            return;
        }
        const copyState=[...state];
        copyState[index]= isXTurn ? "X":"0";
        setState(copyState);
        setIsXTurn(!isXTurn);
    };

    const handleReset = () => {
        setState(Array(9).fill(null));
    }

    return (
    <div className="board-container">
        { isWinner ? (
         <>
         {isWinner} won the game <button className="bg-blue-500" onClick={handleReset}>Play Again</button></> 
    ) : (
    <> 
    <h4 className="px-24 bg-cyan-500 text-pretty text-wrap">Player {isXTurn ? 'X' : '0'} Please Move</h4>
    <div className="board-row">
        <Square onClick={() => handleCLick(0)} value={state[0]}/>
        <Square onClick={() => handleCLick(1)} value={state[1]}/>
        <Square onClick={() => handleCLick(2)} value={state[2]}/> 
    </div>
    <div className="board-row">
        <Square onClick={() => handleCLick(3)} value={state[3]}/>
        <Square onClick={() => handleCLick(4)} value={state[4]}/>
        <Square onClick={() => handleCLick(5)} value={state[5]}/>
    </div>
    <div className="board-row">
        <Square onClick={() => handleCLick(6)} value={state[6]}/>
        <Square onClick={() => handleCLick(7)} value={state[7]}/>
        <Square onClick={() => handleCLick(8)} value={state[8]}/>
    </div>
    </>
   ) }
</div>  
  );
};


 export default Board;