// solution_ex7.js

const priceS = 35000;
const priceM = 42000;
const priceL = 48000;
const priceT = 10000;

// Chuỗi món của từng bàn
const tables = ["MLT", "SSX", "LLTT"];

let totalShiftRevenue = 0;

// Vòng lặp ngoài: duyệt từng bàn
for (let tableIndex = 0; tableIndex < tables.length; tableIndex++) {
    const currentTable = tables[tableIndex];
    let tableTotal = 0;

    console.log("================================");
    console.log("Bàn", tableIndex + 1);
    console.log("Món gọi:", currentTable);

    // Vòng lặp trong: duyệt từng món trong bàn
    for (let orderIndex = 0; orderIndex < currentTable.length; orderIndex++) {
        const currentItem = currentTable[orderIndex];

        // Món X bị hủy thì bỏ qua
        if (currentItem === "X") {
            continue;
        }

        if (currentItem === "S") {
            tableTotal += priceS;
        } else if (currentItem === "M") {
            tableTotal += priceM;
        } else if (currentItem === "L") {
            tableTotal += priceL;
        } else if (currentItem === "T") {
            tableTotal += priceT;
        }
    }

    // Giảm 10% nếu hóa đơn trên 100.000 VNĐ
    let discountAmount = 0;

    if (tableTotal > 100000) {
        discountAmount = tableTotal * 0.1;
    }

    const finalTableTotal = tableTotal - discountAmount;

    console.log("Tổng tiền trước giảm:", tableTotal, "VNĐ");
    console.log("Tiền giảm:", discountAmount, "VNĐ");
    console.log("Thực thu bàn:", finalTableTotal, "VNĐ");

    // Cộng vào doanh thu ca
    totalShiftRevenue += finalTableTotal;
}

console.log("================================");
console.log("TỔNG DOANH THU CA:", totalShiftRevenue, "VNĐ");