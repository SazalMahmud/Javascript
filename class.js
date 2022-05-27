class support {
    name ;
    role = 'web developer';
    home ;
    constructor(name,home){
        this.name = name;
        this.home =home;
    
    }
    startSession(){
        console.log(this.name,'get start support',this.role)
    }
}

const fst = new support('tumpa','Naogaon');
const snd = new support('shamim' ,'dhaka');
fst.startSession();
snd.startSession();

//console.log(fst);
//console.log(snd);