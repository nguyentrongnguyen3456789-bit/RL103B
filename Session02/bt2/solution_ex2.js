/*
BÀI 2 - KHẮC PHỤC LỖI TÍNH CƯỚC GRABREWARDS

ROOT CAUSE:

Khi distanceKm > 2, chương trình cũ sử dụng toàn bộ
distanceKm để tính phần cước phụ trội:

totalFare = baseFare + distanceKm * pricePerAdditionalKm;

Điều này làm 2 km đầu tiên bị tính lặp lại vì 2 km đầu
đã được tính trong baseFare.

Cước phụ trội chỉ được tính cho phần quãng đường
vượt quá 2 km.

Công thức đúng:

totalFare = baseFare + (distanceKm - 2) * pricePerAdditionalKm;


TEST CASES:

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---:|---:|
| TC01 - Khoảng cách đúng 2 km | distanceKm = 2, isRaining = false | 12.000 VNĐ | 12.000 VNĐ |
| TC02 - Khoảng cách 4 km | distanceKm = 4, isRaining = false | 30.000 VNĐ | 21.000 VNĐ |

TC01:

distanceKm = 2

totalFare = 12.000 VNĐ


TC02:

2 km đầu = 12.000 VNĐ
2 km vượt = (4 - 2) * 4.500 = 9.000 VNĐ

Tổng = 12.000 + 9.000 = 21.000 VNĐ

isRaining = false nên không áp dụng weatherMultiplier.
*/

const distanceKm = 4;
const isRaining = false;

const baseFare = 12000;
const pricePerAdditionalKm = 4500;
const weatherMultiplier = 1.2;

let totalFare = 0;

if (distanceKm <= 2) {
  totalFare = baseFare;
} else {
  totalFare = baseFare + (distanceKm - 2) * pricePerAdditionalKm;
}

if (isRaining) {
  totalFare = totalFare * weatherMultiplier;
}

console.log('Khoảng cách di chuyển:', distanceKm, 'km');
console.log('Tổng cước phí chuyến đi:', totalFare, 'VNĐ');

