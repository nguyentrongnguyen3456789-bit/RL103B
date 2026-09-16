"use strict";

const rawItemPrice = "45000";
const rawItemQuantity = "2";
const rawBaseDeliveryFee = "16000";
const rawDeliveryDistance = "3.2";
const comboDiscountPercent = 10;

const itemPrice = Number(rawItemPrice);
const itemQuantity = Number(rawItemQuantity);
const baseDeliveryFee = Number(rawBaseDeliveryFee);
const deliveryDistance = Number(rawDeliveryDistance);

const rawSubtotal = itemPrice * itemQuantity;
const discountAmount = (rawSubtotal * comboDiscountPercent) / 100;
const foodTotalAfterDiscount = rawSubtotal - discountAmount;

const deliveryFee = baseDeliveryFee + deliveryDistance * 4000;

const finalPayment = foodTotalAfterDiscount + deliveryFee;

console.log(`Tiền món sau giảm: ${foodTotalAfterDiscount} VND`);
console.log(`Phí giao hàng: ${deliveryFee} VND`);
console.log(`Tổng thanh toán: ${finalPayment} VND`);