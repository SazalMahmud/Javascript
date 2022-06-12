const user ={id: 11, name: 'sazal', job: 'software eng'}
const stringifid = JSON.stringify(user);
//console.log(user);
//console.log(stringifid);

//object create
const enginner ={
    name : 'sazal',
    address : 'naogaon',
    salary : 50000,
    service : ['c-progaming', 'java','javacript'],
    owner :{
        name :'foysal',
        role :'account'
    },
    isExpensive:false

}

const shopStringified = JSON.stringify(enginner);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);