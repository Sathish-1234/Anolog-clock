const hours=document.querySelector('.hr');
const mi=document.querySelector('.min');
const se=document.querySelector('.sec');

function runClock(){
const time=new Date();
const sec=time.getSeconds()/60;
const min=(sec+time.getMinutes())/60;
const hr=(min+time.getHours())/12;

hours.style.setProperty('--rotation',hr*360);
mi.style.setProperty('--rotation',min*360);
se.style.setProperty('--rotation',sec*360);




setInterval(runClock,1000);

}

runClock();