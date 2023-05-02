var No1 = 0;
var No2 = 1;
console.log(No1);
console.log(No2);
for (var i = 0; i <= 6; i++) {
    var temp = No1 + No2;
    console.log(temp);
    No1 = No2;
    No2 = temp;
}
