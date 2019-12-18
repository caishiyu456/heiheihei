
let ba = {
    c:[
        'haha',
        {d:'world'}
    ]
};
//var f = [a,{b}];
let {c:[a, {d:g}]} = ba;
console.log(a,g);
let {length :len } = 'hello';
console.log(len);
var{length : s} ='world';
console.log(s);