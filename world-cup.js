class WorldCup {
    name ;
    venue = ' Qatar-2022';

    constructor(name){
        this.name = name;
    
    }
    Qatar(){
        console.log(this.name, 'World cup winner ' ,this.venue)
    }
    Qatars(){
        console.log(this.name, 'goua mara khabe', this.venue)
    }
    
}

const fst = new WorldCup('Brazil');
const snd = new WorldCup('Argentina');
fst.Qatar();
snd.Qatars();