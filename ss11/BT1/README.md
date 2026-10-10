# BÀI TẬP 1: SỬA LỖI FALSY KHI CẬP NHẬT THIẾT BỊ

## 1. Phân tích lỗi

Trong JavaScript, `false` và `0` là các giá trị Falsy. Khi sử dụng trực tiếp trong điều kiện `if`, chương trình sẽ không thực hiện câu lệnh bên trong nếu giá trị là `false` hoặc `0`.

Do đó, hàm cập nhật ban đầu bỏ qua yêu cầu tắt điều hòa và đưa công suất đèn về 0W.

Cách sửa là kiểm tra `updatedData.property !== undefined` để xác định thuộc tính có được truyền giá trị hay không, thay vì kiểm tra giá trị đó có đúng hay không.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01: Tắt điều hòa | `targetId = "D01"`, `updatedData = { isActive: false }` | Điều hòa vẫn bật vì `if (false)` không chạy | `isActive = false` |
| TC02: Tắt công suất đèn | `targetId = "D02"`, `updatedData = { powerWatts: 0 }` | Công suất vẫn là 10W vì `if (0)` không chạy | `powerWatts = 0` |

## 3. Kết luận

Sau khi sửa điều kiện kiểm tra bằng `!== undefined`, hàm cập nhật có thể xử lý chính xác các giá trị `false` và `0`. Những thuộc tính không được truyền vào vẫn giữ nguyên giá trị cũ.
