const emplyer ={
    location:'golden supper market office',
    id: 456,
    role :['IT officer','ccna','windows server'],
    salary:50000,
    manager: {
        name :'sonarul',
        age: 45
    },
    office:function(){
        console.log('Sazal',this.location);
    },
    salaryexpense:function(expense,extra){
        this.salary =this.salary -expense-extra;
        return this.salary;
    }
}
emplyer.office();
const houseExpense =emplyer.salaryexpense(12000,500);
const familyExpense =emplyer.salaryexpense(1200,100);
console.log(familyExpense);