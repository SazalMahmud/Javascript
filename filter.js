const number = [4,6,3,1,7];
const findBig = number.filter(number2 => number2>5);
const findSmall = number.filter(number2 => number2<5);

//console.log(findBig,findSmall);

const list =[
    {name:'iphn' , price:100000, color:'black'},
    {name:'nokia', price: 1002, color:'green'},
    {name:'sumsang', price: 20033, color:'white'},
    {name:'aktel', price: 100, color:'green'}
];


const total = list.filter(proList => proList.price >5000);
//console.log(total);

// scarch all green
const greens = list.filter(proList => proList.color == 'green');
console.log(greens);