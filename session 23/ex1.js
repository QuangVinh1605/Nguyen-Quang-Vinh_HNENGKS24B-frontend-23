let arr = [];
let arr1 = [];
for (let i = 0; i < 10; i++){
    let num = +prompt(`moi ban nhap vao so nguyen thu ${i + 1}`);
    arr.push(num);
}
flag = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 10) {
        flag++;
        arr1.push(arr[i]);
    }
}
if (flag === 0) {
    alert(`khogn co so nao lon hon 10`);
} else {
    alert(arr1);
}