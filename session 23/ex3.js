let number = +prompt("moi ban nhap vao so phan tu trong mang");
let arr = [];
for (let i = 0; i < number; i++){
    let num = +prompt(`moi ban nhap vao so thu ${i + 1}`);
    arr.push(num);
}
let flag = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0) {
        flag++;
    }
}
if (flag === 0) {
    alert("trong mang khong ton tai so nguyen am");
} else {
    alert(`trong mang co ${flag} so nguyen am`);
}