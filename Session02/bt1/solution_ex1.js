/*
# Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---:|---:|
| TC01 - Chuyến xe 4 km, mưa lớn | distanceInKm = 4, isHeavyRain = true | 36.000 VNĐ | 25.200 VNĐ |
| TC02 - Chuyến xe 2 km, mưa lớn | distanceInKm = 2, isHeavyRain = true | 14.400 VNĐ | 14.400 VNĐ |

# Phân tích lỗi
Lỗi nằm ở công thức cũ:
totalFare = baseFare + distanceInKm * extraFarePerKm;
Công thức này tính extraFarePerKm trên toàn bộ quãng đường.
Trong khi 2 km đầu tiên đã được tính trong baseFare.

Công thức đúng:
totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
Chỉ phần quãng đường vượt quá 2 km mới được tính thêm cước.
Với 4 km:
12.000 + (4 - 2) * 4.500 = 21.000 VNĐ
Mưa lớn:
21.000 * 1.2 = 25.200 VNĐ
*/
const bookingId = "GRB-84920";
const customerName = "Trần Thị Mai";
const distanceInKm = 4;
const isHeavyRain = true;

const baseFare = 12000;
const extraFarePerKm = 4500;
let totalFare = 0;

if (distanceInKm <= 0) {
  totalFare = 0;
} else if (distanceInKm <= 2) {
  totalFare = baseFare;
} else {
  totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
}

if (isHeavyRain && totalFare > 0) {
  totalFare = totalFare * 1.2;
}

console.log("Mã chuyến đi:", bookingId);
console.log("Khách hàng:", customerName);
console.log("Quãng đường:", distanceInKm, "km");
console.log("Tổng cước chuyến đi:", totalFare, "VNĐ");

