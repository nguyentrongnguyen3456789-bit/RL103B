# BÀI TẬP 2: KHẮC PHỤC LỖI TRUY CẬP THUỘC TÍNH VÀ XÓA THUỘC TÍNH

## 1. Phân tích lỗi

**Lỗi 1: Truy cập giá phòng sai**

Code sai: `bookingReservation.priceKey`

Nguyên nhân: JavaScript tìm thuộc tính có tên `priceKey`, trong khi thuộc tính cần lấy là `roomPrice`.

Cách sửa: `bookingReservation[priceKey]`.

**Lỗi 2: Xóa mã voucher sai**

Code sai: `bookingReservation.discountCode = undefined`

Nguyên nhân: Gán `undefined` chỉ thay đổi giá trị, không xóa thuộc tính khỏi đối tượng.

Cách sửa: `delete bookingReservation.discountCode`.

**Lỗi 3: Truy cập thuộc tính sai trong vòng lặp**

Code sai: `bookingReservation.key`

Nguyên nhân: JavaScript tìm thuộc tính có tên `key` thay vì sử dụng giá trị của biến `key`.

Cách sửa: `bookingReservation[key]`.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01: Tính tiền và hiển thị thông tin | Giá phòng 1.500.000đ, nhận phòng lúc 9 giờ | Giá phòng và tổng tiền là `NaN`; các giá trị khi duyệt thuộc tính là `undefined` | Phụ thu 450.000đ, tổng tiền 1.950.000đ; hiển thị đúng tên thuộc tính và giá trị |
| TC02: Xóa voucher không hợp lệ | `isVoucherValid = false`, voucher `SUMMER10` | Thuộc tính `discountCode` vẫn tồn tại dù giá trị là `undefined` | Xóa thuộc tính bằng `delete`; `'discountCode' in bookingReservation` trả về `false` |

## 3. Kiểm tra kết quả

Sử dụng câu lệnh:

```javascript
console.log('discountCode' in bookingReservation);
```

Kết quả:

```text
false
```

## 4. Kết luận

Sau khi sửa, chương trình lấy đúng giá phòng bằng Bracket Notation, xóa hoàn toàn voucher không hợp lệ bằng `delete` và hiển thị chính xác các thuộc tính bằng vòng lặp `for...in`.
