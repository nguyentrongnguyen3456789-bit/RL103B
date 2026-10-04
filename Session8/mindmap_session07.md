# Hệ thống kiến thức Mảng Array JavaScript

## 1. Tổng quan về Mảng
- Định nghĩa
  - Cấu trúc lưu nhiều giá trị trong một biến
- Chỉ số
  - 0-indexed
  - Phần tử cuối có chỉ số `length - 1`
- Thuộc tính `.length`
  - Trả về số lượng phần tử
- Kiểu dữ liệu
  - Có thể chứa nhiều kiểu dữ liệu

## 2. Thêm / Xóa ở hai đầu
- Cuối mảng
  - `push(item)` — thêm cuối
  - `pop()` — xóa cuối
- Đầu mảng
  - `unshift(item)` — thêm đầu
  - `shift()` — xóa đầu
- Hàng đợi FIFO
  - Thêm bằng `push()`
  - Lấy phần tử bằng `shift()`

## 3. Thao tác tại vị trí bất kỳ
- `splice(start, deleteCount, items...)`
  - Thay đổi trực tiếp mảng gốc
  - Thêm, xóa hoặc sửa phần tử
- `slice(start, end)`
  - Tạo mảng con mới
  - Không thay đổi mảng gốc
  - `end` không được lấy

## 4. Tìm kiếm & Kiểm tra
- `indexOf(value)`
  - Tìm vị trí xuất hiện đầu tiên
  - Không tìm thấy trả về `-1`
- `lastIndexOf(value)`
  - Tìm vị trí xuất hiện cuối cùng
  - Không tìm thấy trả về `-1`
- `includes(value)`
  - Kiểm tra phần tử tồn tại
  - Kết quả `true` hoặc `false`

## 5. Bộ nhớ & Lỗi thường gặp
- Pass-by-reference
  - Gán mảng tạo thêm tham chiếu
  - Sửa bản sao có thể ảnh hưởng mảng gốc
- Sao chép mảng
  - Dùng `[...arr]`
- Lỗi vượt chỉ số
  - Chỉ số hợp lệ: `0` đến `length - 1`
  - Dùng `i <= length` có thể tạo `undefined`
  - Tính toán với `undefined` dễ tạo `NaN`
- Hàng đợi FIFO
  - Không dùng `pop()` để lấy phần tử đầu
  - Dùng `shift()` để giữ đúng FIFO
