    let x1 = document.querySelector('#btn-1');
    let x2 = document.querySelector('#btn-2');
    let x3 = document.querySelector('#heading');
    let x4 = document.querySelector('#input-2');
    x1.addEventListener("click",function(){
        console.log("hey");
        x2.classList.remove('active');
        x1.classList.add('active');
        x3.innerHTML = `
        Sign-In
        `;
        x4.style.height = '40px';

        
    });
    x2.addEventListener("click",function(){
        console.log("hey2");
        x1.classList.remove('active');
        x2.classList.add('active');
        x3.innerHTML = `
        Sign-Up
        `;
        x4.style.height = '0px';

    });


    // document.querySelector('#btn-2').style.backgroundcolor = 'black';  
    // document.querySelector('#btn-2').innerHTML = 
    // `
    // backgroundcolor = red;
    // `;
