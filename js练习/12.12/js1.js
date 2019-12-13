//var num  = prompt('请输入要计算阶乘的数');
function  sum(a ){
    if(a == 1){
        return 1;
    }
    var b =a * sum(a -1);
    /*function a (){

    }*/
    return b;
}
var c =sum(5);
console.log(c);