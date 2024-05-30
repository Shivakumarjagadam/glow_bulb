//lets see how to add event listeners..

 /*
   let button=document.querySelector('#my-btn');
let behaviour= event => console.log("im clicked");
   button.addEventListener('click',behaviour);
let printDate=event => console.log(new Date());
button.addEventListener('click',printDate);

 button.removeEventListener('click',behaviour);
*/

let bulb=document.getElementById('bulb');
let turnOnButton=document.querySelector('.turnon');
let turnOffButton=document.querySelector('.turnoff');

//if once class list was add there should be also an removal...
turnOnButton.addEventListener('click', ( ) => {
    bulb.classList.add('glow');
    bulb.classList.remove('notglow')
});
turnOffButton.addEventListener('click', Event => {
    bulb.classList.add('notglow')
    bulb.classList.remove('glow');
});




//through gpt...
// document.addEventListener('DOMContentLoaded', () => {
//     const bulb = document.getElementById('bulbb');
//     const turnOnButton = document.querySelector('.turnon');
//     const turnOffButton = document.querySelector('.turnoff');

//     turnOnButton.addEventListener('click', () => {
//         bulb.classList.add('glow');
//     });

//     turnOffButton.addEventListener('click', () => {
//         bulb.classList.remove('glow');
//     });
// });






// function on(){
//     let light=document.querySelector('.bulb');


//     light.classList.add('glow');
//     // heading.classList.add('even');
//     // heading.classList.remove('odd');
   
//    // light.classList.remove('notglow');
// }



// function off(){
//     let light=document.querySelector('.bulb');
//     light.classList.add('notglow');
//     // heading.classList.add('even');
//     // heading.classList.remove('odd');
   
//    // light.classList.remove('glow');
// }


//activate mode

// let light=document.querySelector('.light');
// let dark=document.querySelector('.dark');
let toggle=document.querySelector('.toggle_mode');
//let containers=document.querySelector('.container');

// dark.addEventListener('click', () =>containers.classList.add('dark'));

// light.addEventListener('click', () => containers.classList.remove('dark'));

toggle.addEventListener('click', () => {
document.body.classList.toggle('light');
document.body.classList.toggle('dark');

});