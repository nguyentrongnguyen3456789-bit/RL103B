# BÀI TẬP 1: DÒ VẾT VÀ SỬA LỖI TRUY CẬP THUỘC TÍNH

## 1. Phân tích lỗi

Dòng code bị sai:

```javascript
const basePrice = bookingReservation.priceKey;
```

Nguyên nhân: Dot Notation dùng để truy cập thuộc tính theo tên cố định. Vì vậy, JavaScript tìm thuộc tính có tên `priceKey`, trong khi đối tượng chỉ có thuộc tính `roomPrice`.

Do không tìm thấy thuộc tính `priceKey`, kết quả trả về là `undefined`. Khi lấy giá trị này để tính phụ thu và tổng tiền, chương trình trả về `NaN`.

Cách sửa:

```javascript
const basePrice = bookingReservation[priceKey];
```

Bracket Notation cho phép sử dụng giá trị của biến `priceKey` để truy cập đúng thuộc tính `roomPrice`.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01: Nhận phòng sớm | Giá phòng: 1.500.000đ, giờ nhận: 9 | Phụ thu: `NaN`, tổng tiền: `NaN` | Phụ thu: 450.000đ, tổng tiền: 1.950.000đ |
| TC02: Nhận phòng từ 12 giờ trở đi | Giá phòng: 1.500.000đ, giờ nhận: 14 | Tổng tiền: `NaN` | Phụ thu: 0đ, tổng tiền: 1.500.000đ |

## 3. Kết luận

Lỗi xảy ra do sử dụng Dot Notation thay vì Bracket Notation khi tên thuộc tính được lưu trong một biến. Sau khi sửa, chương trình lấy đúng giá phòng và tính phụ thu, tổng tiền theo quy định. Chương trình cũng đảm bảo phụ thu bằng 0 khi khách không nhận phòng sớm.
