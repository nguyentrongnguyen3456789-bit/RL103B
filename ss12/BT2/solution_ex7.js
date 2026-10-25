
const readline = require('readline-sync');

let subscriptions = [
  {
    subscriptionId: 'SUB_001',
    customerName: 'Nguyen Van An',
    planTier: 'PERSONAL',
    deviceLimit: 1
  },
  {
    subscriptionId: 'SUB_002',
    customerName: 'Tran Thi Mai',
    planTier: 'FAMILY',
    deviceLimit: 5
  },
  {
    subscriptionId: 'SUB_003',
    customerName: 'Le Van Nam',
    planTier: 'PERSONAL',
    deviceLimit: 1
  }
];

function addSubscription() {
  let customerName = readline.question('Nhap ten khach hang: ');
  let planTier;

  do {
    console.log('1. PERSONAL');
    console.log('2. FAMILY');
    let choice = readline.question('Chon goi cuoc: ');

    if (choice === '1') {
      planTier = 'PERSONAL';
    } else if (choice === '2') {
      planTier = 'FAMILY';
    } else {
      console.log('Lua chon khong hop le!');
    }
  } while (planTier === undefined);

  let subscriptionId = 'SUB_' + String(subscriptions.length + 1).padStart(3, '0');

  const newSubscription = {
    subscriptionId: subscriptionId,
    customerName: customerName,
    planTier: planTier,
    deviceLimit: planTier === 'FAMILY' ? 5 : 1
  };

  subscriptions.push(newSubscription);

  console.log('Them thue bao thanh cong!');
  console.log('Ma thue bao:', subscriptionId);
}

function listSubscriptions() {
  if (subscriptions.length === 0) {
    console.log('Danh sach thue bao trong!');
    return;
  }

  console.log('\n========== DANH SACH THUE BAO ==========');
  console.log(
    'Ma thue bao'.padEnd(15) +
    'Ten khach hang'.padEnd(25) +
    'Goi cuoc'.padEnd(15) +
    'So thiet bi'
  );
  console.log('-'.repeat(65));

  for (let i = 0; i < subscriptions.length; i++) {
    const sub = subscriptions[i];

    console.log(
      sub.subscriptionId.padEnd(15) +
      sub.customerName.padEnd(25) +
      sub.planTier.padEnd(15) +
      sub.deviceLimit
    );
  }
}

function updateSubscription() {
  let subscriptionId = readline.question('Nhap ma thue bao can cap nhat: ');
  let found = false;

  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].subscriptionId === subscriptionId) {
      found = true;

      console.log('1. PERSONAL - 1 thiet bi');
      console.log('2. FAMILY - 5 thiet bi');

      let choice = readline.question('Chon goi cuoc moi: ');

      if (choice === '1') {
        subscriptions[i].planTier = 'PERSONAL';
        subscriptions[i].deviceLimit = 1;
      } else if (choice === '2') {
        subscriptions[i].planTier = 'FAMILY';
        subscriptions[i].deviceLimit = 5;
      } else {
        console.log('Lua chon khong hop le!');
        return;
      }

      console.log('Cap nhat thue bao thanh cong!');
      break;
    }
  }

  if (found === false) {
    console.log('Khong tim thay ma thue bao!');
  }
}

function deleteSubscription() {
  let subscriptionId = readline.question('Nhap ma thue bao can huy: ');
  let found = false;

  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].subscriptionId === subscriptionId) {
      subscriptions.splice(i, 1);
      found = true;
      console.log('Huy thue bao thanh cong!');
      break;
    }
  }

  if (found === false) {
    console.log('Khong tim thay ma thue bao!');
  }
}

let menuChoice;

do {
  console.log('\n========== RIKKEISTREAM ==========');
  console.log('1. Them thue bao moi');
  console.log('2. Xem danh sach thue bao');
  console.log('3. Cap nhat goi cuoc');
  console.log('4. Huy thue bao');
  console.log('5. Thoat chuong trinh');

  menuChoice = readline.question('Nhap lua chon (1-5): ');

  switch (menuChoice) {
    case '1':
      addSubscription();
      break;

    case '2':
      listSubscriptions();
      break;

    case '3':
      updateSubscription();
      break;

    case '4':
      deleteSubscription();
      break;

    case '5':
      console.log('Da thoat chuong trinh!');
      break;

    default:
      console.log('Lua chon khong hop le! Vui long chon tu 1 den 5.');
  }
} while (menuChoice !== '5');
