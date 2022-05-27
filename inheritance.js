class office{
    name ;
    role = 'web developer';
    home  = 'naogaon';
    constructor(name,home){
        this.name = name;
        this.home =home;
    
    }

}


class support  extends office{
    groupSupport;
    constructor( name, home, time){
        super(name,home)
        this.groupSupport = time;
    }
    startSession(){
        console.log(this.name,'get start support',this.role)
    }
}
 class account{
     name;
     role = 'accounting';
     home = 'dhaka';
     constructor(name,home){
         this.name =name;
         this.home =home;
     }
     management(accounting){
         console.log(this.name, 'get start accounting service',accounting);
     }

 }
 class operator extends office{
     invoice;
     constructor(name,home, distribustion){
         super(name,home)
         this.invoice = distribustion;
     }
    stap(computer){
        console.log(this.name, 'get start accounting service',computer);
    }

}

const fst = new support('tumpa','Naogaon', 7);
console.log(fst);
const snd = new account('shamim' ,'dhaka', 8);

const thard = new operator('monir' , 'naogaon' ,9);
console.log(thard);