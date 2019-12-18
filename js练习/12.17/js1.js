/*
nums = [2, 7, 11, 15], target = 9*/
var a =[2,7,11,15];
var target  = 9;
function aab(){
    for (var b = 0  ; b < a.length; b++) {
        for (var c = 1; c < a.length; c++) {
            if ((a[b] + a[c]) == target) {
                console.log(b, c);
            }
        }
    }
}