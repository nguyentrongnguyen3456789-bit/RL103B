
const BAGGAGE_FEE_FIRST_5_KG = 60000;
const BAGGAGE_FEE_OVER_5_KG = 80000;
const OVERSIZED_FEE = 200000;
const PET_FEE = 500000;
const MEMBER_EXTRA_WEIGHT = 10;

// Du lieu ve hanh khach
const ticket = {
  pnrCode: 'ABC123',
  passengerName: 'Nguyen Van An',
  flightNumber: 'VN201',
  ticketClass: 'ECONOMY',
  memberTier: 'TITAN'
};

// Danh sach kien hanh ly
const baggageList = [
  {
    baggageId: 'BAG001',
    description: 'Vali quần áo',
    type: 'STANDARD',
    weight: 20
  },
  {
    baggageId: 'BAG002',
    description: 'Gậy golf',
    type: 'OVERSIZED',
    weight: 8
  },
  {
    baggageId: 'BAG003',
    description: 'Lồng thú cưng',
    type: 'PET',
    weight: 2
  }
];

// Tinh han muc hanh ly mien cuoc
function calculateFreeWeight(ticket) {
  let freeWeight = 0;

  if (ticket.ticketClass === 'ECONOMY') {
    freeWeight = 20;
  } else if (ticket.ticketClass === 'BUSINESS') {
    freeWeight = 30;
  } else {
    return -1;
  }

  if (
    ticket.memberTier === 'TITAN' ||
    ticket.memberTier === 'DIAMOND' ||
    ticket.memberTier === 'ELITE'
  ) {
    freeWeight += MEMBER_EXTRA_WEIGHT;
  }

  return freeWeight;
}

// Tinh phi qua can
function calculateExcessFee(excessWeight) {
  if (excessWeight <= 0) {
    return 0;
  }

  if (excessWeight <= 5) {
    return excessWeight * BAGGAGE_FEE_FIRST_5_KG;
  }

  return 5 * BAGGAGE_FEE_FIRST_5_KG +
    (excessWeight - 5) * BAGGAGE_FEE_OVER_5_KG;
}

// Tinh tong phi hanh ly va dich vu dac biet
function calculateBaggageSurcharge(ticket, baggageList) {
  if (!Array.isArray(baggageList)) {
    return null;
  }

  const freeWeight = calculateFreeWeight(ticket);

  if (freeWeight < 0) {
    return null;
  }

  let totalWeight = 0;
  let oversizedCount = 0;
  let petCount = 0;
  let oversizedFee = 0;
  let petFee = 0;

  for (let i = 0; i < baggageList.length; i++) {
    const baggage = baggageList[i];

    if (
      typeof baggage.weight !== 'number' ||
      !Number.isFinite(baggage.weight) ||
      baggage.weight < 0
    ) {
      return null;
    }

    if (
      baggage.type !== 'STANDARD' &&
      baggage.type !== 'OVERSIZED' &&
      baggage.type !== 'PET'
    ) {
      return null;
    }

    totalWeight += baggage.weight;

    if (baggage.type === 'OVERSIZED') {
      oversizedCount++;
      oversizedFee += OVERSIZED_FEE;
    } else if (baggage.type === 'PET') {
      petCount++;
      petFee += PET_FEE;
    }
  }

  const excessWeight = Math.max(0, totalWeight - freeWeight);
  const excessFee = calculateExcessFee(excessWeight);
  const totalSpecialFee = oversizedFee + petFee;
  const totalFee = excessFee + totalSpecialFee;

  return {
    freeWeight: freeWeight,
    totalWeight: totalWeight,
    excessWeight: excessWeight,
    excessFee: excessFee,
    oversizedCount: oversizedCount,
    oversizedFee: oversizedFee,
    petCount: petCount,
    petFee: petFee,
    totalSpecialFee: totalSpecialFee,
    totalFee: totalFee
  };
}

// Dinh dang tien te
function formatMoney(amount) {
  return amount.toLocaleString('vi-VN') + ' VND';
}

// In bien lai thu phi
function printBaggageReceipt(ticket, baggageList, result) {
  if (result === null) {
    console.log('Khong the tinh phi. Vui long kiem tra du lieu!');
    return;
  }

  const line = '='.repeat(60);

  console.log('\n' + line);
  console.log('             BIEN LAI HANH LY KY GUI');
  console.log(line);
  console.log(`Ma PNR       : ${ticket.pnrCode}`);
  console.log(`Hanh khach   : ${ticket.passengerName}`);
  console.log(`Chuyen bay   : ${ticket.flightNumber}`);
  console.log(`Hang ve      : ${ticket.ticketClass}`);
  console.log(`Hoi vien     : ${ticket.memberTier}`);
  console.log('-'.repeat(60));

  console.log(
    'Ten hanh ly'.padEnd(25) +
    'Loai'.padEnd(15) +
    'Kg'.padStart(8)
  );

  console.log('-'.repeat(60));

  for (let i = 0; i < baggageList.length; i++) {
    const baggage = baggageList[i];

    console.log(
      baggage.description.padEnd(25) +
      baggage.type.padEnd(15) +
      String(baggage.weight).padStart(8)
    );
  }

  console.log('-'.repeat(60));
  console.log(
    'Tong trong luong:'.padEnd(35) +
    (result.totalWeight + ' kg').padStart(15)
  );

  console.log(
    'Mien cuoc:'.padEnd(35) +
    (result.freeWeight + ' kg').padStart(15)
  );

  console.log(
    'Vuot han muc:'.padEnd(35) +
    (result.excessWeight + ' kg').padStart(15)
  );

  console.log('-'.repeat(60));
  console.log(
    'Phi qua can:'.padEnd(35) +
    formatMoney(result.excessFee).padStart(25)
  );

  console.log(
    `Phi cong kenh (${result.oversizedCount} kien):`.padEnd(35) +
    formatMoney(result.oversizedFee).padStart(25)
  );

  console.log(
    `Phi thu cung (${result.petCount} long):`.padEnd(35) +
    formatMoney(result.petFee).padStart(25)
  );

  console.log('-'.repeat(60));
  console.log(
    'TONG THANH TOAN:'.padEnd(35) +
    formatMoney(result.totalFee).padStart(25)
  );
  console.log(line);
  console.log('         CAM ON QUY KHACH!');
  console.log(line);
}

// Chay chuong trinh
const result = calculateBaggageSurcharge(ticket, baggageList);

if (result !== null) {
  printBaggageReceipt(ticket, baggageList, result);
} else {
  console.log('Du lieu ve hoac hanh ly khong hop le!');
}
