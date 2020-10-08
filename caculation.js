function caculation() {
    // get data
    let phy = document.getElementById("physical").value;
    let bio = document.getElementById("biology").value;
    let che = document.getElementById("chemistry").value;
    let check = true;
    // kiểm tra null
    while (check) {
        if (phy == "" || bio == "" || che == "") {
            alert("Please input value for point of subject not null");
            return;
        } else if (isNaN(phy) || isNaN(bio) || isNaN(che)) {
            alert("Please input number for point of subject");

        } else if (Number(phy) > 10 || Number(phy) < 0 || Number(bio) > 10 || Number(bio) < 0 || Number(che) > 10 || Number(che) < 0) {
            alert("Please input point of subject <=10");
        }else {
            break;
        }
        alert("Please input point of subject <=10");
        phy = prompt("physical");
        bio = prompt("biology");
        che = prompt("chemistry");
    }
    // check giá trị số hay ký tự


    // tính toán
    let sum = Number(phy) + Number(che) + Number(bio);
    // if(Number(phy)>10){
    //     alert(true);
    // }else {
    //     alert(false);
    // }
    let avg = sum / 3;
    // avg =Math.round(avg* 100) / 100;
    let avg1 = avg.toFixed(2);                 // lấy sau số phẩy 2 số
    // let phy = +prompt("physical");
    // let bio = +prompt("biology");
    // let che = +prompt("chemistry");
    document.getElementById("physical").value = phy;
    document.getElementById("biology").value = bio;
    document.getElementById("chemistry").value = che;
    document.getElementById("averaged").value = avg1;
    document.getElementById("sum").value = sum;

}