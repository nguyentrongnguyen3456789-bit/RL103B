// He thong POS quay thu ngan Highlands Coffee

// LOI LOGIC 1:
// Dieu kien vong lap dung "cupIndex < orderQuantity" lam mat 1 lan lap.
// Khi orderQuantity = 3, vong lap chi chay voi cupIndex = 1 va 2,
// nen chi tinh tien 2 ly thay vi 3 ly.
// CACH SUA: Dung cupIndex <= orderQuantity.

// LOI LOGIC 2:
// Giam gia Gold Member dang dat ben trong vong lap.
// Moi lan lap, totalBill lai bi nhan 0.9, dan den giam gia lap lai nhieu lan.
// CACH SUA: Tinh tong tien day du truoc, sau do moi ap dung giam gia 10% mot lan.

const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;

if (drinkSize === "M") {
    sizeUpcharge = 6000;
} else if (drinkSize === "L") {
    sizeUpcharge = 10000;
}

// Tinh tien 1 ly hoan chinh
const singleCupPrice =
    basePrice +
    sizeUpcharge +
    (toppingsPerCup * toppingPrice);

let totalBill = 0;

// Sua loi Off-by-one: dung <= de tinh du orderQuantity ly
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
    totalBill += singleCupPrice;
}

// Chi giam gia Gold Member mot lan sau khi tinh du tong tien
if (isGoldMember) {
    totalBill = totalBill * 0.9;
}

console.log("Tên đồ uống:", drinkName);
console.log("Số lượng:", orderQuantity);
console.log("Giá 1 ly:", singleCupPrice, "VNĐ");
console.log("Tổng thanh toán:", totalBill, "VNĐ");