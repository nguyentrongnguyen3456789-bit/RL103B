const waitingQueue = ['30A-111', '29B-222', '51C-333'];

console.log('Hàng đợi ban đầu:', waitingQueue);

// Thêm xe mới vào cuối hàng đợi bằng push().
console.log('Trước khi thêm xe mới:', waitingQueue);
waitingQueue.push('43D-444');
console.log('Sau khi thêm xe mới:', waitingQueue);

// Chèn xe ưu tiên vào vị trí chỉ số 1 bằng splice().
console.log('Trước khi chèn xe ưu tiên:', waitingQueue);
waitingQueue.splice(1, 0, '14A-999');
console.log('Sau khi thêm xe ưu tiên:', waitingQueue);

// Dùng includes() và indexOf() để kiểm tra xe ưu tiên trong hàng đợi.
const priorityVehicle = '14A-999';
console.log('Có xe ưu tiên trong hàng đợi:', waitingQueue.includes(priorityVehicle));
console.log('Vị trí xe ưu tiên:', waitingQueue.indexOf(priorityVehicle));

// Lấy xe đầu tiên vào cổng sạc bằng shift().
console.log('Trước khi xe vào sạc:', waitingQueue);
const chargingVehicle = waitingQueue.shift();
console.log('Xe vào sạc:', chargingVehicle);
console.log('Hàng đợi sau khi xe vào sạc:', waitingQueue);

// Cộng điện năng tiêu thụ của từng phiên sạc trong ca trực.
const chargingKwh = [30, 45, 25];
const chargingRate = 4500;

let totalKwh = 0;

for (let i = 0; i < chargingKwh.length; i++) {
    totalKwh += chargingKwh[i];
}

const totalRevenue = totalKwh * chargingRate;

console.log('Tổng điện năng tiêu thụ:', totalKwh, 'kWh');
console.log('Tổng doanh thu ca trực:', totalRevenue, 'VNĐ');
