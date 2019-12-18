function shuLie(a){
    if(a ==1 || a==2){
        return 1;
    }
    var b = shuLie(a-1) +shuLie(a-2);
   return b;
}

var c =shuLie(6);
console.log(c);
