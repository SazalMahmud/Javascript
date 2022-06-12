function message (name,handler){
    console.log(handler);
    handler(name);
}
//const names = ['sazal','soysal','ruhul'];
//const object ={name: 'sazal', age:28};
function viaMessage(n1){
    console.log('my Wife',n1);
}
function viaMessage2(n2){
    console.log('my brother',n2);
}
function viaMessage3(n3){
    console.log(' my friend',n3);
}
message('tumpa',viaMessage);
message('monir',viaMessage2);
message('revens',viaMessage3);
