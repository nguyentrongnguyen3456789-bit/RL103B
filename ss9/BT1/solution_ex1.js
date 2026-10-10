const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9
};

const priceKey = "roomPrice";

// Sử dụng Bracket Notation để lấy giá phòng theo biến priceKey
const basePrice = bookingReservation[priceKey];

let surcharge = 0;

if (bookingReservation.checkInHour < 12) {
  surcharge = basePrice * 0.3;
}

bookingReservation.surcharge = surcharge;

const totalAmount = basePrice + surcharge;
bookingReservation.totalAmount = totalAmount;

console.log("Mã đặt phòng:", bookingReservation.bookingId);
console.log("Khách hàng:", bookingReservation.guestName);
console.log("Phụ thu nhận phòng sớm:", bookingReservation.surcharge);
console.log("Tổng số tiền thanh toán:", bookingReservation.totalAmount);
