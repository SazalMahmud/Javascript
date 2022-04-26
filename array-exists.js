function megaFriend(friends){
    if(Array.isArray(friends)==false){
        return 'plz provide array'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['sazal','ruhulb','kud','fox','lion'];
//plz provide array (example)
//const list = megaFriend(234);
const list = megaFriend(friends);
console.log(list);

// imdexof
if(friends.indexOf('fox') !=-1){
    console.log('exists');
}
else{
    console.log('dose not exists');
}
//includes(alter native use of indexof)
if(friends.includes('lion')){
    console.log('lion exits')
}
//concate
const first =[1,2,3];
const second = [4,5,6];
const combined = first.concat(second);
console.log(combined);
