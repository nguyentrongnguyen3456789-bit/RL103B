# Dò vết Thứ tự Ưu tiên Toán tử trong Tính Cước Combo

## 1. Mục tiêu

Bài thực hành nhằm:

- Đọc và dò vết mã nguồn JavaScript.
- Phân tích lỗi do thứ tự ưu tiên toán tử.
- Nhận biết lỗi nối chuỗi khi sử dụng toán tử `+`.
- Sử dụng `Number()` để ép kiểu dữ liệu tường minh.
- Kiểm thử và đối chiếu kết quả sai với kết quả đúng.
- Xuất kết quả bằng Template Literals.

---

## 2. Dữ liệu đầu vào

```javascript
const rawItemPrice = "45000";
const rawItemQuantity = "2";
const rawBaseDeliveryFee = "16000";
const rawDeliveryDistance = "3.2";
const comboDiscountPercent = 10;