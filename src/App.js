import {Container,Row,Button} from 'react-bootstrap'
import BoardGame from './components/BoardGame'
import board from './Models/board';
import { useState } from 'react';

function App() {
  
  const [gameBoard,setBoard] = useState(board.board)
    
  const swap = (i,j) => {
  
      const newBoard = board.swap(i,j)
      
      setBoard(newBoard)
    
  }
  const shuffle = () => {
    const newBoard = board.shuffle()
    setBoard(newBoard)
  }



  return (
    <div>
      <Container style={style}>
        
        <Row>
          <BoardGame gameBoard={gameBoard} swap={swap}/>
        </Row>
        <Row style={{padding:"5vh"}}>
          <Button onClick={shuffle}>Shuffle</Button>
        </Row>
      </Container>
    </div>
  );
}

const style = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:'center',
  height:"100vh"
}

export default App;
