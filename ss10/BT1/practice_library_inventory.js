
// Khoi tao danh sach sach trong thu vien
const books = [
  {
    bookCode: "B01",
    title: "Lap trinh JavaScript",
    category: "Cong nghe thong tin",
    price: 120000,
    totalCopies: 10,
    availableCopies: 1,
    shelfLocation: "A01"
  },
  {
    bookCode: "B02",
    title: "Lap trinh Python",
    category: "Cong nghe thong tin",
    price: 150000,
    totalCopies: 8,
    availableCopies: 5,
    shelfLocation: "A02"
  },
  {
    bookCode: "B03",
    title: "Tin hoc dai cuong",
    category: "Giao duc",
    price: 90000,
    totalCopies: 5,
    availableCopies: 3,
    shelfLocation: "B01"
  }
];

// Ham hien thi bang kiem ke
function displayBooks() {
  console.log("\n+--------------------------------------------------------------------------+");
  console.log("|                         BANG KIEM KE THU VIEN                            |");
  console.log("+----------+------------------------+------------+----------+--------------+");
  console.log("| Ma sach  | Ten sach               | Gia sach   | Tong SL  | Con tren ke  |");
  console.log("+----------+------------------------+------------+----------+--------------+");

  for (let i = 0; i < books.length; i++) {
    console.log(
      "| " + books[i].bookCode.padEnd(8) +
      " | " + books[i].title.padEnd(22) +
      " | " + String(books[i].price).padEnd(10) +
      " | " + String(books[i].totalCopies).padEnd(8) +
      " | " + String(books[i].availableCopies).padEnd(12) + " |"
    );
  }

  console.log("+--------------------------------------------------------------------------+");
}

// 1. Nhap sach moi vao kho
const newBook = {
  bookCode: "B04",
  title: "Co so du lieu",
  category: "Cong nghe thong tin",
  price: 180000,
  totalCopies: 6,
  availableCopies: 6,
  shelfLocation: "A03"
};

books.push(newBook);

console.log("1. SAU KHI NHAP SACH MOI");
displayBooks();

// 2. Xu ly muon sach B01
console.log("\n2. XU LY MUON SACH B01");

let found = false;

for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B01") {
    found = true;

    if (books[i].availableCopies > 0) {
      books[i].availableCopies--;

      console.log("Muon sach thanh cong.");

      if (books[i].availableCopies === 0) {
        console.log("Trang thai: HET SACH TREN KE");
      }
    } else {
      console.log("Khong the muon, sach da het tren ke.");
    }

    break;
  }
}

if (found === false) {
  console.log("Khong tim thay sach B01.");
}

displayBooks();

// 3. Thanh ly sach hong B03
console.log("\n3. THANH LY SACH HONG B03");

for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B03") {
    books.splice(i, 1);
    console.log("Da thanh ly sach B03.");
    break;
  }
}

displayBooks();

// 4. Kiem ke tong so luong va gia tri tai san
let totalBookCopies = 0;
let totalAssetValue = 0;

for (let i = 0; i < books.length; i++) {
  totalBookCopies += books[i].totalCopies;
  totalAssetValue += books[i].totalCopies * books[i].price;
}

console.log("\n4. TONG KET KHO THU VIEN");
console.log("So dau sach hien co:", books.length);
console.log("Tong so cuon sach:", totalBookCopies);
console.log("Tong gia tri tai san:", totalAssetValue.toLocaleString("vi-VN"), "VND");
