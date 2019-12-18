var a = Math.PI;
console.log(a);
console.log(Math.E);
a= -2;
var c =Math.abs(-5);
console.log(c);
var c = Math.ceil(-0.15);
console.log(c);
c = Math.abs(-15.6);
console.log(c);
c = Math.random();
console.log(2*c);
var b =456.496;
/*
console.log(b%1);*/
/*b = Math.ceil(b);*/
/*if(b%1 >0.5 ||b%1 ==0){
     console.log(3);
}else{
     console.log(5);
}*/
if(Math.round(b) >= 457){
    console.log (456);
}else{
    console.log("hhhh");
}
console.log(Math.round(b));
a = new Date();
console.log(a);
console.log(a.toLocaleString());
console.log(a.toString());
var a  = new Date();
week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var w = week[a.getDay()];
console.log(w);
function cad(i){
    return i= (i < 10 ? '0' + i : i);
}
var d =cad(5);
console.log(d);