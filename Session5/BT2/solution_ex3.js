// solution_ex3.js

const rawTicketCode = "   med-card-0428-ut   ";

// String Immutability:
// trim() và toUpperCase() không thay đổi chuỗi gốc.
// Các hàm này trả về một chuỗi mới, nên phải lưu kết quả vào biến.

const cleanTicketCode = rawTicketCode.trim();
const normalizedTicketCode = cleanTicketCode.toUpperCase();

const isValidPrefix = normalizedTicketCode.startsWith("MED-");
const departmentCode = normalizedTicketCode.slice(4, 8);
const isPriority = normalizedTicketCode.includes("-UT");
const displayCode = normalizedTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Ưu tiên:", isPriority);
console.log("Chuỗi in phiếu:", displayCode);