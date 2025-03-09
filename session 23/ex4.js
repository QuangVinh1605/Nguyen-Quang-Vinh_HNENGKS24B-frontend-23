let arr1 = [];
let text = prompt("Mời bạn nhập một dãy các ký tự:");

let arr = text.split('');

let flag = 0;
for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (!isNaN(num) && Number.isInteger(num)) { 
        flag++;
        arr1.push(num);
    }
}
if (flag === 0) {
    alert("Không có số nguyên");
} else {
    alert(`Các số nguyên trong chuỗi: ${arr1.join(', ')}`);
}
