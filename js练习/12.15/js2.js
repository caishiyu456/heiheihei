//数组去重
var a=[2,1,4,5,2,3,1,5,6,1,];
/*for (var i=0;i<a.length;i++){
    for(var b=0;b<a.length;b++){

    }
}*/
function arr(a){
var newArr =[];
a.forEach(function(value){
    if(newArr.indexOf(value) == -1){
        newArr.push(value);
    }
})
    return newArr;
}
var ac  = arr(a);
console.log(ac);