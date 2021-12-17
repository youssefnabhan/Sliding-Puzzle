
var board = []

var number = 1
for (var i = 0; i<4 ;i++){
    board.push([number++,number++,number++,number++])
}

var emptyIndex = [3,3]

const getNeighbours = (i,j) => {
    const neighbours = []
    const neighbourIndex = []
    if(!(i===0)){ //up available
        neighbours.push(board[i-1][j])
        neighbourIndex.push([i-1,j])
    }
    if(!(i===3)){ //down available
        neighbours.push(board[i+1][j])
        neighbourIndex.push([i+1,j])
    }
    if(!(j===0)){ //left available
        neighbours.push(board[i][j-1])
        neighbourIndex.push([i,j-1])
    }
    if (!(j===3)){ //right available
        neighbours.push(board[i][j+1])
        neighbourIndex.push([i,j+1])
    }
    
    return {neighbours,neighbourIndex}
}


const movable =  (i,j) => {
    const {neighbours} = getNeighbours(i,j)
    return neighbours.includes(16)
}


const swap = (i,j) => {
    if(movable(i,j)){
        board[emptyIndex[0]][emptyIndex[1]] = board[i][j]
        board[i][j] = 16
        emptyIndex=[i,j]
             
    }
    
    var newArray = [];

    for ( i = 0; i < board.length; i++)
    newArray[i] = board[i].slice();


    return newArray
    
}
const shuffle = () => {
    for(var i = 0; i<1000;i++){
        const {neighbourIndex}  = getNeighbours(emptyIndex[0],emptyIndex[1])
        const random = Math.floor(Math.random() * neighbourIndex.length)
        swap(neighbourIndex[random][0],neighbourIndex[random][1])
    }
    var newArray = [];

    for ( i = 0; i < board.length; i++)
    newArray[i] = board[i].slice();

    return newArray

    
}
shuffle()




export default {board,getNeighbours,movable,swap,shuffle}


