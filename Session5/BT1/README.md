# Phân tích lỗi & Test Cases

## 1. Phân tích lỗi

### Lỗi 1: Kiểm tra tiền tố trước khi chuẩn hóa chữ hoa

Mã đầu vào:

`"  med-nhi-1024  "`

Sau khi `trim()`:

`"med-nhi-1024"`

Nếu thực hiện:

`cleanAppointmentCode.startsWith("MED-")`

kết quả là `false` vì mã đang có chữ thường `med`.

### Cách sửa

Chuẩn hóa mã bằng `toUpperCase()` trước khi kiểm tra:

`const normalizedCode = cleanAppointmentCode.toUpperCase();`

Sau đó:

`normalizedCode.startsWith("MED-")`

Kết quả là `true`.

---

### Lỗi 2: Cắt sai vị trí số thứ tự

Cấu trúc mã:

`MED-NHI-1024`

Vị trí ký tự:

- `MED` → index 0 đến 2
- `-` → index 3
- `NHI` → index 4 đến 6
- `-` → index 7
- `1024` → index 8 đến 11

Vì vậy cần dùng:

`slice(8, 12)`

để lấy đủ 4 chữ số `1024`.

**Lưu ý:** Đoạn mã nguồn được cung cấp trong đề đã sử dụng `slice(8, 12)`, nên phần này thực tế đã đúng.

---

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01 - Mã có khoảng trắng, chữ thường | `"  med-nhi-1024  "` | Kiểm tra `"MED-"` trên mã chữ thường → `false` | Bệnh nhân `NGUYỄN VĂN AN`, chuyên khoa `NHI`, số `1024`, hợp lệ `true` |
| TC02 - Mã đã viết hoa | `"MED-tim-2568"` | Nếu cắt sai vị trí có thể thiếu chữ số | Chuyên khoa `TIM`, số `2568`, hợp lệ `true` |
| TC03 - Mã có tiền tố không hợp lệ | `"  ABC-nhi-1024  "` | Nếu chỉ xử lý chuỗi mà không kiểm tra tiền tố → có thể xem là hợp lệ | Chuyên khoa `NHI`, số `1024`, hợp lệ `false` |