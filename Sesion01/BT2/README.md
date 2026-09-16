# Xây dựng Script Quyết toán Hóa đơn Đặt món Tuyến tính
## 1. Mục tiêu

Bài thực hành xây dựng một script JavaScript thực hiện quyết toán hóa đơn đặt món theo trình tự:

1. Chuyển dữ liệu chuỗi sang kiểu số.
2. Tính tiền món ăn.
3. Trừ chiết khấu khai trương.
4. Tính thuế VAT.
5. Tính cước vận chuyển.
6. Tính tổng tiền thanh toán.
7. Xuất hóa đơn chi tiết ra Console.


## 2. Cấu trúc tệp

```text
project/
│
├── index.html
├── orderBilling.js
└── README.md
```

Trong đó:

* `index.html`: Trang HTML và liên kết JavaScript.
* `orderBilling.js`: Chứa toàn bộ logic tính hóa đơn.
* `README.md`: Tài liệu phân tích và kiểm thử.


## 3. Phân tích dữ liệu đầu vào

Các giá trị nhận từ biểu mẫu được lưu dưới dạng chuỗi:

```javascript
const rawMainDishPrice = "120000";
const rawDrinkPrice = "35000";
const rawQuantity = "2";
const rawDistanceKm = "3.5";
```

Các giá trị cố định được khai báo dưới dạng Number:

```javascript
const openingDiscount = 20000;
const vatRate = 0.08;
```

Để tránh thực hiện phép tính với dữ liệu String, chương trình ép kiểu tường minh:

```javascript
const mainDishPrice = Number(rawMainDishPrice);
const drinkPrice = Number(rawDrinkPrice);
const quantity = Number(rawQuantity);
const distanceKm = parseFloat(rawDistanceKm);
```

Sau khi ép kiểu:

```text
"120000" → 120000
"35000"  → 35000
"2"      → 2
"3.5"    → 3.5
```

---

## 4. Phân tích công thức tính toán

### Bước 1: Tính tiền món ăn chưa giảm

Công thức:

```text
foodSubtotal = (mainDishPrice + drinkPrice) * quantity
```

Thay số:

```text
foodSubtotal = (120000 + 35000) * 2
             = 155000 * 2
             = 310000 VND
```

### Bước 2: Tính tiền sau chiết khấu

Công thức:

```text
discountedTotal = foodSubtotal - openingDiscount
```

Thay số:

```text
discountedTotal = 310000 - 20000
                = 290000 VND
```


### Bước 3: Tính VAT

VAT là 8% và được tính trên số tiền sau chiết khấu.

Công thức:

```text
vatAmount = discountedTotal * vatRate
```

Thay số:

```text
vatAmount = 290000 * 0.08
          = 23200 VND
```

---

### Bước 4: Tính cước vận chuyển

Cước cơ bản:

```text
15000 VND
```

Phụ phí theo khoảng cách:

```text
distanceKm * 4000
```

Công thức:

```text
shippingFee = 15000 + distanceKm * 4000
```

Thay số:

```text
shippingFee = 15000 + 3.5 * 4000
            = 15000 + 14000
            = 29000 VND
```

---

### Bước 5: Tính tổng thanh toán

Công thức:

```text
finalPayment = discountedTotal + vatAmount + shippingFee
```

Thay số:

```text
finalPayment = 290000 + 23200 + 29000
             = 342200 VND
```


## 5. Kết quả chính

Với dữ liệu mặc định:

```text
================ HÓA ĐƠN ĐẶT MÓN ================
Khách hàng: Nguyen Van An
Tiền món ăn: 310000 VND
Chiết khấu khai trương: 20000 VND
Tiền sau chiết khấu: 290000 VND
Thuế VAT (8%): 23200 VND
Cước vận chuyển (3.5 km): 29000 VND
-------------------------------------------------
TỔNG THANH TOÁN THỰC TẾ: 342200 VND
=================================================
```

## 6. Test Cases

| Trường hợp kiểm thử     | Dữ liệu đầu vào thay đổi                     | Tiền món ăn | Sau chiết khấu | VAT 8% | Cước vận chuyển | Tổng thanh toán |
| ----------------------- | -------------------------------------------- | ----------: | -------------: | -----: | --------------: | --------------: |
| TC01 - Dữ liệu mặc định | `rawQuantity = "2"`, `rawDistanceKm = "3.5"` |      310000 |         290000 |  23200 |           29000 |          342200 |
| TC02 - Tăng khoảng cách | `rawQuantity = "2"`, `rawDistanceKm = "5.0"` |      310000 |         290000 |  23200 |           35000 |          348200 |
| TC03 - Tăng số lượng    | `rawQuantity = "3"`, `rawDistanceKm = "3.5"` |      465000 |         445000 |  35600 |           29000 |          509600 |


## 7. Phân tích Test Case 02

Dữ liệu:

```javascript
const rawQuantity = "2";
const rawDistanceKm = "5.0";
```

Tính tiền món ăn:

```text
(120000 + 35000) * 2 = 310000
```

Sau chiết khấu:

```text
310000 - 20000 = 290000
```

VAT:

```text
290000 * 0.08 = 23200
```

Cước vận chuyển:

```text
15000 + 5.0 * 4000 = 35000
```

Tổng:

```text
290000 + 23200 + 35000 = 348200 VND
```

Kết quả mong đợi:

```text
TỔNG THANH TOÁN THỰC TẾ: 348200 VND
```

## 8. Phân tích Test Case 03

Dữ liệu:

```javascript
const rawQuantity = "3";
const rawDistanceKm = "3.5";
```

Tính tiền món ăn:

```text
(120000 + 35000) * 3 = 465000
```

Sau chiết khấu:

```text
465000 - 20000 = 445000
```

VAT:

```text
445000 * 0.08 = 35600
```

Cước vận chuyển:

```text
15000 + 3.5 * 4000 = 29000
```

Tổng:

```text
445000 + 35600 + 29000 = 509600 VND
```

Kết quả mong đợi:

```text
TỔNG THANH TOÁN THỰC TẾ: 509600 VND
```

## 9. Kiến thức Session 01 được áp dụng

### Khai báo biến

Sử dụng `const` để khai báo dữ liệu:

```javascript
const customerName = "Nguyen Van An";
```

### Kiểu dữ liệu

Dữ liệu từ biểu mẫu:

```javascript
const rawMainDishPrice = "120000";
```

là kiểu String.

Các giá trị cố định:

```javascript
const openingDiscount = 20000;
const vatRate = 0.08;
```

là kiểu Number.

### Ép kiểu số

Sử dụng:

```javascript
Number()
```

để chuyển chuỗi số nguyên thành Number:

```javascript
const mainDishPrice = Number(rawMainDishPrice);
```

Sử dụng:

```javascript
parseFloat()
```

để chuyển chuỗi có phần thập phân:

```javascript
const distanceKm = parseFloat(rawDistanceKm);
```

### Toán tử số học

Chương trình sử dụng:

```text
+  : cộng
-  : trừ
*  : nhân
```

### Template Literals

Sử dụng dấu backtick và `${}` để đưa biến vào nội dung hóa đơn:

```javascript
console.log(`Tiền món ăn: ${foodSubtotal} VND`);
```

### Strict Mode

Đầu tệp có:

```javascript
"use strict";
```

nhằm bật chế độ nghiêm ngặt cho JavaScript.


## 10. Cách kiểm thử trên trình duyệt

Không sử dụng Terminal.

Thực hiện:

1. Đặt 3 file `index.html`, `orderBilling.js`, `README.md` trong cùng một thư mục.
2. Mở trực tiếp `index.html` bằng Google Chrome hoặc Microsoft Edge.
3. Nhấn `F12`.
4. Chọn tab **Console**.
5. Kiểm tra hóa đơn được in ra.

Kết quả mặc định phải là:

```text
Tổng tiền món ăn: 310000 VND
Chiết khấu khai trương: 20000 VND
Tiền sau chiết khấu: 290000 VND
Thuế VAT (8%): 23200 VND
Cước vận chuyển (3.5 km): 29000 VND
TỔNG THANH TOÁN THỰC TẾ: 342200 VND
```


## 11. Kết luận

Script đã thực hiện đầy đủ quy trình quyết toán hóa đơn theo dạng tuyến tính. Dữ liệu chuỗi được ép kiểu sang Number trước khi tính toán, sau đó thực hiện tuần tự các phép tính tiền món ăn, chiết khấu, VAT, vận chuyển và tổng thanh toán.

Kết quả với dữ liệu ban đầu:

```text
342200 VND
```
