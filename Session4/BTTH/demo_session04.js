// demo_session04.js

const priceS = 30000;
const priceM = 36000;
const priceL = 40000;
const toppingPrice = 8000;

const orderSizes = "MSLXTMM";
const isGoldMember = true;

let totalAmount = 0;
let validItemCount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
    const currentItem = orderSizes[orderIndex];

    // Món hủy thì bỏ qua
    if (currentItem === "X") {
        continue;
    }

    // Đã đủ 4 món hợp lệ thì dừng
    if (validItemCount === 4) {
        break;
    }

    if (currentItem === "S") {
        totalAmount += priceS;
    } else if (currentItem === "M") {
        totalAmount += priceM;
    } else if (currentItem === "L") {
        totalAmount += priceL;
    } else if (currentItem === "T") {
        totalAmount += toppingPrice;
    }

    validItemCount++;
}

const discountAmount = isGoldMember ? totalAmount * 0.1 : 0;
const finalAmount = totalAmount - discountAmount;

console.log("===== HÓA ĐƠN HIGHLANDS COFFEE =====");
console.log("Chuỗi gọi món:", orderSizes);
console.log("Số món hợp lệ:", validItemCount);
console.log("Tổng tiền trước giảm:", totalAmount, "VNĐ");
console.log("Tiền giảm 10%:", discountAmount, "VNĐ");
console.log("Tổng tiền phải trả:", finalAmount, "VNĐ");