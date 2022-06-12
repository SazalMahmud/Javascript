const teacher ={name :'sazal', subject: 'cse'};

// constructor
const person = new Object();
//console.log(person);

const men = Object.create(teacher);
//console.log(men.subject);

//class
class worker{
    constructor(id,age){
        this.id =id;
        this.age=age;
    }
}

const result = new worker('s-123',28);
//console.log(result);

//function
function emplyer(location){
    this.location=location;
}
const res =new emplyer('naogaon')
console.log(res);
