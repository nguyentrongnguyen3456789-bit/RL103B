
// Danh sach ma sinh vien hop le
const students = ["SV001", "SV002", "SV003"];

// Nhat ky muon tra sach
const circulationLogs = [
  {
    logId: "L001",
    studentCode: "SV001",
    bookIsbn: "ISBN001",
    status: "BORROWING",
    fineAmount: 0,
    borrowDate: "2026-10-01",
    dueDate: "2026-10-05",
    returnDate: null,
    paid: false,
    renewed: false
  },
  {
    logId: "L002",
    studentCode: "SV002",
    bookIsbn: "ISBN002",
    status: "BORROWING",
    fineAmount: 0,
    borrowDate: "2026-10-02",
    dueDate: "2026-10-06",
    returnDate: null,
    paid: false,
    renewed: false
  }
];

// 1. Muon sach moi
function borrowBook(studentCode, bookIsbn, logId, dueDate) {
  const student = students.find(function(code) {
    return code === studentCode;
  });

  if (student === undefined) {
    console.log("Ma sinh vien khong hop le.");
    return;
  }

  const newLog = {
    logId: logId,
    studentCode: studentCode,
    bookIsbn: bookIsbn,
    status: "BORROWING",
    fineAmount: 0,
    borrowDate: "2026-10-10",
    dueDate: dueDate,
    returnDate: null,
    paid: false,
    renewed: false
  };

  circulationLogs.push(newLog);
  console.log("Muon sach thanh cong:", logId);
}

// 2. Gia han sach
function renewBook(logId, newDueDate) {
  const log = circulationLogs.find(function(item) {
    return item.logId === logId;
  });

  if (log !== undefined && log.status === "BORROWING") {
    if (log.renewed === false) {
      log.dueDate = newDueDate;
      log.renewed = true;
      console.log("Gia han sach thanh cong:", logId);
    } else {
      console.log("Giao dich nay da gia han truoc do.");
    }
  } else {
    console.log("Khong tim thay giao dich dang muon.");
  }
}

// 3. Tra sach hoac bao mat sach
function returnBook(logId, returnDate, isLost) {
  const log = circulationLogs.find(function(item) {
    return item.logId === logId;
  });

  if (log === undefined || log.status !== "BORROWING") {
    console.log("Khong tim thay giao dich dang muon.");
    return;
  }

  log.returnDate = returnDate;

  if (isLost === true) {
    log.status = "LOST";
    log.fineAmount = 200000;
  } else {
    log.status = "RETURNED";

    const due = new Date(log.dueDate);
    const returned = new Date(returnDate);

    const lateDays = Math.floor(
      (returned - due) / (1000 * 60 * 60 * 24)
    );

    if (lateDays > 0) {
      log.fineAmount = lateDays * 5000;
    } else {
      log.fineAmount = 0;
    }
  }

  console.log("Da cap nhat giao dich:", logId);
  console.log("Tien phat:", log.fineAmount, "VND");
}

// 4. Thanh toan tien phat
function payFine(logId) {
  const log = circulationLogs.find(function(item) {
    return item.logId === logId;
  });

  if (log !== undefined && log.status !== "BORROWING") {
    log.paid = true;
    console.log("Da quyet toan tien phat:", logId);
  } else {
    console.log("Giao dich chua the quyet toan.");
  }
}

// 5. Xoa nhat ky da hoan tat va qua 30 ngay
function deleteOldLogs(currentDate) {
  const today = new Date(currentDate);

  for (let i = circulationLogs.length - 1; i >= 0; i--) {
    const log = circulationLogs[i];

    if (
      log.status !== "BORROWING" &&
      log.paid === true &&
      log.returnDate !== null
    ) {
      const returned = new Date(log.returnDate);
      const daysPassed = Math.floor(
        (today - returned) / (1000 * 60 * 60 * 24)
      );

      if (daysPassed > 30) {
        circulationLogs.splice(i, 1);
        console.log("Da xoa nhat ky:", log.logId);
      }
    }
  }
}

// 6. Bao cao cuoi ngay
function showReport() {
  let borrowingCount = 0;
  let totalFine = 0;

  console.log("\n========== BAO CAO MUON TRA SACH ==========");

  for (let i = 0; i < circulationLogs.length; i++) {
    const log = circulationLogs[i];

    console.log(
      log.logId + " | " +
      log.studentCode + " | " +
      log.bookIsbn + " | " +
      log.status + " | " +
      log.fineAmount + " VND"
    );

    if (log.status === "BORROWING") {
      borrowingCount++;
    }

    if (log.paid === true) {
      totalFine += log.fineAmount;
    }
  }

  console.log("-------------------------------------------");
  console.log("So giao dich dang muon:", borrowingCount);
  console.log("Tong tien phat da thu:", totalFine, "VND");
  console.log("===========================================");
}

// MO PHONG MOT NGAY LAM VIEC

console.log("1. MUON SACH MOI");
borrowBook("SV003", "ISBN003", "L003", "2026-10-12");

console.log("\n2. GIA HAN SACH");
renewBook("L001", "2026-10-12");

console.log("\n3. TRA SACH");
returnBook("L002", "2026-10-10", false);

console.log("\n4. QUYET TOAN TIEN PHAT");
payFine("L002");

console.log("\n5. DON DEP NHAT KY CU");
deleteOldLogs("2026-10-10");

console.log("\n6. BAO CAO CUOI NGAY");
showReport();
