// solution_ex1.js

// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

// Dọn dẹp khoảng trắng và chuẩn hóa mã
const cleanAppointmentCode = rawAppointmentCode.trim();
const normalizedCode = cleanAppointmentCode.toUpperCase();

// Kiểm tra tiền tố sau khi chuẩn hóa
const isValidPrefix = normalizedCode.startsWith("MED-");

// Cắt mã chuyên khoa và số thứ tự
const departmentCode = normalizedCode.slice(4, 7);
const appointmentNumber = normalizedCode.slice(8, 12);

// Chuẩn hóa tên bệnh nhân
const formattedPatientName = cleanPatientName.trim().toUpperCase();

// Kiểm tra mã hợp lệ
const isCodeValid = isValidPrefix;

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);