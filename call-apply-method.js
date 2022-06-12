const office ={
    name:'sazal',
    id : 152,
    salary:50000,
    // method
    houseExpense: function(expense,currentBill, others){
        this.salary=this.salary-expense-currentBill-others;
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

office.houseExpense.call(office2,4200,1000,20);

office.houseExpense.apply(office3,[3000,490,200]);

