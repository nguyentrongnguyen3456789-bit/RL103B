# Bài tập 2: Sao chép trạng thái hàng đợi trạm sạc

## Phân tích lỗi

1. **Lấy sai xe khỏi hàng đợi:** `hangDoiXeCho.pop()` lấy xe ở cuối mảng (`51C-45678`), trong khi xe ở đầu hàng (`30A-98765`) phải được phục vụ trước theo quy tắc FIFO. Dùng `shift()` để lấy và xóa xe đầu tiên. `push()` tiếp tục thêm xe mới vào cuối hàng.
2. **Duyệt vượt giới hạn mảng:** Điều kiện `i <= hangDoiXeCho.length` khiến vòng lặp chạy thêm một lượt khi `i` bằng độ dài mảng. Phần tử tại chỉ số đó là `undefined`, vì vậy bảng LED in thêm dòng `Xe undefined`. Dùng `i < hangDoiXeCho.length` để chỉ duyệt các phần tử hiện có.

## Test cases đối chứng

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| Lấy xe vào sạc theo FIFO | `hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678']` | `pop()` lấy `51C-45678`, xe đến sau cùng. | `shift()` lấy `30A-98765`, xe ở đầu hàng. |
| Thêm xe mới và hiển thị hàng đợi | Hàng đợi ban đầu như trên; xe mới là `43D-88888`; hàng đợi sau khi lấy xe đầu tiên và thêm xe mới là `['29B-12345', '51C-45678', '43D-88888']`. | Với `pop()` và điều kiện `i <= length`, bảng hiển thị sai thứ tự (`30A-98765`, `29B-12345`, `43D-88888`) và thêm `STT 4: undefined`. | Vòng lặp `i < length` hiển thị đúng ba xe còn chờ: `STT 1: 29B-12345`, `STT 2: 51C-45678`, `STT 3: 43D-88888`; không có dòng `undefined`. |

## Chạy chương trình

```sh
node app.js
```
