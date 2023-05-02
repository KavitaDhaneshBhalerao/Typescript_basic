function fibonacci() {

    var No1: number = 0;
    var No2: number = 1;
    console.log(No1, No2);
    console.log(No2);
    
    for (var i = 0; i <= 6; i++) {
        var temp = No1 + No2;
        No1 = No2;
        No2 = temp;
        console.log(temp);
    }
}
fibonacci();