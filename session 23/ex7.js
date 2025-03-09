let n = +prompt("Nhap so luong phan phan tu cua mang");

if (n <= 0) {
    console.log("so luong phan tu trong mang phair lon hon 0");
} else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`nhap phan tu thu ${i + 1}:`);
    }

    if (n < 2) {
        console.log("mang co it hon 2 phan tu");
    } else {
        let max1 = arr[0];
        let max2 = arr[1];

        if (max1 < max2) {
            let temp = max1;
            max1 = max2;
            max2 = temp;
        }

        for (let i = 2; i < n; i++) {
            if (arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            } else if (arr[i] > max2 && arr[i] !== max1) {
                max2 = arr[i];
            }
        }

        if (max1 === max2) {
            console.log("khong co so lon thu hai");
        } else {
            console.log("so lon nthu hai la:", max2);
        }
    }
}
