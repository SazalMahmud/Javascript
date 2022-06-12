const office = {post: 'IT officer', location:'poran dhaka',salary: 50000};
// show properties name
const result = Object.keys(office);
//console.log(result);

// show properties value
const result2 =Object.values(office);
//console.log(result2);

//show all properti name and value
const result3=Object.entries(office);
//console.log(result3);



 // no delete(kono kiso delet hobe na)
Object.seal(office);
// no add or delete(kono kiso delete oo hobe an add o na)
Object.freeze(office);

// delete value
delete office.salary;

//office.salary =20000;
console.log(office);
