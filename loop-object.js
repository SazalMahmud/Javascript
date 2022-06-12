const office = {post: 'IT officer', location:'poran dhaka',salary: 50000};

//exmple-1
for(const offices in office){
    //console.log(office[offices]);
}


// exmple-2
const loop = Object.keys(office);
//console.log(loop);
for(const loop2 of loop){
  console.log(loop2,office[loop2]);
}

// exmple-3
for(const[key,value] of Object.entries(office)){
    console.log(key,value);
}