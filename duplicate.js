var names = ['aa','bb','cc','dd','ee','aa','cc','ff','dd'];

function removeDuplicate(names){
    const unique =[];
   // for(let i=0; i<names.length; i++){
      //  var element = names[i];
       // console.log(element);



       // for lood alternative use
       for(var element of names){
           console.log(element);
       if(unique.indexOf(element) ==-1){
           unique.push(element);

       }
    }
    return unique;
}

var uniqueName = removeDuplicate(names);
console.log(uniqueName);