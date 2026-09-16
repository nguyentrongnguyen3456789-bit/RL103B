# Phân tích Trade-off: Number() vs Toán tử đơn phân +value

## 1. Mục tiêu

Bài thực hành nhằm so sánh hai cách chuyển đổi dữ liệu chuỗi sang số trong JavaScript:

* Hàm ép kiểu tường minh `Number(value)`.
* Toán tử đơn phân `+value`.

Chương trình kiểm tra hai phương pháp trên nhiều loại dữ liệu và phân tích ưu, nhược điểm theo các tiêu chí:

* Tính dễ đọc và rõ ý định.
* Nguy cơ nhầm lẫn cú pháp.
* Khả năng xử lý chuỗi có ký tự đơn vị.


## 2. Bộ dữ liệu kiểm nghiệm

Chương trình sử dụng 6 trường hợp:

| Trường hợp       | Giá trị     |
| ---------------- | ----------- |
| Số nguyên        | `"150000"`  |
| Số thực          | `"3.75"`    |
| Chuỗi rỗng       | `""`        |
| Chuỗi chứa chữ   | `"100k"`    |
| Giá trị đặc biệt | `null`      |
| Giá trị đặc biệt | `undefined` |


## 3. Kết quả thực nghiệm

### 3.1. Sử dụng Number(value)

| Dữ liệu     | Kết quả `Number(value)` | Kiểu dữ liệu |
| ----------- | ----------------------: | ------------ |
| `"150000"`  |                `150000` | `number`     |
| `"3.75"`    |                  `3.75` | `number`     |
| `""`        |                     `0` | `number`     |
| `"100k"`    |                   `NaN` | `number`     |
| `null`      |                     `0` | `number`     |
| `undefined` |                   `NaN` | `number`     |



### 3.2. Sử dụng +value

| Dữ liệu     | Kết quả `+value` | Kiểu dữ liệu |
| ----------- | ---------------: | ------------ |
| `"150000"`  |         `150000` | `number`     |
| `"3.75"`    |           `3.75` | `number`     |
| `""`        |              `0` | `number`     |
| `"100k"`    |            `NaN` | `number`     |
| `null`      |              `0` | `number`     |
| `undefined` |            `NaN` | `number`     |

Qua thực nghiệm, `Number(value)` và `+value` cho kết quả giống nhau đối với bộ dữ liệu trên.


## 4. Phân tích từng trường hợp

### Trường hợp 1: `"150000"`

```javascript
Number("150000")


cho kết quả:

```text
150000

Toán tử đơn phân:

```javascript
+"150000"
```

cũng cho:

```text
150000


Cả hai đều chuyển String thành Number.


### Trường hợp 2: `"3.75"`

```javascript
Number("3.75")


kết quả:

```text
3.75
```

và:

```javascript
+"3.75"


cũng cho:

```text
3.75


Đây là trường hợp phù hợp với dữ liệu khoảng cách, trọng lượng hoặc các giá trị có phần thập phân.


### Trường hợp 3: `""`

Khi chuyển chuỗi rỗng:

```javascript
Number("")
```

kết quả:

```text
0
```

Toán tử đơn phân:

```javascript
+""
```

cũng cho:

```text
0
```

Điều này cần lưu ý khi dữ liệu biểu mẫu bị bỏ trống, vì chuỗi rỗng không tạo ra `NaN` mà được chuyển thành `0`.

---

### Trường hợp 4: `"100k"`

Với:

```javascript
Number("100k")
```

kết quả:

```text
NaN
```

Và:

```javascript
+"100k"
```

cũng cho:

```text
NaN
```

Hai phương pháp này yêu cầu toàn bộ chuỗi phải có định dạng số hợp lệ.

---

## 5. Xử lý chuỗi có đơn vị

Trong trường hợp:

```text
"100k"
```

cả `Number()` và `+value` đều không thể trực tiếp chuyển thành số:

```text
Number("100k") → NaN
+"100k"        → NaN
```

Trong khi đó:

```javascript
parseInt("100k", 10)
```

cho:

```text
100


Điều này cho thấy `parseInt()` có khả năng đọc phần số nguyên ở đầu chuỗi.

Tuy nhiên, cần lưu ý rằng `parseInt()` không phải là phương án thay thế hoàn toàn cho `Number()`.

Ví dụ:

```javascript
parseInt("100.50", 10)

cho:

```text
100

Trong khi:

```javascript
Number("100.50")

cho:

```text
100.5


Vì vậy, cần chọn phương pháp dựa trên định dạng dữ liệu thực tế.


# 6. Bảng phân tích Trade-off

| Tiêu chí                     | `Number(value)`                              | `+value`                                  |
| ---------------------------- | -------------------------------------------- | ----------------------------------------- |
| Tính dễ đọc & rõ ý định      | Dễ đọc, thể hiện rõ đang chuyển kiểu dữ liệu | Ngắn gọn nhưng người mới có thể chưa quen |
| Khả năng bảo trì             | Dễ hiểu khi đọc lại mã nguồn                 | Có thể khó đọc hơn trong biểu thức dài    |
| Nguy cơ nhầm lẫn cú pháp     | Thấp                                         | Cao hơn khi kết hợp với phép cộng         |
| Chuỗi có đơn vị như `"100k"` | Trả về `NaN`                                 | Trả về `NaN`                              |
| Chuỗi số nguyên              | Chuyển chính xác                             | Chuyển chính xác                          |
| Chuỗi số thực                | Chuyển chính xác                             | Chuyển chính xác                          |
| Chuỗi rỗng                   | `0`                                          | `0`                                       |
| `null`                       | `0`                                          | `0`                                       |
| `undefined`                  | `NaN`                                        | `NaN`                                     |


## 7. Phân tích nguy cơ nhầm lẫn cú pháp

Ví dụ:

```javascript
const subtotal = 50000;
const fee = "20000";


Nếu viết:

```javascript
subtotal + fee


JavaScript thực hiện nối chuỗi:

```text
5000020000


Muốn ép `fee` thành số bằng toán tử đơn phân:

```javascript
subtotal + +fee


kết quả:

```text
70000


Cách viết này đúng về mặt cú pháp nhưng có thể gây nhầm lẫn cho người mới vì có hai dấu `+` đứng cạnh nhau.

Cách viết:

```javascript
subtotal + Number(fee)


thể hiện rõ ý định chuyển `fee` thành Number trước khi cộng.

## 8. So sánh về khả năng đọc mã nguồn

### Cách 1: Number()

```javascript
const total = subtotal + Number(fee);


Người đọc có thể dễ dàng nhận ra:

```text
fee → chuyển sang Number → cộng vào subtotal

### Cách 2: Unary Plus

```javascript
const total = subtotal + +fee;


Dòng lệnh ngắn hơn nhưng phải biết rằng `+fee` là toán tử đơn phân dùng để ép kiểu.

Với dự án có nhiều thành viên hoặc người mới tham gia, tính rõ ràng của mã nguồn có thể quan trọng hơn việc rút ngắn một vài ký tự.


## 9. Trade-off tổng hợp

### `Number(value)`

**Ưu điểm:**

* Rõ ràng và trực quan.
* Dễ hiểu với người mới.
* Thể hiện rõ mục đích ép kiểu.
* Dễ bảo trì.
* Phù hợp với các phép tính tài chính, hóa đơn và dữ liệu nghiệp vụ.

**Nhược điểm:**

* Viết dài hơn `+value`.
* Không bóc tách được số khi chuỗi có ký tự không phải số như `"100k"`.


### `+value`

**Ưu điểm:**

* Cú pháp rất ngắn.
* Thực hiện chuyển đổi nhanh và trực tiếp.
* Phù hợp khi lập trình viên đã quen với JavaScript.

**Nhược điểm:**

* Kém trực quan với người mới.
* Dễ gây nhầm lẫn khi đặt cạnh toán tử cộng.
* Có thể làm biểu thức phức tạp khó đọc.


## 10. Quy chuẩn đề xuất cho dự án

Đối với mã nguồn dự án, có thể thống nhất:

```javascript
Number(value)

là cách ép kiểu số mặc định.

Lý do:

1. Dễ đọc.
2. Rõ ý định.
3. Dễ bảo trì.
4. Giảm nhầm lẫn với toán tử cộng.
5. Phù hợp khi xử lý dữ liệu tài chính, hóa đơn và thương mại điện tử.

Toán tử:

```javascript
+value


có thể sử dụng trong các đoạn mã ngắn khi đội ngũ đã thống nhất quy ước và tất cả thành viên đều hiểu cú pháp.

Với chuỗi có phần số ở đầu và có đơn vị, có thể cân nhắc:

```javascript
parseInt(value, 10)


hoặc xử lý dữ liệu đầu vào riêng trước khi chuyển đổi, tùy yêu cầu nghiệp vụ.


