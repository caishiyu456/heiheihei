//使用ｆｏｒ循环打印菱形　，外层ｆｏｒ循环打印行数　，内层ｆｏｒ循环打印里面的空格与星星
//var a , b , c='' , d ,e;
var a,b;
var c='';
var d;
var  e='';
var f , g , h;
for(a =1 ;a<=5;a++){
    //内层循环打印空格
    for(b=4;b>=a ;b--){
        c +=  '&nbsp;&nbsp;&nbsp;'  ;
    }
    /* for(d =(2*a+1); d){}*/
    //循环打印星星
    for(d=1;d<=(2*a-1);d++){
        c += '&nbsp';
        c += '*';
    }c = c+ '<br>';
}
//for循环控制向下打印的星星
for(f=4;f>0;f--){
    //使用循环控制空格
    /* for(b=4;b>=a ;b--){
        c +=  '&nbsp;&nbsp;'  ;
    }*/
    for (g = 1;g<=(5-f);g++) {
        c += '&nbsp;&nbsp;&nbsp;';
    }
    //for 循环控制倒过来的星星
    for (h=2*f-1;h>0;h--){
        c += '&nbsp';
        c += '*';
        /*if(f==1){
            c+='*';
        }*/
    }c += '<br>';
}
console.log(c);