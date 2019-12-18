//阶乘
function jieCheng(a){
    if(a ==1){
        return 1;
    }var b = a* jieCheng(a-1);
    return b;
}var c = jieCheng(5);
console.log(c);