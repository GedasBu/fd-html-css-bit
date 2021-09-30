
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const cicrle = document.querySelector('circle'); 
const perimeter = cicrle.getAttribute('r')*2*Math.PI;
cicrle.setAttribute('stroke-dasharray',perimeter);
let duration;

const timer = new Timer(durationInput, startButton, pauseButton,{
onStart(totalDuration){
    duration = totalDuration;
},

onThick(timeRemaining){
cicrle.setAttribute('stroke-dashoffset',perimeter*timeRemaining/duration-perimeter)
},

onComplete(){console.log('Timer is completed')}
});

