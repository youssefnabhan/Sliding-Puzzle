import Block from "./Block"
import board from '../Models/board'
import { useState } from "react"


const BoardGame = ({gameBoard,swap}) => {
   
    
    
    let row1,row2,row3,row4
    [row1,row2,row3,row4] = gameBoard
    const blockNumbers  = [...row1,...row2,...row3,...row4]
    const win = () => {
        const order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        for(var i = 0;i< 16;i++){
            if (blockNumbers[i] != order[i]){
                return false
            }
        }
        return true
    }
    const ohYeah = win()
    console.log(ohYeah)
    if(ohYeah){
        return (<h1>You Win!</h1>)
    }
    else{
        return  (
            
            <div style={style} >
                
                {blockNumbers.map((number,index)=> <Block key={number} swap={swap} i={Math.ceil((index+1)/4)-1} j={ (index+1)%4 ? (index+1)%4 -1 : 3 } num={number}/>

                
                )}   
            </div>

//{blockNumbers.map((number,index)=> <Block />)}

                
)}
            
        
    }


const style = {
    display:"inline",
    width:"400px",
    height:"400px"
}
export default BoardGame
