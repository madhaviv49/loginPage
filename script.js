const button= document.getElementById('btn');
const mButton= document.getElementById('month-button');
const yButton= document.getElementById('year-button');
let flag= false;

mButton.addEventListener('click', () =>{
    if(flag){
        const currentPosition= parseInt(getComputedStyle(button).left, 10);
        const currentWidth= parseInt(getComputedStyle(button).width, 10);
        
        button.style.left= `${currentPosition - 70}px`;
        button.style.width= `${currentWidth + 20}px`;
        flag=!flag;

        document.getElementById('mobile-rate').textContent = '$ 100'; 
        document.getElementById('basic-rate').textContent = '$ 200'; 
        document.getElementById('standard-rate').textContent = '$ 500'; 
        document.getElementById('premium-rate').textContent = '$ 700'; 
        
    }
});

yButton.addEventListener('click', () =>{
    if(!flag){
        const currentPosition= parseInt(getComputedStyle(button).left, 10);
        const currentWidth= parseInt(getComputedStyle(button).width, 10);
        
        button.style.left= `${currentPosition + 70}px`;
        button.style.width= `${currentWidth - 20}px`;
        flag=!flag;

        document.getElementById('mobile-rate').textContent = '$ 1000'; 
        document.getElementById('basic-rate').textContent = '$ 2000'; 
        document.getElementById('standard-rate').textContent = '$ 5000'; 
        document.getElementById('premium-rate').textContent = '$ 7000'; 
    }
});
///////////////////////////////////////////////////////////////////////////////////
let activeButton = null;
let activeTail = null;

const tails = [".mobile-down", ".basic-down", ".standard-down", ".premium-down"];

function changeColor(buttonIndex) {
  const buttons = document.querySelectorAll('.plan-button');

  if (activeButton !== null) {
    activeButton.classList.remove("active");
  }
  if (activeTail !== null) {
    activeTail.classList.remove("active-down");
  }

  buttons[buttonIndex].classList.add("active");
  activeButton = buttons[buttonIndex];

  const tailElement = document.querySelector(tails[buttonIndex]);
  tailElement.classList.add("active-down");
  activeTail = tailElement;
}


document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  window.location.href = "plans.html";
});