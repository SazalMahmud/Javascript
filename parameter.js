function NeedMoney(Money){
   console.log("Baba Taka diasa" ,Money);
   var tShartPrice=100;
   var quantity = Money / tShartPrice;
   return quantity;
}
var Taka=1500;
var TotalTshart=NeedMoney(Taka);
console.log('Tolal T-shart pabo',TotalTshart);