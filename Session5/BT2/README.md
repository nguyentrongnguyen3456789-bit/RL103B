# Phân tích lỗi String Immutability

## 1. Phân tích lỗi

Mã nguồn ban đầu sử dụng:

rawTicketCode.trim();
rawTicketCode.toUpperCase();

Hai hàm `trim()` và `toUpperCase()` không thay đổi trực tiếp chuỗi
`rawTicketCode`.

Đây là nguyên lý String Immutability trong JavaScript.

Các hàm xử lý chuỗi trả về một chuỗi mới, vì vậy cần lưu kết quả
vào biến để sử dụng cho các bước tiếp theo.

Cách sửa:

const cleanTicketCode = rawTicketCode.trim();
const normalizedTicketCode = cleanTicketCode.toUpperCase();

Sau đó sử dụng `normalizedTicketCode` để kiểm tra và cắt chuỗi.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01 - Mã có khoảng trắng và chữ thường | `"   med-card-0428-ut   "` | `startsWith("MED-")` trả về `false`, mã vẫn còn khoảng trắng và chữ thường | Mã hợp lệ `true`, khoa `CARD`, ưu tiên `true`, chuỗi `MED | CARD | 0428 | UT` |
| TC02 - Mã đã chuẩn hóa | `"MED-CARD-0428-UT"` | Nếu xử lý trên biến chưa được làm sạch có thể cho kết quả không đúng | Mã hợp lệ `true`, khoa `CARD`, ưu tiên `true`, chuỗi `MED | CARD | 0428 | UT` |

## 3. Nguyên lý String Immutability

String trong JavaScript là kiểu dữ liệu bất biến.

Các phương thức như:

- `trim()`
- `toUpperCase()`
- `replace()`
- `replaceAll()`

không thay đổi chuỗi ban đầu mà trả về chuỗi mới.

Vì vậy cần gán kết quả:

const cleanTicketCode = rawTicketCode.trim();
const normalizedTicketCode = cleanTicketCode.toUpperCase();

Sau đó sử dụng biến mới để xử lý tiếp.