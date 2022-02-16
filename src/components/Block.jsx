import React, { useState } from 'react'
import EmptyBlock from './EmptyBlock'
import board from '../Models/board'


const Block = ({num,swap,i,j}) => {
    const row = Math.ceil(num / 4)
    const col = num % 4 ? num % 4 : 4
    const dim1 = (col-1) * -100
    const dim2 = (row-1) * -100
    const [style,setStyle] = useState(
        {
            width:"90px",
            height:"90px",
            display:"inline-block",
            fontSize:"xx-large",
            padding:"0",
            border:"solid black 2px",
            backgroundImage:"url('./image.jpg')",
            color:"black",
            backgroundSize:"400px 400px",
            backgroundPosition:`${dim1}px ${dim2}px`
        }
    )
    if(num === 16) {
        return (<EmptyBlock/>)
    }

   

    
    
    const hover = () => {
        if(board.movable(i,j))
        setStyle({
            width:"90px",
            height:"90px",
            display:"inline-block",
            fontSize:"xx-large",
            padding:"0",
            border:"solid red 2px",
            backgroundImage:"url('./image.jpg')",
            color:"red",
            backgroundSize:"400px 400px",
            backgroundPosition:`${dim1}px ${dim2}px`
        })
    }
    const leave = () => {
        setStyle({
            width:"90px",
            height:"90px",
            display:"inline-block",
            fontSize:"xx-large",
            padding:"0",
            border:"solid black 2px",
            backgroundImage:"url('./image.jpg')",
            color:"black",
            backgroundSize:"400px 400px",
            backgroundPosition:`${dim1}px ${dim2}px`
        })
    }

    const swapper = () => {
        swap(i,j)
        
    }
    return (
        <div style={style} onMouseOver={hover} onMouseLeave={leave} onClick={swapper} >
            {num}
        
        </div>
    )
    

}

const getRand = () => Math.floor(Math.random() * 5) * 10


export default Block
