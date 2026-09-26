const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
    const currentDrinkSize = orderSizes[orderIndex];

    // Khi gặp X, bỏ qua ly bị hủy và tiếp tục kiểm tra các phần tử phía sau.
    if (currentDrinkSize === "X") {
        continue;
    }

    if (currentDrinkSize === "S") {
        totalDrinkAmount += basePriceSizeS;
    } else if (currentDrinkSize === "M") {
        totalDrinkAmount += basePriceSizeS + extraPriceSizeM;
    } else if (currentDrinkSize === "L") {
        totalDrinkAmount += basePriceSizeS + extraPriceSizeL;
    }
}

const finalBillAmount =
    (totalDrinkAmount + toppingCount * toppingPrice) *
    (isGoldMember ? 0.9 : 1.0);

console.log(
    "Tổng tiền hóa đơn:",
    finalBillAmount,
    "VNĐ"
);

/*
==================================================
BẢNG ĐỐI SOÁT KẾT QUẢ

Test Case 1:
Dữ liệu:
orderSizes = "MLXSM"
toppingCount = 2
isGoldMember = true

Kết quả sai thực tế với break:
- M = 41.000 VNĐ
- L = 45.000 VNĐ
- Gặp X thì break
- Bỏ sót S và M phía sau
- Tổng tiền đồ uống = 86.000 VNĐ
- Tiền topping = 16.000 VNĐ
- Sau giảm Gold 10%:
  (86.000 + 16.000) × 0.9
  = 91.800 VNĐ

Kết quả đúng với continue:
- M = 41.000 VNĐ
- L = 45.000 VNĐ
- X = bỏ qua
- S = 35.000 VNĐ
- M = 41.000 VNĐ
- Tổng tiền đồ uống = 162.000 VNĐ
- Tiền topping = 16.000 VNĐ
- Sau giảm Gold 10%:
  (162.000 + 16.000) × 0.9
  = 160.200 VNĐ


Test Case 2:
Dữ liệu:
orderSizes = "SXLM"
toppingCount = 2
isGoldMember = false

Kết quả sai thực tế với break:
- S = 35.000 VNĐ
- Gặp X thì break
- Bỏ sót L và M phía sau
- Tổng tiền đồ uống = 35.000 VNĐ
- Tiền topping = 16.000 VNĐ
- Không giảm giá:
  35.000 + 16.000
  = 51.000 VNĐ

Kết quả đúng với continue:
- S = 35.000 VNĐ
- X = bỏ qua
- L = 45.000 VNĐ
- M = 41.000 VNĐ
- Tổng tiền đồ uống = 121.000 VNĐ
- Tiền topping = 16.000 VNĐ
- Không giảm giá:
  121.000 + 16.000
  = 137.000 VNĐ
==================================================
*/