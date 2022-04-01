const phones =[
    {name: 'sumsang',prise : 3888, camera:10, Storage:32},
    {name: "iPhone", prise: 34567, camera: 12, Storage: 21},
    {name: 'shaume',prise : 3434, camera:1, Storage:36},
    {name: "nokia", prise: 39000, camera: 22, Storage: 34},
    {name: 'itel',prise : 684, camera:10, Storage:64},
    {name: "kinstel", prise: 2000, camera: 7, Storage: 7}
];

let cheapest = phones[0];
for(var cheklist of phones){
    if(cheklist.camera<cheapest.camera){
        cheapest=cheklist;
    }
}
 console.log(cheapest);