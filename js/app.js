let trigger1 = document.querySelector('.hover-trigger1');
let hoverBox1 = document.querySelector('.hoverbox1');

trigger1.addEventListener('mouseover', () =>{
    hoverBox1.style.display = 'block';
});

trigger1.addEventListener('mouseout', () =>{
    hoverBox1.style.display = 'none';
});


let trigger2 = document.querySelector('.hover-trigger2');
let hoverBox2 = document.querySelector('.hoverbox2');

trigger2.addEventListener('mouseover', () =>{
    hoverBox2.style.display = 'block';
});

trigger2.addEventListener('mouseout', () =>{
    hoverBox2.style.display = 'none';
});
