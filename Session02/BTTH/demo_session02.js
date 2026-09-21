const bookingId = "GRB-001";
const distanceKm = 5.0;
const isPeakHour = true;

const baseFare = 12000;
const additionalFarePerKm = 4500;
const peakHourMultiplier = 1.2;

let totalFare = 0;

if (distanceKm < 0) {
  console.log("Khoảng cách không hợp lệ");
} else {
  if (distanceKm <= 2) {
    totalFare = baseFare;
  } else {
    totalFare = baseFare + (distanceKm - 2) * additionalFarePerKm;
  }

  if (isPeakHour === true) {
    totalFare = Math.round(totalFare * peakHourMultiplier);
  }

  console.log("========== HÓA ĐƠN GRABBIKE ==========");
  console.log("Mã cuốc xe:", bookingId);
  console.log("Quãng đường:", distanceKm, "km");
  console.log("Giờ cao điểm:", isPeakHour);
  console.log("Tổng cước:", totalFare, "VNĐ");
}

