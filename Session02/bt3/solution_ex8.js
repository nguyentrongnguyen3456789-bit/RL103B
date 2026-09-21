/*
BÀI 3 - PHÂN LOẠI & ĐIỀU PHỐI CUỐC XE GRABFOOD

QUY TẮC:
- 2 km đầu: 12.000 VNĐ
- Mỗi km sau: 4.500 VNĐ/km
- Giờ cao điểm: tăng 20%
- PLATINUM: giảm 15%, tối đa 30.000 VNĐ
- GOLD: giảm 10%, tối đa 20.000 VNĐ
- SILVER: giảm 5%, tối đa 10.000 VNĐ
- STANDARD hoặc hạng khác: không giảm
- Cước thanh toán tối thiểu: 12.000 VNĐ

CÔNG THỨC:
Nếu distanceKm <= 2:
    baseFare = 12.000

Nếu distanceKm > 2:
    baseFare = 12.000 + (distanceKm - 2) * 4.500

Nếu isPeakHour = true:
    fareAfterPeak = baseFare * 1.2

Sau đó tính giảm giá theo memberTier.

Nếu discount vượt maxDiscount:
    discount = maxDiscount

Cước cuối:
    finalFare = fareAfterPeak - discount

Nếu finalFare < 12.000:
    finalFare = 12.000
*/

// ==============================
// BỘ DỮ LIỆU 1 - PLATINUM
// ==============================

const distanceKm = 10;
const isPeakHour = true;
const memberTier = "PLATINUM";

const firstTwoKmFare = 12000;
const pricePerAdditionalKm = 4500;
const peakMultiplier = 1.2;

let baseFare = 0;
let fareAfterPeak = 0;
let discountRate = 0;
let maxDiscount = 0;
let discount = 0;
let finalFare = 0;

// Tính cước di chuyển cơ sở
if (distanceKm <= 2) {
  baseFare = firstTwoKmFare;
} else {
  baseFare = firstTwoKmFare + (distanceKm - 2) * pricePerAdditionalKm;
}

// Tính phụ phí giờ cao điểm
if (isPeakHour) {
  fareAfterPeak = baseFare * peakMultiplier;
} else {
  fareAfterPeak = baseFare;
}

// Phân loại hội viên bằng switch-case
switch (memberTier) {
  case "PLATINUM":
    discountRate = 0.15;
    maxDiscount = 30000;
    break;

  case "GOLD":
    discountRate = 0.10;
    maxDiscount = 20000;
    break;

  case "SILVER":
    discountRate = 0.05;
    maxDiscount = 10000;
    break;

  case "STANDARD":
  default:
    discountRate = 0;
    maxDiscount = 0;
    break;
}

// Tính mức giảm giá
discount = fareAfterPeak * discountRate;

// Chặn mức giảm tối đa bằng toán tử ba ngôi
discount = discount > maxDiscount ? maxDiscount : discount;

// Tính cước thanh toán
finalFare = fareAfterPeak - discount;

// Đảm bảo cước thanh toán tối thiểu 12.000 VNĐ
finalFare = finalFare < 12000 ? 12000 : finalFare;


// In hóa đơn
console.log("========== HÓA ĐƠN GRABFOOD ==========");
console.log("Hạng hội viên:", memberTier);
console.log("Khoảng cách:", distanceKm, "km");
console.log("Cước ban đầu:", baseFare, "VNĐ");
console.log("Cước sau phụ phí:", fareAfterPeak, "VNĐ");
console.log("Mức giảm giá hội viên:", discount, "VNĐ");
console.log("Cước thanh toán cuối cùng:", finalFare, "VNĐ");

