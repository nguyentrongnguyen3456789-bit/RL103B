# Dò vết & Sửa lỗi Lặp Vô tận trong Quản trị Tồn kho Hàng hóa

## 1. Phân tích lỗi

### Lỗi 1: Off-by-one Error

Mã nguồn ban đầu sử dụng:

```javascript
for (let cupIndex = 1; cupIndex < orderQuantity; cupIndex++)