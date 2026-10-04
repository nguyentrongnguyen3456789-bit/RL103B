# Bài tập 1: Điều phối xe và tính doanh thu trạm sạc

## Phân tích lỗi

1. **Sai thứ tự điều phối xe:** `waitingQueue.pop()` lấy và xóa phần tử cuối mảng, tức xe đến sau cùng. Hàng đợi của trạm sạc phải xử lý theo FIFO (First In, First Out), nên cần dùng `waitingQueue.shift()` để lấy phần tử đầu tiên, tại chỉ số `0`.
2. **Vượt chỉ số mảng khi tính tổng:** Điều kiện `i <= completedSessionsKwh.length` khiến vòng lặp chạy thêm một lượt khi `i` bằng độ dài mảng. Khi đó `completedSessionsKwh[i]` là `undefined`; phép cộng `totalKwh += undefined` làm `totalKwh` thành `NaN`. Do đó doanh thu tính từ tổng này cũng thành `NaN`. Điều kiện đúng là `i < completedSessionsKwh.length`.

## Test cases đối chứng

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| Điều phối xe theo FIFO | `waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99']` | Dùng `pop()` điều phối `51K-678.99` (xe đến sau cùng). | Dùng `shift()` điều phối `29A-112.33` (xe đến sớm nhất). |
| Tính tổng điện năng và doanh thu | `completedSessionsKwh = [45.2, 30.5, 62.8, 28.0]`; `fastChargingRate = 4500` | Dùng điều kiện `i <= length` truy cập chỉ số `4` (`undefined`), làm tổng và doanh thu thành `NaN`. | Dùng điều kiện `i < length`: tổng sản lượng là `166.5 kWh`; tổng doanh thu là `749250 VNĐ`. |

## Chạy chương trình

```sh
node app.js
```
