const list =[
    {name:'iphn' , price:100000, color:'black'},
    {name:'nokia', price: 1002, color:'green'},
    {name:'sumsang', price: 20033, color:'white'},
    {name:'aktel', price: 100, color:'green'}
];

// only scarch 1st green.
const greens = list.find(proList => proList.color == 'green');
console.log(greens);