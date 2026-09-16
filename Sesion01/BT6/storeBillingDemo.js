"use strict";

const storeName = "CircleK Tien Loi 24/7";
const cashierName = "Nguyen Thi Huong";
const itemName = "Banh Mi Cha Lua & Ca Phe Sua";

const rawItemPrice = "45000";
const rawQuantity = "2";
const rawDiscount = "10000";
const vatPercent = 8;
const rawCashGiven = "100000";

const itemPrice = Number(rawItemPrice);
const quantity = Number(rawQuantity);
const discount = Number(rawDiscount);
const cashGiven = Number(rawCashGiven);

const subtotal = itemPrice * quantity;
const discountedSubtotal = subtotal - discount;
const vatAmount = discountedSubtotal * (vatPercent / 100);
const totalDue = discountedSubtotal + vatAmount;
const changeAmount = cashGiven - totalDue;

console.log(`
================ HÓA ĐƠN BÁN LẺ ================
Cửa hàng: ${storeName}
Thu ngân: ${cashierName}
Sản phẩm: ${itemName} (x${quantity})
Tiền hàng: ${subtotal} VND
Giảm giá khuyến mãi: ${discount} VND
Tiền sau giảm giá: ${discountedSubtotal} VND
Thuế VAT (${vatPercent}%): ${vatAmount} VND
------------------------------------------------
TỔNG TIỀN PHẢI TRẢ: ${totalDue} VND
Tiền khách đưa: ${cashGiven} VND
TIỀN THỐI LẠI: ${changeAmount} VND
================================================
`);