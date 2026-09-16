"use strict";

const partyHost = "Huynh Thi Anh Hong";
const venueCost = 1500000;
const foodCostPerGuest = 180000;
const guestCount = 10;
const drinkCost = 800000;
const decorCost = 1200000;
const targetBudget = 6000000;

const foodTotal = foodCostPerGuest * guestCount;
const totalPartyCost = venueCost + foodTotal + drinkCost + decorCost;
const costPerGuest = totalPartyCost / guestCount;
const budgetVariance = targetBudget - totalPartyCost;

console.log(`
================ DỰ TOÁN NGÂN SÁCH TIỆC SINH NHẬT ================
Chủ nhân bữa tiệc: ${partyHost}

Chi phí thuê địa điểm: ${venueCost.toLocaleString("vi-VN")} VND
Chi phí đồ ăn: ${foodTotal.toLocaleString("vi-VN")} VND
Chi phí đồ uống: ${drinkCost.toLocaleString("vi-VN")} VND
Chi phí trang trí & bánh kem: ${decorCost.toLocaleString("vi-VN")} VND
----------------------------------------------------------------------

TỔNG CHI PHÍ TIỆC: ${totalPartyCost.toLocaleString("vi-VN")} VND
CHI PHÍ BÌNH QUÂN/KHÁCH: ${costPerGuest.toLocaleString("vi-VN")} VND
NGÂN SÁCH DỰ KIẾN: ${targetBudget.toLocaleString("vi-VN")} VND
CHÊNH LỆCH NGÂN SÁCH: ${budgetVariance.toLocaleString("vi-VN")} VND
===================================================================

`);
