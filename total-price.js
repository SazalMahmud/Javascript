const product = [
    {name :'pen' , price:20},
    {name :'book', price:12},
    {name :'pads',price:23},
    {name :'soaps',price:11}
];
   var totalPrice=0;
for(var products of product)
{
    console.log(products);
    totalPrice=products.price+ totalPrice;
 
}
console.log('see your price',totalPrice);