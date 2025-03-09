let arr = [2, 4, 6, 1, 8, 9];

if (arr.length < 2) {
    console.log("Mảng không có đủ phần tử để tìm số lớn thứ hai");
} else {
    let max1 = arr[0];
    let max2 = arr[1];

    if (max1 < max2) {
        let temp = max1;
        max1 = max2;
        max2 = temp;
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] !== max1) {
            max2 = arr[i];
        }
    }

    if (max1 === max2) {
        console.log("Không có số lớn thứ hai");
    } else {
        console.log("Số lớn thứ hai là:", max2);
    }
}
