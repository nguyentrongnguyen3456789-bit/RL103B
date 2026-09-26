const customerName = "Tran Minh Duc";
const customerAge = 20;
const membershipTier = "GOLD";
const movieName = "Dune: Part Two";
const movieAgeRating = 16;
const seatTypeCode = 2;
const isWeekday = true;
const basePrice = 100000;

if (
    Number.isNaN(basePrice) ||
    basePrice <= 0 ||
    Number.isNaN(customerAge) ||
    customerAge <= 0 ||
    customerAge % 1 !== 0
) {
    console.error(
        "LỖI DỮ LIỆU: Giá vé phải lớn hơn 0 và tuổi khách hàng phải là số nguyên dương hợp lệ!"
    );
} else if (customerAge < movieAgeRating) {
    console.warn(
        `CẢNH BÁO KIỂM DUYỆT: Khách hàng ${customerName} (${customerAge} tuổi) không đủ điều kiện xem phim "${movieName}" (Yêu cầu độ tuổi tối thiểu: ${movieAgeRating}+). Giao dịch bị hủy bỏ!`
    );
} else {
    let seatTypeName = "";
    let seatSurcharge = 0;
    let isValidSeat = true;

    switch (seatTypeCode) {
        case 1:
            seatTypeName = "Standard";
            seatSurcharge = 0;
            break;

        case 2:
            seatTypeName = "VIP";
            seatSurcharge = 15000;
            break;

        case 3:
            seatTypeName = "Couple";
            seatSurcharge = 35000;
            break;

        default:
            console.error("Mã loại ghế không tồn tại!");
            isValidSeat = false;
    }

    if (isValidSeat === true) {
        let discountPercent = 0;

        if (customerAge <= 12 || customerAge >= 60) {
            discountPercent = 30;
        } else if (
            customerAge > 12 &&
            customerAge <= 22 &&
            isWeekday === true
        ) {
            discountPercent = 20;
        } else {
            discountPercent = 0;
        }

        let pointRate = 0;
        let membershipGift = "";

        switch (membershipTier) {
            case "DIAMOND":
                pointRate = 0.10;
                membershipGift = "Combo 1 Bắp Rang + 2 Nước Ngọt";
                break;

            case "GOLD":
                pointRate = 0.07;
                membershipGift = "1 Phần Nước Ngọt Lớn";
                break;

            case "SILVER":
                pointRate = 0.05;
                membershipGift = "Không có";
                break;

            case "STANDARD":
                pointRate = 0.03;
                membershipGift = "Không có";
                break;

            default:
                pointRate = 0;
                membershipGift = "Không có";
        }

        const boardingLane =
            membershipTier === "DIAMOND" ||
            membershipTier === "GOLD"
                ? "Lối Vào Ưu Tiên (VIP Priority Lane)"
                : "Lối Vào Tiêu Chuẩn (Standard Lane)";

        const discountAmount =
            basePrice * (discountPercent / 100);

        const discountedTicketPrice =
            basePrice - discountAmount;

        const finalPayment =
            discountedTicketPrice + seatSurcharge;

        const rewardPoints =
            finalPayment * pointRate;

        console.log(`
========================================
      HỆ THỐNG VÉ PHIM CGV / LOTTE CINEMA
         PHIẾU XÁC NHẬN GIAO DỊCH CRM
========================================
Khách hàng          : ${customerName}
Độ tuổi             : ${customerAge} tuổi
Hạng thành viên     : ${membershipTier}
Phim                : ${movieName} (Phân loại: C${movieAgeRating})
Loại ghế            : ${seatTypeName}
Ngày chiếu          : ${
    isWeekday
        ? "Ngày thường (Thứ 2 - Thứ 6)"
        : "Cuối tuần (Thứ 7 - Chủ Nhật)"
}
----------------------------------------
Giá vé gốc          : ${basePrice.toLocaleString("vi-VN")} VNĐ
Mức giảm giá        : ${discountPercent}%
Số tiền được giảm   : ${discountAmount.toLocaleString("vi-VN")} VNĐ
Phụ thu loại ghế    : ${seatSurcharge.toLocaleString("vi-VN")} VNĐ
----------------------------------------
TỔNG THANH TOÁN     : ${finalPayment.toLocaleString("vi-VN")} VNĐ
----------------------------------------
QUYỀN LỢI CRM & DỊCH VỤ:
Quà tặng kèm        : ${membershipGift}
Điểm thưởng tích lũy: ${rewardPoints.toLocaleString("vi-VN")} điểm (Tỷ lệ: ${pointRate * 100}%)
Lối soát vé         : ${boardingLane}
========================================
        `);
    }
}