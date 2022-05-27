const univarsity = {id:152 , name: 'sazal', price:2000, phone: 01722};

//console.log(univarsity.name);
const factory ={name :'nabiad',
ceo:{id:1, name:'IT', food:'cocacola'},
developer:{work: 'program', emplyId : 22, framework:'javascript', manegment: {time:'4pm', salary:'300k'}}
};

const output = factory.ceo.food;
//console.log(output);
const{work, emplyId} =factory.developer;
const{time,salary}  = factory.developer.manegment;
//console.log(work,emplyId,time,salary);
console.log(factory.developer.manegment.time);
console.log(factory.developer.maneg?.time);