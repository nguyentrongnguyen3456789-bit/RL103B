# Bài 1 - Dò luồng và sửa lỗi tính cước lũy tiến GrabRide

## 1. Phân tích lỗi

### Dòng code bị sai logic

Đoạn code hiện tại:

```javascript
if (distanceInKm <= 2) {
  totalFare = baseFare;
} else {
  totalFare = baseFare + distanceInKm * extraFarePerKm;
}
```

Lỗi nằm ở dòng:

```javascript
totalFare = baseFare + distanceInKm * extraFarePerKm;
```

### Nguyên nhân lỗi

Theo nghiệp vụ:

* 2 km đầu tiên đã được tính trong `baseFare = 12.000 VNĐ`.
* Chỉ phần quãng đường vượt quá 2 km mới được tính thêm `4.500 VNĐ/km`.

Tuy nhiên, code cũ sử dụng toàn bộ `distanceInKm` để tính cước phụ.

Ví dụ chuyến xe 4 km:

* Cước cơ sở 2 km đầu: `12.000 VNĐ`
* Code sai tiếp tục tính: `4 × 4.500 = 18.000 VNĐ`
* Tổng trước phụ phí: `12.000 + 18.000 = 30.000 VNĐ`
* Mưa lớn tăng 20%: `30.000 × 1.2 = 36.000 VNĐ`

Trong khi kết quả đúng phải là:

* 2 km đầu: `12.000 VNĐ`
* 2 km vượt mức: `2 × 4.500 = 9.000 VNĐ`
* Tổng trước phụ phí: `21.000 VNĐ`
* Phụ phí mưa lớn: `21.000 × 1.2 = 25.200 VNĐ`

### Công thức đúng

```javascript
totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
```

Như vậy chỉ phần quãng đường vượt quá 2 km mới phát sinh cước bổ sung.

---

## 2. Test Cases

| Trường hợp kiểm thử            | Dữ liệu đầu vào                          | Kết quả sai thực tế | Kết quả đúng mong đợi |
| ------------------------------ | ---------------------------------------- | ------------------: | --------------------: |
| TC01 - Chuyến xe 4 km, mưa lớn | `distanceInKm = 4`, `isHeavyRain = true` |        `36.000 VNĐ` |          `25.200 VNĐ` |
| TC02 - Chuyến xe 2 km, mưa lớn | `distanceInKm = 2`, `isHeavyRain = true` |        `14.400 VNĐ` |          `14.400 VNĐ` |

### Giải thích Test Case 01
Với 4 km:
2 km đầu = 12.000 VNĐ
2 km vượt = 2 × 4.500 = 9.000 VNĐ
Cước cơ bản = 21.000 VNĐ
Phụ phí mưa = 21.000 × 20% = 4.200 VNĐ
Tổng = 25.200 VNĐ


### Giải thích Test Case 02
Với đúng 2 km:
Cước cơ bản = 12.000 VNĐ
Phụ phí mưa = 12.000 × 20% = 2.400 VNĐ
Tổng = 14.400 VNĐ
```

## 3. Kết luận

Lỗi nghiệp vụ xảy ra do chương trình tính `extraFarePerKm` trên toàn bộ quãng đường thay vì chỉ tính trên số km vượt quá 2 km.

Cần sửa công thức:

```javascript
baseFare + distanceInKm * extraFarePerKm

thành:

```javascript
baseFare + (distanceInKm - 2) * extraFarePerKm

Đồng thời bổ sung kiểm tra trường hợp quãng đường không hợp lệ để chương trình có tính phòng vệ dữ liệu.
