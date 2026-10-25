
const readline = require('readline-sync');

function addSubscription() {
  console.log('Chuc nang them thue bao');
}

function listSubscriptions() {
  console.log('Chuc nang xem danh sach thue bao');
}

function updateSubscription() {
  console.log('Chuc nang cap nhat goi cuoc');
}

function deleteSubscription() {
  console.log('Chuc nang huy thue bao');
}

let menuChoice;

do {
  console.log('\n===== QUAN LY THUE BAO CLOUD =====');
  console.log('1. Them thue bao moi');
  console.log('2. Xem danh sach thue bao');
  console.log('3. Cap nhat goi cuoc');
  console.log('4. Huy thue bao');
  console.log('5. Thoat chuong trinh');

  menuChoice = readline.question('Nhap lua chon: ');

  switch (menuChoice) {
    case '1':
      addSubscription();
      break;

    case '2':
      listSubscriptions();
      break;

    case '3':
      updateSubscription();
      break;

    case '4':
      deleteSubscription();
      break;

    case '5':
      console.log('Thoat chuong trinh!');
      break;

    default:
      console.log('Lua chon khong hop le!');
  }
} while (menuChoice !== '5');
// 1. Bảng so sánh Trade-off
// Tiêu chuẩn	Monolithic Switch-Case	Modular Function Architecture
// Cấu trúc mã nguồn	Toàn bộ xử lý nằm trong switch-case, dễ dài và rối	Mỗi chức năng được tách thành một hàm riêng
// Độ dài khối switch	Có thể lên đến hàng trăm dòng	Ngắn, mỗi case chủ yếu gọi một hàm
// Khả năng bảo trì	Khó tìm lỗi, sửa đổi dễ ảnh hưởng phần khác	Dễ tìm lỗi và sửa từng chức năng
// Kiểm thử độc lập	Khó kiểm thử riêng từng chức năng	Có thể kiểm thử từng hàm độc lập nếu thiết kế phù hợp
// Khả năng tái sử dụng	Logic gắn chặt với menu, khó tái sử dụng	Có thể tái sử dụng hàm trong CLI, API hoặc Web nếu tách biệt giao diện và phụ thuộc
// Khả năng mở rộng	Thêm chức năng khiến switch-case ngày càng dài	Có thể thêm hàm mới và bổ sung một case
// Khi có 20 chức năng	Dễ trở nên phức tạp, khó quản lý	Dễ tổ chức và quản lý hơn
// Ưu điểm	Dễ viết, phù hợp chương trình nhỏ	Dễ bảo trì, kiểm thử và mở rộng
// Nhược điểm	Khó quản lý khi chương trình lớn	Cần thiết kế và tổ chức hàm hợp lý ngay từ đầu

// 2. Nguyên lý SRP là gì?
// SRP (Single Responsibility Principle) là nguyên lý đơn nhiệm: mỗi hàm hoặc mô-đun nên có một trách nhiệm chính, tập trung xử lý một nhiệm vụ cụ thể.

// Ví dụ trong chương trình quản lý thuê bao:
// - addSubscription(): Thêm thuê bao.
// - listSubscriptions(): Hiển thị danh sách.
// - updateSubscription(): Cập nhật gói cước.
// - deleteSubscription(): Hủy thuê bao.
// Nhờ đó, khi cần sửa chức năng cập nhật gói cước, lập trình viên chủ yếu chỉ cần sửa hàm updateSubscription() thay vì phải tìm và chỉnh sửa một khối switch-case lớn.