const office ={
    name:'sazal',
    id : 152,
    salary:50000,
    // method
    houseExpense: function(expense){
        this.salary=this.salary-expense;
        console.log(this);
        return this.salary;
    }
}

const office2 ={
    name:'ruhul',
    id : 153,
    salary:60000,
}
const office3 ={
    name:'foysal',
    id : 154,
    salary:20000,
}
// bind use kora onno object er method use kora jai
const result = office.houseExpense.bind(office2);
 result(4000);
 const result2 = office.houseExpense.bind(office3);
 result2(5000);

