    //this will create 16 DIVs 
    const mainContainer = document.querySelector('.mainContainer');
    for(let i=0;i<16;i++){
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseenter',()=>div.style.backgroundColor='black');
        mainContainer.appendChild(div);
        for(let j=0;j<15;j++){
            const div = document.createElement('div');
            div.classList.add('square');
            div.addEventListener('mouseenter',()=>div.style.backgroundColor='black');
            mainContainer.appendChild(div);
        }
    }

        