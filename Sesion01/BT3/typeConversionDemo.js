"use strict";

const testValues = [
{name: "Số nguyên",value: "150000"},
{name: "Số thực",value: "3.75"},
{name: "Chuỗi rỗng",value: ""},
{name: "Chuỗi chứa chữ",value: "100k"},
{name: "null",value: null},
{name: "undefined",value: undefined}
];

console.log("=============== THỰC NGHIỆM ÉP KIỂU ===============");

testValues.forEach((item) => {
const numberResult = Number(item.value);
const unaryPlusResult = +item.value;

console.log(`


Trường hợp: ${item.name}
Giá trị gốc: ${String(item.value)}
typeof gốc: ${typeof item.value}
Number(value): ${numberResult}
typeof Number(value): ${typeof numberResult}
+value: ${unaryPlusResult}
typeof +value: ${typeof unaryPlusResult}
`);
});

console.log("=============== XỬ LÝ CHUỖI CÓ ĐƠN VỊ ===============");

const valueWithUnit = "100k";

const numberWithUnit = Number(valueWithUnit);
const unaryWithUnit = +valueWithUnit;
const parseIntWithUnit = parseInt(valueWithUnit, 10);

console.log(`Giá trị gốc: ${valueWithUnit}
Number(value): ${numberWithUnit}
+value: ${unaryWithUnit}
parseInt(value, 10): ${parseIntWithUnit}`);

console.log("=============== SO SÁNH NHANH ===============");

const subtotal = 50000;
const fee = "20000";

console.log(`subtotal + fee: ${subtotal + fee}
subtotal + +fee: ${subtotal + +fee}
subtotal + Number(fee): ${subtotal + Number(fee)}`);
