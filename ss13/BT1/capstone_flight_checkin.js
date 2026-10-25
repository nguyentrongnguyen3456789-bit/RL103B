
const tickets = [
  {
    pnr: 'ABC123',
    passengerName: 'Nguyen Van An',
    flight: 'VN201',
    seat: '12A',
    ticketClass: 'ECONOMY',
    status: 'BOOKED',
    baggageWeight: 0,
    baggageFee: 0
  },
  {
    pnr: 'DEF456',
    passengerName: 'Tran Thi Mai',
    flight: 'VN202',
    seat: '02B',
    ticketClass: 'BUSINESS',
    status: 'BOOKED',
    baggageWeight: 0,
    baggageFee: 0
  },
  {
    pnr: 'GHI789',
    passengerName: 'Le Van Nam',
    flight: 'VN203',
    seat: '15C',
    ticketClass: 'ECONOMY',
    status: 'BOOKED',
    baggageWeight: 0,
    baggageFee: 0
  }
];

const BAGGAGE_FEE_PER_KG = 50000;

function findTicketByPnr(pnr) {
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].pnr === pnr) {
      return tickets[i];
    }
  }

  return null;
}

function calculateExcessBaggageFee(ticketClass, baggageWeight) {
  let freeWeight;

  if (ticketClass === 'ECONOMY') {
    freeWeight = 20;
  } else if (ticketClass === 'BUSINESS') {
    freeWeight = 30;
  } else {
    return -1;
  }

  if (baggageWeight <= freeWeight) {
    return 0;
  }

  return (baggageWeight - freeWeight) * BAGGAGE_FEE_PER_KG;
}

function listTickets() {
  if (tickets.length === 0) {
    console.log('Danh sach ve trong!');
    return;
  }

  console.log('===== DANH SACH VE MAY BAY =====');

  console.table(
    tickets.map(function(ticket) {
      return {
        PNR: ticket.pnr,
        'Hanh khach': ticket.passengerName,
        'Chuyen bay': ticket.flight,
        'Ghe': ticket.seat,
        'Hang ve': ticket.ticketClass,
        'Trang thai': ticket.status,
        'Hanh ly (kg)': ticket.baggageWeight,
        'Phi hanh ly (VND)': ticket.baggageFee
      };
    })
  );
}

function displayBoardingPass(ticket) {
  console.log('========== BOARDING PASS ==========');
  console.log('Ma dat cho: ' + ticket.pnr);
  console.log('Hanh khach: ' + ticket.passengerName);
  console.log('Chuyen bay: ' + ticket.flight);
  console.log('So ghe: ' + ticket.seat);
  console.log('Hang ve: ' + ticket.ticketClass);
  console.log('Hanh ly ky gui: ' + ticket.baggageWeight + ' kg');
  console.log(
    'Phi qua can: ' +
    ticket.baggageFee.toLocaleString('vi-VN') +
    ' VND'
  );
  console.log('Trang thai: ' + ticket.status);
  console.log('===================================');
}

function checkIn() {
  let pnr = prompt('Nhap ma PNR (6 ky tu): ');

  if (pnr === null) {
    console.log('Da huy thao tac check-in.');
    return;
  }

  pnr = pnr.trim().toUpperCase();

  if (!/^[A-Z0-9]{6}$/.test(pnr)) {
    console.log('Ma PNR khong hop le! PNR phai gom 6 chu cai hoac chu so.');
    return;
  }

  const ticket = findTicketByPnr(pnr);

  if (ticket === null) {
    console.log('Khong tim thay ve!');
    return;
  }

  if (ticket.status !== 'BOOKED') {
    console.log('Khong the check-in! Trang thai ve: ' + ticket.status);
    return;
  }

  let baggageInput = prompt('Nhap can nang hanh ly (kg): ');

  if (baggageInput === null || baggageInput.trim() === '') {
    console.log('Da huy thao tac check-in.');
    return;
  }

  let baggageWeight = Number(baggageInput);

  if (!Number.isFinite(baggageWeight) || baggageWeight < 0) {
    console.log('Can nang khong hop le! Vui long nhap so kg khong am.');
    return;
  }

  let baggageFee = calculateExcessBaggageFee(
    ticket.ticketClass,
    baggageWeight
  );

  if (baggageFee < 0) {
    console.log('Hang ve khong hop le!');
    return;
  }

  ticket.baggageWeight = baggageWeight;
  ticket.baggageFee = baggageFee;
  ticket.status = 'CHECKED_IN';

  console.log('Check-in thanh cong!');
  console.log(
    'Phi hanh ly: ' + baggageFee.toLocaleString('vi-VN') + ' VND'
  );

  displayBoardingPass(ticket);
}

function searchTicket() {
  let keyword = prompt('Nhap ma PNR hoac ten hanh khach: ');

  if (keyword === null || keyword.trim() === '') {
    console.log('Thong tin tim kiem khong hop le!');
    return;
  }

  keyword = keyword.trim().toUpperCase();

  let found = false;

  for (let i = 0; i < tickets.length; i++) {
    if (
      tickets[i].pnr === keyword ||
      tickets[i].passengerName.toUpperCase().includes(keyword)
    ) {
      displayBoardingPass(tickets[i]);
      found = true;
    }
  }

  if (found === false) {
    console.log('Khong tim thay ve phu hop!');
  }
}

function cancelTicket() {
  let pnr = prompt('Nhap ma PNR can huy: ');

  if (pnr === null) {
    console.log('Da huy thao tac.');
    return;
  }

  pnr = pnr.trim().toUpperCase();

  if (!/^[A-Z0-9]{6}$/.test(pnr)) {
    console.log('Ma PNR khong hop le!');
    return;
  }

  const ticket = findTicketByPnr(pnr);

  if (ticket === null) {
    console.log('Khong tim thay ve!');
    return;
  }

  if (ticket.status === 'CANCELLED') {
    console.log('Ve nay da duoc huy truoc do!');
    return;
  }

  ticket.status = 'CANCELLED';

  console.log('Huy ve thanh cong!');
  console.log('Ma PNR: ' + ticket.pnr);
  console.log('Trang thai moi: ' + ticket.status);
}

function main() {
  let menuChoice;

  do {
    console.log('\n===== HE THONG CHECK-IN MAY BAY =====');
    console.log('1. Xem danh sach ve');
    console.log('2. Check-in hanh khach va tinh phi hanh ly');
    console.log('3. Tra cuu ve theo PNR hoac ten');
    console.log('4. Huy ve');
    console.log('5. Thoat chuong trinh');

    menuChoice = prompt('Nhap lua chon (1-5): ');

    if (menuChoice === null) {
      menuChoice = '5';
    } else {
      menuChoice = menuChoice.trim();
    }

    switch (menuChoice) {
      case '1':
        listTickets();
        break;

      case '2':
        checkIn();
        break;

      case '3':
        searchTicket();
        break;

      case '4':
        cancelTicket();
        break;

      case '5':
        console.log('Ket thuc ca lam viec!');
        break;

      default:
        console.log('Lua chon khong hop le! Vui long chon tu 1 den 5.');
    }
  } while (menuChoice !== '5');
}

main();
