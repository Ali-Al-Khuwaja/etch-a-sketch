let currentGridSize = '';
let eraserMode = false;
let drawingMode = true;
//this will create 16 DIVs 
const gridContainer = document.querySelector('.gridContainer');
newGrid(16);

function createNewGrid(value){
    const howManySquares = value ; //get the number of total width and height
    const squareSizePercentage = 100 / value; 
    console.log(squareSizePercentage);
    gridContainer.innerHTML = ''; //clear old grid by assigning it to nothing
    for(let i=0;i<howManySquares;i++){
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseenter',()=>{
            if(eraserMode===true){
                div.style.backgroundColor='#DCD7C9';
            }else{ div.style.backgroundColor='black'}});
        div.style.width = `${squareSizePercentage}%`; // Set square width
        div.style.height = `${squareSizePercentage}%`; // Set square height
        gridContainer.appendChild(div);
        for(let j=0;j<howManySquares-1;j++){
            let div = document.createElement('div');
            div.classList.add('square');
            div.addEventListener('mouseenter',()=>{
                if(eraserMode===true){
                    div.style.backgroundColor='#DCD7C9';
                }else{ div.style.backgroundColor='black'}});;
            div.style.width = `${squareSizePercentage}%`; // Set square width
            
            div.style.height = `${squareSizePercentage}%`; // Set square height
            gridContainer.appendChild(div);
        }
    }
}


function newGrid(autoValue){
    if(autoValue===undefined){
        let value = prompt('what is the size of your desired grid ? , 16, 32 ,64?');
        if(value>100){
            alert("no , we don't do that here , this is a discount version , use asprite if you really want to draw big stuff");
            alert('the old grid will stay until you choose a value that is equal or under 100');
            return clearGrid();
        }else if (value<100||value>0){
            currentGridSize = value;
            console.log(currentGridSize);
            return createNewGrid(value);       
        }
    }
    currentGridSize = autoValue;
    return createNewGrid(autoValue);

}
function clearGrid(){
    gridContainer.textContent='';
    createNewGrid(currentGridSize);
}
function eraser(){
    eraserMode = true ;
    drawingMode = false;
}
function drawing(){
    eraserMode = false;
    drawingMode = true;
}