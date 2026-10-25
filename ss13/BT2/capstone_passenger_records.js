
const passengers = [
  {
    pnrCode: 'ABC123',
    passengerName: 'Nguyen Van An',
    idNumber: '079123456789',
    flightNumber: 'VN201',
    seatNumber: '',
    isCheckedIn: false
  },
  {
    pnrCode: 'DEF456',
    passengerName: 'Tran Thi Mai',
    idNumber: 'B1234567',
    flightNumber: 'VN202',
    seatNumber: '',
    isCheckedIn: false
  }
];

const seatList = [
  '12A', '12B', '12C',
  '13A', '13B', '13C',
  '14A', '14B', '14C'
];

const flightList = ['VN201', 'VN202', 'VN203'];

function findPassengerByPnr(pnrCode) {
  for (let i = 0; i < passengers.length; i++) {
    if (passengers[i].pnrCode === pnrCode) {
      return passengers[i];
    }
  }

  return null;
}

function isValidIdNumber(idNumber) {
  const cccdPattern = /^[0-9]{12}$/;
  const passportPattern = /^[A-Za-z][0-9]{7,8}$/;

  return cccdPattern.test(idNumber) ||
         passportPattern.test(idNumber);
}

function isValidFlight(flightNumber) {
  return flightList.includes(flightNumber);
}

function isDuplicatePnr(pnrCode) {
  return findPassengerByPnr(pnrCode) !== null;
}

function isSeatTaken(flightNumber, seatNumber) {
  for (let i = 0; i < passengers.length; i++) {
    if (
      passengers[i].flightNumber === flightNumber &&
      passengers[i].seatNumber === seatNumber &&
      passengers[i].isCheckedIn === true
    ) {
      return true;
    }
  }

  return false;
}

function assignSeat(flightNumber) {
  for (let i = 0; i < seatList.length; i++) {
    if (!isSeatTaken(flightNumber, seatList[i])) {
      return seatList[i];
    }
  }

  return null;
}

function addPassenger() {
  let pnrCode = prompt('Nhap ma PNR: ');

  if (pnrCode === null) {
    return;
  }

  pnrCode = pnrCode.trim().toUpperCase();

  if (!/^[A-Z0-9]{6}$/.test(pnrCode)) {
    console.log('Loi: PNR phai gom 6 chu cai hoac chu so.');
    return;
  }

  if (isDuplicatePnr(pnrCode)) {
    console.log('Loi: Ma PNR da ton tai.');
    return;
  }

  let passengerName = prompt('Nhap ho ten hanh khach: ');

  if (passengerName === null || passengerName.trim() === '') {
    console.log('Loi: Ho ten khong duoc de trong.');
    return;
  }

  passengerName = passengerName.trim();

  let idNumber = prompt('Nhap CCCD hoac ho chieu: ');

  if (idNumber === null) {
    return;
  }

  idNumber = idNumber.trim().toUpperCase();

  if (!isValidIdNumber(idNumber)) {
    console.log('Loi: CCCD hoac ho chieu khong dung dinh dang.');
    return;
  }

  let flightNumber = prompt('Nhap ma chuyen bay (VN201, VN202, VN203): ');

  if (flightNumber === null) {
    return;
  }

  flightNumber = flightNumber.trim().toUpperCase();

  if (!isValidFlight(flightNumber)) {
    console.log('Loi: Chuyen bay khong ton tai.');
    return;
  }

  const newPassenger = {
    pnrCode: pnrCode,
    passengerName: passengerName,
    idNumber: idNumber,
    flightNumber: flightNumber,
    seatNumber: '',
    isCheckedIn: false
  };

  passengers.push(newPassenger);

  console.log('Tiep nhan ho so thanh cong!');
}

function listPassengers() {
  if (passengers.length === 0) {
    console.log('Chua co ho so hanh khach.');
    return;
  }

  console.table(
    passengers.map(function(passenger) {
      return {
        PNR: passenger.pnrCode,
        'Ho ten': passenger.passengerName,
        'Giay to': passenger.idNumber,
        'Chuyen bay': passenger.flightNumber,
        'So ghe': passenger.seatNumber || 'Chua cap',
        'Check-in': passenger.isCheckedIn ? 'Da check-in' : 'Chua check-in'
      };
    })
  );
}

function displayBoardingPass(passenger) {
  console.log('========================================');
  console.log('           BOARDING PASS                 ');
  console.log('========================================');
  console.log('PASSENGER : ' + passenger.passengerName);
  console.log('PNR CODE  : ' + passenger.pnrCode);
  console.log('FLIGHT    : ' + passenger.flightNumber);
  console.log('SEAT      : ' + passenger.seatNumber);
  console.log('ID NUMBER : ' + passenger.idNumber);
  console.log('STATUS    : CHECKED IN');
  console.log('----------------------------------------');
  console.log('||| || ||| | || |||| | ||| || |||');
  console.log('========================================');
}

function checkInPassenger() {
  let pnrCode = prompt('Nhap PNR can check-in: ');

  if (pnrCode === null) {
    return;
  }

  pnrCode = pnrCode.trim().toUpperCase();

  if (!/^[A-Z0-9]{6}$/.test(pnrCode)) {
    console.log('Loi: Ma PNR khong hop le.');
    return;
  }

  const passenger = findPassengerByPnr(pnrCode);

  if (passenger === null) {
    console.log('Loi: Khong tim thay ho so hanh khach.');
    return;
  }

  if (!isValidIdNumber(passenger.idNumber)) {
    console.log('Loi: Giay to tuy than khong hop le.');
    return;
  }

  if (!isValidFlight(passenger.flightNumber)) {
    console.log('Loi: Khong xac nhan duoc chuyen bay.');
    return;
  }

  if (passenger.isCheckedIn) {
    console.log('Hanh khach da check-in truoc do.');
    return;
  }

  const seatNumber = assignSeat(passenger.flightNumber);

  if (seatNumber === null) {
    console.log('Loi: Chuyen bay da het ghe trong kho.');
    return;
  }

  passenger.seatNumber = seatNumber;
  passenger.isCheckedIn = true;

  console.log('Xac thuc ho so thanh cong!');
  console.log('Giay to: ' + passenger.idNumber);
  console.log('Chuyen bay: ' + passenger.flightNumber);
  console.log('So ghe duoc cap: ' + passenger.seatNumber);

  displayBoardingPass(passenger);
}

function main() {
  let choice;

  do {
    console.log('\n===== QUAN LY HO SO HANH KHACH =====');
    console.log('1. Tiep nhan ho so moi');
    console.log('2. Xem danh sach hanh khach');
    console.log('3. Xac thuc va check-in');
    console.log('4. Thoat');

    choice = prompt('Nhap lua chon (1-4): ');

    if (choice === null) {
      choice = '4';
    } else {
      choice = choice.trim();
    }

    switch (choice) {
      case '1':
        addPassenger();
        break;

      case '2':
        listPassengers();
        break;

      case '3':
        checkInPassenger();
        break;

      case '4':
        console.log('Da thoat chuong trinh.');
        break;

      default:
        console.log('Lua chon khong hop le!');
    }
  } while (choice !== '4');
}

main();
