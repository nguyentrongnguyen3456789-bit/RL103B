// demo_session05.js

const examinationPrice = 150000;

// ================================
// TEST 1: Chuỗi chuẩn
// ================================

const rawCardCode = " med-rhm-0815-bhyt ";

const cleanCardCode = rawCardCode.trim();
const normalizedCardCode = cleanCardCode.toUpperCase();

const isValidCode = normalizedCardCode.startsWith("MED-");

const departmentCode = normalizedCardCode.slice(4, 7);

const hasHealthInsurance = normalizedCardCode.includes("BHYT");

const appointmentNumber = normalizedCardCode.slice(8, 12);

let discountAmount = 0;
let paymentAmount = examinationPrice;

if (hasHealthInsurance) {
    discountAmount = examinationPrice * 0.8;
    paymentAmount = examinationPrice - discountAmount;
}

console.log("===================================");
console.log("        PHIẾU TIẾP ĐÓN");
console.log("===================================");
console.log(`
Mã phiếu       : ${normalizedCardCode}
Mã hợp lệ      : ${isValidCode}
Chuyên khoa    : ${departmentCode}
Số thứ tự      : ${appointmentNumber}
BHYT           : ${hasHealthInsurance}
Giá khám       : ${examinationPrice} VNĐ
Giảm BHYT      : ${discountAmount} VNĐ
Cần thanh toán  : ${paymentAmount} VNĐ
`);
console.log("=".repeat(35));


// ================================
// TEST 2: Chuỗi lỗi
// ================================

const errorCardCode = " abc-rhm-0815-bhyt ";

const cleanErrorCode = errorCardCode.trim();
const normalizedErrorCode = cleanErrorCode.toUpperCase();

const isErrorCodeValid = normalizedErrorCode.startsWith("MED-");

console.log("\n");
console.log("===================================");
console.log("        KIỂM TRA CHUỖI LỖI");
console.log("===================================");
console.log(`
Mã phiếu       : ${normalizedErrorCode}
Mã hợp lệ      : ${isErrorCodeValid}
`);
console.log("=".repeat(35));