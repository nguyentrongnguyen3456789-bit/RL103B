# README.md – Dò vết và sửa lỗi Grace Period

## 1. Phân tích lỗi

Trong hàm `auditSubscriptions(list)`, điều kiện `sub.daysOverdue >= 3` là điều kiện sai logic.

Nguyên nhân: Toán tử `>=` bao gồm cả trường hợp bằng 3, khiến thuê bao bị hạ cấp ngay trong ngày thứ 3. Điều này không đúng với nghiệp vụ của StreamHub, vì thuê bao vẫn được sử dụng gói cũ trong 3 ngày đầu nợ cước.

**Cách sửa:** Thay điều kiện `sub.daysOverdue >= 3` bằng `sub.daysOverdue > 3`.

- Nếu `daysOverdue` từ 1 đến 3: Giữ nguyên `planTier` và `deviceLimit`, cập nhật `status = 'GRACE_PERIOD'`.
- Nếu `daysOverdue > 3`: Hạ cấp `planTier = 'FREE'`, đặt `deviceLimit = 1` và cập nhật `status = 'EXPIRED'`.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01 – Nợ cước đúng 3 ngày | `daysOverdue = 3`, `planTier = 'FAMILY'`, `deviceLimit = 5` | Bị hạ cấp xuống `FREE`, `deviceLimit = 1`, `status = 'EXPIRED'` | Giữ `planTier = 'FAMILY'`, `deviceLimit = 5`, `status = 'GRACE_PERIOD'` |
| TC02 – Nợ cước 4 ngày | `daysOverdue = 4`, `planTier = 'FAMILY'`, `deviceLimit = 5` | Hạ cấp xuống `FREE`, `deviceLimit = 1`, `status = 'EXPIRED'` | Hạ cấp xuống `FREE`, `deviceLimit = 1`, `status = 'EXPIRED'` |

**Kết luận:** TC01 phát hiện lỗi điều kiện biên tại ngày thứ 3. TC02 kiểm tra hệ thống vẫn hạ cấp chính xác khi quá thời gian ân hạn.

## 3. Kết quả sau khi sửa

Chương trình phân biệt chính xác hai trường hợp: nợ cước không quá 3 ngày vẫn được giữ gói cũ; nợ cước trên 3 ngày bị hạ cấp về gói `FREE` và giới hạn một thiết bị. Các thuộc tính được cập nhật trực tiếp trên đối tượng thuê bao trong mảng.
