let s=("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9").split(',').map(parseFloat)
console.log(s.reduce(((acc,cur)=>acc+cur),0));

