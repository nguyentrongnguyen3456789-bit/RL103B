# Thiết kế Bảng Dự toán Ngân sách Tiệc Sinh nhật Cá nhân

## 1. Mục tiêu

Chương trình được xây dựng nhằm lập dự toán ngân sách cho một bữa tiệc sinh nhật.

Chương trình thực hiện:

* Khai báo các biến đầu vào.
* Tính tổng tiền đồ ăn.
* Tính tổng chi phí toàn bộ bữa tiệc.
* Tính chi phí bình quân trên mỗi khách.
* Tính chênh lệch giữa ngân sách dự kiến và chi phí thực tế.
* Xuất kết quả ra Console bằng Template Literals.

---

## 2. Lược đồ biến đầu vào

| Tên biến           | Kiểu dữ liệu | Đơn vị    |            Giá trị mẫu | Ý nghĩa                       |
| ------------------ | ------------ | --------- | ---------------------: | ----------------------------- |
| `partyHost`        | String       | -         | `"Huynh Thi Anh Hong"` | Tên chủ nhân bữa tiệc         |
| `venueCost`        | Number       | VND       |              `1500000` | Phí thuê địa điểm             |
| `foodCostPerGuest` | Number       | VND/người |               `180000` | Giá suất ăn của một khách     |
| `guestCount`       | Number       | người     |                   `10` | Số lượng khách mời            |
| `drinkCost`        | Number       | VND       |               `800000` | Chi phí đồ uống trọn gói      |
| `decorCost`        | Number       | VND       |              `1200000` | Chi phí trang trí và bánh kem |
| `targetBudget`     | Number       | VND       |              `6000000` | Ngân sách dự kiến ban đầu     |

`guestCount` được chọn là `10`, thỏa điều kiện tối thiểu 2 người.

---

## 3. Công thức tính toán

### 3.1. Tổng tiền đồ ăn

Công thức:

```text id="m8u8k3"
foodTotal = foodCostPerGuest * guestCount
```

Thay số:

```text id="u3jrxk"
foodTotal = 180000 * 10
          = 1800000 VND
```

---

### 3.2. Tổng chi phí toàn bộ bữa tiệc

Công thức:

```text id="4nyjjk"
totalPartyCost = venueCost + foodTotal + drinkCost + decorCost
```

Thay số:

```text id="qjmvhl"
totalPartyCost = 1500000 + 1800000 + 800000 + 1200000
               = 5300000 VND
```

---

### 3.3. Chi phí bình quân trên mỗi khách

Công thức:

```text id="8xgdzp"
costPerGuest = totalPartyCost / guestCount
```

Thay số:

```text id="99fn9s"
costPerGuest = 5300000 / 10
             = 530000 VND/người
```

---

### 3.4. Chênh lệch so với ngân sách

Công thức:

```text id="6tehxm"
budgetVariance = targetBudget - totalPartyCost
```

Thay số:

```text id="k2h343"
budgetVariance = 6000000 - 5300000
               = 700000 VND
```

Giá trị `700000 VND` là khoản ngân sách còn dư so với chi phí thực tế.

---

## 4. Kết quả với dữ liệu mẫu

```text id="5y6x9u"
================ DỰ TOÁN NGÂN SÁCH TIỆC SINH NHẬT ================
Chủ nhân bữa tiệc: Huynh Thi Anh Hong

Chi phí thuê địa điểm: 1.500.000 VND
Chi phí đồ ăn: 1.800.000 VND
Chi phí đồ uống: 800.000 VND
Chi phí trang trí & bánh kem: 1.200.000 VND
------------------------------------------------------------------
TỔNG CHI PHÍ TIỆC: 5.300.000 VND
CHI PHÍ BÌNH QUÂN/KHÁCH: 530.000 VND
NGÂN SÁCH DỰ KIẾN: 6.000.000 VND
CHÊNH LỆCH NGÂN SÁCH: 700.000 VND
==================================================================
```

---

# 5. Test Case

## Test Case 1: Tăng số lượng khách

Dữ liệu thay đổi:

```javascript id="fk6vbf"
guestCount = 15;
```

Các biến khác giữ nguyên.

### Tính toán

Tiền đồ ăn:

```text id="4p9f8k"
foodTotal = 180000 * 15
          = 2700000 VND
```

Tổng chi phí:

```text id="9r8xsr"
totalPartyCost = 1500000 + 2700000 + 800000 + 1200000
               = 6200000 VND
```

Chi phí bình quân:

```text id="f7n5du"
costPerGuest = 6200000 / 15
             ≈ 413333.33 VND/người
```

Chênh lệch ngân sách:

```text id="w3l1ju"
budgetVariance = 6000000 - 6200000
               = -200000 VND
```

Kết quả cho thấy chi phí thực tế cao hơn ngân sách dự kiến `200000 VND`.

---

## Test Case 2: Thay đổi ngân sách

Giữ nguyên `guestCount = 10`, thay:

```javascript id="xtpn0p"
targetBudget = 7000000;
```

Các chi phí khác không thay đổi.

Tổng chi phí vẫn là:

```text id="t9vtvh"
5300000 VND
```

Chi phí bình quân:

```text id="kpm2wk"
5300000 / 10 = 530000 VND/người
```

Chênh lệch ngân sách:

```text id="d5jx30"
budgetVariance = 7000000 - 5300000
               = 1700000 VND
```

Kết quả cho thấy ngân sách dự kiến còn dư `1700000 VND`.

---

## 6. Bảng đối chứng Test Cases

| Test Case              | Dữ liệu thay đổi                            | Tổng tiền đồ ăn | Tổng chi phí | Chi phí/người | Chênh lệch ngân sách |
| ---------------------- | ------------------------------------------- | --------------: | -----------: | ------------: | -------------------: |
| TC01 - Dữ liệu ban đầu | `guestCount = 10`, `targetBudget = 6000000` |       1.800.000 |    5.300.000 |       530.000 |             +700.000 |
| TC02 - Tăng số khách   | `guestCount = 15`                           |       2.700.000 |    6.200.000 |    413.333,33 |             -200.000 |
| TC03 - Tăng ngân sách  | `targetBudget = 7000000`                    |       1.800.000 |    5.300.000 |       530.000 |           +1.700.000 |

---

## 7. Ý nghĩa của `budgetVariance`

Biến:

```javascript id="bq4w9v"
const budgetVariance = targetBudget - totalPartyCost;
```

được dùng để xác định sự chênh lệch giữa ngân sách dự kiến và tổng chi phí.

Có 3 trường hợp:

```text id="8wzsmc"
budgetVariance > 0
→ Ngân sách còn dư.

budgetVariance = 0
→ Chi phí đúng bằng ngân sách.

budgetVariance < 0
→ Chi phí vượt ngân sách.
```

Ví dụ:

```text id="uwhq0i"
700000  → còn dư 700.000 VND
0       → vừa đủ ngân sách
-200000 → vượt 200.000 VND
```

---

## 8. Kiến thức Session 01 được áp dụng

### Khai báo biến

Sử dụng `const`:

```javascript id="eg05d1"
const partyHost = "Huynh Thi Anh Hong";
const venueCost = 1500000;
```

### Kiểu dữ liệu nguyên thủy

`partyHost` là kiểu String:

```javascript id="eu8c1w"
const partyHost = "Huynh Thi Anh Hong";
```

Các biến chi phí và số lượng là Number:

```javascript id="8m7i2s"
const venueCost = 1500000;
const guestCount = 10;
```

### Toán tử số học

Chương trình sử dụng:

```text id="x3b9dw"
+ : cộng
- : trừ
* : nhân
/ : chia
```

Ví dụ:

```javascript id="p7m8v4"
const foodTotal = foodCostPerGuest * guestCount;
```

### Template Literals

Xuất hóa đơn bằng dấu backtick:

```javascript id="m5gdw9"
console.log(`
TỔNG CHI PHÍ TIỆC: ${totalPartyCost} VND
`);
```

Giá trị biến được chèn vào chuỗi thông qua:

```text id="u7jndh"
${tênBiến}
```

### `toLocaleString("vi-VN")`

Sử dụng để định dạng số tiền dễ đọc:

```javascript id="r8jv2n"
totalPartyCost.toLocaleString("vi-VN")
```

Ví dụ:

```text id="r6gtyd"
5300000
```

được hiển thị thành:

```text id="h3x9gc"
5.300.000
```

---

## 9. Cách kiểm thử

Không cần sử dụng Terminal.

Thực hiện:

1. Tạo một thư mục chứa:

   * `index.html`
   * `partyBudget.js`
   * `README.md`
2. Mở file `index.html` bằng Chrome hoặc Edge.
3. Nhấn `F12`.
4. Chọn tab **Console**.
5. Kiểm tra bảng dự toán được in ra.

---

## 10. Kết luận

Chương trình đã xây dựng đầy đủ một kịch bản dự toán ngân sách tiệc sinh nhật bằng JavaScript.

Các công thức được thực hiện theo trình tự:

```text id="7k5jva"
Chi phí đồ ăn
      ↓
Tổng chi phí bữa tiệc
      ↓
Chi phí bình quân mỗi khách
      ↓
Chênh lệch so với ngân sách
```

Với dữ liệu mẫu, tổng chi phí bữa tiệc là:

```text id="t2i6qf"
5.300.000 VND
```

Chi phí bình quân:

```text id="7fn1c2"
530.000 VND/người
```

Chênh lệch so với ngân sách:

```text id="r2s0bg"
700.000 VND
```
