# Dò vết & Sửa lỗi Nối chuỗi trong Tính Tiền Hóa đơn
## 1. Mục tiêu
Bài thực hành nhằm:

* Đọc hiểu mã nguồn JavaScript.
* Thực hiện dò vết luồng dữ liệu.
* Phát hiện lỗi do phép cộng chuỗi.
* Hiểu cơ chế hoạt động của toán tử `+` khi dữ liệu là chuỗi.
* Sử dụng `Number()` để ép kiểu chuỗi số thành kiểu Number.
* Kiểm thử kết quả trước và sau khi sửa lỗi.

## 2. Phân tích nguyên nhân lỗi

Các giá trị:

```javascript
const rawFoodPrice = "55000";
const rawToppingPrice = "15000";
const rawDeliveryFee = "20000";
```

đều được khai báo dưới dạng **String** vì chúng được đặt trong dấu ngoặc kép.

Trong JavaScript, toán tử `+` có thể thực hiện phép cộng số học hoặc nối chuỗi.

### Bước 1: Tính `foodTotal`

Mã nguồn ban đầu:

```javascript
const foodTotal = rawFoodPrice + rawToppingPrice;
```

Hai biến `rawFoodPrice` và `rawToppingPrice` đều là chuỗi:

```text
"55000" + "15000"
```

Do đó JavaScript thực hiện **nối chuỗi**:

```text
"5500015000"
```

Thay vì phép cộng số học:

```text
55000 + 15000 = 70000
```

Vì vậy:

```text
foodTotal = "5500015000"
```

---

## 3. Dò vết `finalPayment`

Mã nguồn ban đầu:

```javascript
const finalPayment = foodTotal + rawDeliveryFee - voucherDiscount;
```

Sau bước 1:

```text
foodTotal = "5500015000"
rawDeliveryFee = "20000"
voucherDiscount = 10000
```

Thực hiện:

```text
"5500015000" + "20000"
```

JavaScript tiếp tục nối chuỗi:

```text
"550001500020000"
```

Sau đó thực hiện phép trừ:

```text
"550001500020000" - 10000
```

Khi gặp toán tử `-`, JavaScript sẽ chuyển chuỗi số sang Number để thực hiện phép tính.

Kết quả:

```text
550001500010000
```

Do đó kết quả thực tế của biểu thức ban đầu là:

```text
550001500010000 VND
```

---

## 4. Kết quả đúng cần đạt

Giá món chính:

```text
55000 VND
```

Giá món phụ thêm:

```text
15000 VND
```

Phí giao hàng:

```text
20000 VND
```

Giảm giá:

```text
10000 VND
```

Tính tổng tiền món ăn:

```text
55000 + 15000 = 70000 VND
```

Tính số tiền thanh toán:

```text
70000 + 20000 - 10000 = 80000 VND
```

Vì vậy kết quả chính xác là:

```text
Tổng tiền món ăn: 70000 VND
Số tiền thanh toán thực tế: 80000 VND
```


## 5. Bảng Test Cases đối chứng

| Trường hợp kiểm thử            | Dữ liệu đầu vào                                                                   | Kết quả sai thực tế   | Kết quả đúng mong đợi |
| ------------------------------ | --------------------------------------------------------------------------------- | --------------------- | --------------------- |
| TC01 - Tính tổng tiền món ăn   | `rawFoodPrice = "55000"`, `rawToppingPrice = "15000"`                             | `5500015000 VND`      | `70000 VND`           |
| TC02 - Tính số tiền thanh toán | `foodTotal = "5500015000"`, `rawDeliveryFee = "20000"`, `voucherDiscount = 10000` | `550001500010000 VND` | `80000 VND`           |

---

## 6. Cách sửa lỗi

Sử dụng phương thức `Number()` để chuyển các chuỗi số thành kiểu Number trước khi thực hiện phép tính:

```javascript
const foodPrice = Number(rawFoodPrice);
const toppingPrice = Number(rawToppingPrice);
const deliveryFee = Number(rawDeliveryFee);
```

Sau khi ép kiểu:

```text
rawFoodPrice = "55000" → foodPrice = 55000
rawToppingPrice = "15000" → toppingPrice = 15000
rawDeliveryFee = "20000" → deliveryFee = 20000
```

Các biến mới đều có kiểu dữ liệu Number.

Khi đó:

```javascript
const foodTotal = foodPrice + toppingPrice;
```

thực hiện phép cộng số học:

```text
55000 + 15000 = 70000
```

Tiếp theo:

```javascript
const finalPayment = foodTotal + deliveryFee - voucherDiscount;
```

kết quả:

```text
70000 + 20000 - 10000 = 80000
```

## 7. Dò vết sau khi sửa

### Bước 1

```text
foodPrice = 55000
toppingPrice = 15000
```

### Bước 2

```text
foodTotal = 55000 + 15000
          = 70000
```

### Bước 3

```text
deliveryFee = 20000
voucherDiscount = 10000
```

### Bước 4

```text
finalPayment = 70000 + 20000 - 10000
             = 80000
```

### Kết quả Console

```text
Khách hàng: Nguyen Thi Mai
Món ăn: Com Tam Suon Bi Cha
Tổng tiền món ăn: 70000 VND
Số tiền thanh toán thực tế: 80000 VND
```


## 8. Kiến thức Session 01 được áp dụng

### Khai báo biến

Sử dụng `const` để khai báo các biến:

```javascript
const customerName = "Nguyen Thi Mai";
```

### Kiểu dữ liệu

Các giá trị giá tiền ban đầu là kiểu String:

```javascript
const rawFoodPrice = "55000";
```

Mã giảm giá là kiểu Number:

```javascript
const voucherDiscount = 10000;
```

### Ép kiểu

Sử dụng `Number()`:

```javascript
const foodPrice = Number(rawFoodPrice);
```

### Toán tử số học

Sử dụng:

```text
+ : phép cộng
- : phép trừ
```

### Template Literals

Sử dụng dấu backtick và `${}` để xuất dữ liệu:

```javascript
console.log(`Tổng tiền món ăn: ${foodTotal} VND`);
```



## 9. Cách kiểm thử

Không sử dụng Terminal.

Thực hiện theo các bước:

1. Tạo một thư mục chứa 3 file:

   * `index.html`
   * `checkoutOrder.js`
   * `README.md`
2. Mở file `index.html` bằng Google Chrome hoặc Microsoft Edge.
3. Nhấn `F12`.
4. Chọn tab **Console**.
5. Kiểm tra kết quả.

Kết quả cần hiển thị:

```text
Khách hàng: Nguyen Thi Mai
Món ăn: Com Tam Suon Bi Cha
Tổng tiền món ăn: 70000 VND
Số tiền thanh toán thực tế: 80000 VND
```

## 10. Kết luận

Nguyên nhân chính của lỗi là dữ liệu giá tiền được nhận dưới dạng String. Khi sử dụng toán tử `+` với hai chuỗi, JavaScript thực hiện nối chuỗi thay vì cộng số học.

Giải pháp là sử dụng `Number()` để chuyển dữ liệu giá tiền từ String sang Number trước khi thực hiện phép tính. Sau khi sửa, hệ thống cho kết quả chính xác:

```text
Tổng tiền món ăn: 70000 VND
Số tiền thanh toán thực tế: 80000 VND
```
