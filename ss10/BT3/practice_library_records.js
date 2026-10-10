
// 1. Khoi tao danh sach phieu muon
const borrowRecords = [
  {
    recordId: "PM01",
    studentId: "SV101",
    bookTitle: "Lap trinh JavaScript",
    borrowDays: 10,
    isReturned: false
  },
  {
    recordId: "PM02",
    studentId: "SV102",
    bookTitle: "Lap trinh Python",
    borrowDays: 16,
    isReturned: false
  },
  {
    recordId: "PM03",
    studentId: "SV103",
    bookTitle: "Cau truc du lieu",
    borrowDays: 12,
    isReturned: false
  }
];

console.log("===== 1. DANH SACH PHIEU MUON BAN DAU =====");

for (let i = 0; i < borrowRecords.length; i++) {
  console.log(
    borrowRecords[i].recordId + " | " +
    borrowRecords[i].studentId + " | " +
    borrowRecords[i].bookTitle + " | " +
    borrowRecords[i].borrowDays + " ngay | " +
    borrowRecords[i].isReturned
  );
}

// 2. Them phieu muon moi PM04
console.log("\n===== 2. THEM PHIEU MUON PM04 =====");

borrowRecords.push({
  recordId: "PM04",
  studentId: "SV104",
  bookTitle: "Clean Code",
  borrowDays: 18,
  isReturned: false
});

console.log("Da them phieu PM04.");

// 3. Tinh phi phat qua han
console.log("\n===== 3. KIEM TRA PHI PHAT QUA HAN =====");

let totalFine = 0;

for (let i = 0; i < borrowRecords.length; i++) {
  let fine = 0;

  if (borrowRecords[i].borrowDays > 14) {
    fine = (borrowRecords[i].borrowDays - 14) * 5000;
  }

  totalFine += fine;

  console.log(
    borrowRecords[i].recordId + " | " +
    borrowRecords[i].bookTitle + " | " +
    "So ngay muon: " + borrowRecords[i].borrowDays +
    " | Phi phat: " + fine + " VND"
  );
}

console.log("Tong phi phat:", totalFine, "VND");

// 4. Cap nhat phieu PM01 da tra sach
console.log("\n===== 4. CAP NHAT PHIEU PM01 =====");

for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM01") {
    borrowRecords[i].isReturned = true;
    console.log("PM01 da tra sach.");
    break;
  }
}

// 5. Xoa phieu PM03
console.log("\n===== 5. XOA PHIEU PM03 =====");

for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM03") {
    borrowRecords.splice(i, 1);
    console.log("Da xoa phieu PM03.");
    break;
  }
}

// 6. In bang tong ket cuoi cung
console.log("\n===== 6. BANG TONG KET CUOI CUNG =====");

console.log(
  "Ma phieu | Ma sinh vien | Ten sach | So ngay muon | Da tra"
);

for (let i = 0; i < borrowRecords.length; i++) {
  console.log(
    borrowRecords[i].recordId + " | " +
    borrowRecords[i].studentId + " | " +
    borrowRecords[i].bookTitle + " | " +
    borrowRecords[i].borrowDays + " | " +
    borrowRecords[i].isReturned
  );
}

console.log("So phieu con lai:", borrowRecords.length);
console.log("Tong phi phat phat sinh:", totalFine, "VND");
