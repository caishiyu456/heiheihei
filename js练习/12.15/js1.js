var a=[2,1,4,5,2,3,1,5,6,1];
function maopao(arr) {
    for (var i = 0; i < a.length; i++) {
        for (var c = 0; c < a.length - i; c++) {
            if (a[c] > a[c + 1]) {
                var b = a[c];
                a[c] = a[c + 1];
                a[c + 1] = b;
            }
    }
    }
}
maopao(a);
console.log(a)
//console.log('d');