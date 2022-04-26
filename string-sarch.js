const products =[
    'amr akTA phone asHa',
    'revens printer kinsa',
    'foysal tricat kinsa',
    'phone kinA hobe na',
    'printer valo na',
    'printer good'
];
const searching = 'p';
const output=[];
// all of vlaue chek --upder case to uper case searching--
//for(const product of products){
    //if(product.toUpperCase().indexOf(searching.toUpperCase()) != -1){
     //   output.push(product);
   // }
//}

// includes 
//for(const product of products){
    //if(product.toUpperCase().includes(searching.toUpperCase())){
       // output.push(product);
   // }
//}
//console.log(output);
//
for(const product of products){
    if(product.toUpperCase().startsWith(searching.toUpperCase())){
        output.push(product);
    }
}
console.log(output);
