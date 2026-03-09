function generateData(){

let Temperaure=(36+Math.random*3).toFixed(1);
let Heartrate=Math.floor(70+Math.random*50);

document.getElementById("Temp1").innerHTML=Temperaure;
document.getElementById("HeartR1").innerHTML=Heartrate;

if(Temperaure>39||Heartrate>120){
    document.getElementById("Status1").innerHTML=Alert;

}else{
    document.getElementById("Status1").innerHTML=Normal;
}
}