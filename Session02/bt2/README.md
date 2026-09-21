
## 1. Phân tích lỗi

### Dòng code bị sai logic

Đoạn code hiện tại:

if (distanceKm <= 2) {
  totalFare = baseFare;
} else {
  totalFare = baseFare + distanceKm * pricePerAdditionalKm;
}


Dòng bị sai logic là:


totalFare = baseFare + distanceKm * pricePerAdditionalKm;

### Nguyên nhân kỹ thuật

Khi `distanceKm > 2`, chương trình đã cộng `baseFare` cho 2 km đầu tiên nhưng lại tiếp tục lấy toàn bộ `distanceKm` để tính cước phụ trội.

Điều này làm cho 2 km cơ sở bị tính tiền lặp lại.

Cước phụ trội chỉ được tính cho số km vượt quá 2 km.

Công thức sai:

baseFare + distanceKm * pricePerAdditionalKm


Công thức đúng:
baseFare + (distanceKm - 2) * pricePerAdditionalKm


## 2. Root Cause

**Root Cause:** Lập trình viên sử dụng toàn bộ `distanceKm` để tính phần cước phụ trội thay vì chỉ tính phần quãng đường vượt quá 2 km.

Do đó, 2 km đầu tiên vừa được tính trong `baseFare`, vừa tiếp tục được tính bằng `pricePerAdditionalKm`.

## 3. Test Cases

| Trường hợp kiểm thử               | Dữ liệu đầu vào                       | Kết quả sai thực tế | Kết quả đúng mong đợi |
| --------------------------------- | ------------------------------------- | ------------------: | --------------------: |
| TC01 - Khoảng cách đúng bằng 2 km | `distanceKm = 2`, `isRaining = false` |          12.000 VNĐ |            12.000 VNĐ |
| TC02 - Khoảng cách lớn hơn 2 km   | `distanceKm = 4`, `isRaining = false` |          30.000 VNĐ |            21.000 VNĐ |

## 4. Phân tích kết quả

### TC01 - 2 km

Vì quãng đường không vượt quá 2 km:

totalFare = baseFare
          = 12.000 VNĐ

Kết quả đúng:

12.000 VNĐ


### TC02 - 4 km
2 km đầu tiên:
12.000 VNĐ

2 km vượt quá:
(4 - 2) × 4.500 = 9.000 VNĐ
Tổng:

12.000 + 9.000 = 21.000 VNĐ
Vì `isRaining = false` nên không áp dụng hệ số thời tiết.
Kết quả đúng:
21.000 VNĐ

## 5. Kết luận

Cần sửa công thức tính cước khi `distanceKm > 2` thành:

totalFare = baseFare + (distanceKm - 2) * pricePerAdditionalKm;

Cách sửa này đảm bảo 2 km đầu chỉ được tính một lần và phần cước phụ trội chỉ áp dụng cho số km vượt quá 2 km.
