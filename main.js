//this will create 16 DIVs 
const container = document.querySelector('.container');
createNewGrid(16);

function createNewGrid(value){
    const howManySquares = value ; //get the number of total width and height
    const squareSizePercentage = 100 / value; 
    console.log(squareSizePercentage);
    container.innerHTML = ''; //clear old grid by assigning it to nothing
    for(let i=0;i<howManySquares;i++){
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseenter',()=>div.style.backgroundColor='black');
        div.style.width = `${squareSizePercentage}%`; // Set square width
        div.style.height = `${squareSizePercentage}%`; // Set square height
        container.appendChild(div);
        for(let j=0;j<howManySquares-1;j++){
            let div = document.createElement('div');
            div.classList.add('square');
            div.addEventListener('mouseenter',()=>div.style.backgroundColor='black');
            div.style.width = `${squareSizePercentage}%`; // Set square width
            
            div.style.height = `${squareSizePercentage}%`; // Set square height
            container.appendChild(div);
        }
    }
}

function newGrid(){
    let value = prompt('what is the size of your desired grid ?');
    return createNewGrid(value);

}

