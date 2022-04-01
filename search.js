const products = [
    {name:'rice', price:70},
    {name:'cocacola', price:50},
    {name:'mango',price:30},
    {name:'orange',price:46}
];
function searchproducts(products,searchText){
     const list = [];
    for( var product of products ){
        const search = product.name;
        if(search.indexOf(searchText) !=-1){  // 'o' name gula ak ak kora push korbe list er vethor.
          list.push(search);
        }
    }
    return list;
}
var list = searchproducts(products,'o');
console.log(list)