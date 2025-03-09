let arr1 = [];
let arr = [];
let number = +prompt("moi ban nhap vao so ky tu trong mang");
if (number === 0) {
    alert("mang khong co phan tu");
} else if(number<0){
    alert("so luong phan tu khong duoc am");
} else {
    for (let i = 0; i < number; i++) {
        let text = prompt(`Mời bạn nhập ký tự thứ ${i + 1} `);
        arr.push(text);
    }
    
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (!isNaN(num)) {
            flag++;
            arr1.push(num);
        }
    }
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        result += arr1[i];
    }
    if (flag === 0) {
        alert("Không có số nguyên");
    }
    else {
        alert(`tong cac so trong chuoi la: ${result} `);
    }
}
