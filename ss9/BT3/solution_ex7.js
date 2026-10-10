
// Khoi tao danh sach phong
const rooms = [
  {
    roomId: "P101",
    roomType: "Deluxe",
    pricePerNight: 1500000,
    status: "VACANT"
  },
  {
    roomId: "P102",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "VACANT"
  },
  {
    roomId: "P103",
    roomType: "Superior",
    pricePerNight: 1200000,
    status: "VACANT"
  }
];

// Ham hien thi danh sach phong
function displayRooms() {
  console.log("\n--- DANH SACH PHONG KHACH SAN ---");
  console.log("Ma phong | Loai phong | Gia moi dem | Trang thai");

  for (let i = 0; i < rooms.length; i++) {
    console.log(
      rooms[i].roomId + " | " +
      rooms[i].roomType + " | " +
      rooms[i].pricePerNight + " VND | " +
      rooms[i].status
    );
  }
}

// Read: Tim phong theo ma phong
function findRoom(roomId) {
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === roomId) {
      return rooms[i];
    }
  }

  return null;
}

// Create: Them phong P104
console.log("1. DANH SACH BAN DAU");
displayRooms();

const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT"
};

rooms.push(newRoom);

console.log("\n2. SAU KHI THEM PHONG P104");
displayRooms();

// Read: Tim phong P101
console.log("\n3. TIM PHONG P101");
const room = findRoom("P101");

if (room !== null) {
  console.log("Ma phong:", room.roomId);
  console.log("Loai phong:", room.roomType);
  console.log("Gia moi dem:", room.pricePerNight, "VND");
  console.log("Trang thai:", room.status);
} else {
  console.log("Khong tim thay phong");
}

// Update: Khach check-in phong P101
console.log("\n4. CAP NHAT TRANG THAI PHONG P101");
const checkInRoom = findRoom("P101");

if (checkInRoom !== null) {
  checkInRoom.status = "OCCUPIED";
  console.log("Da cap nhat trang thai phong P101");
} else {
  console.log("Khong tim thay phong P101");
}

displayRooms();

// Delete: Xoa phong P103
console.log("\n5. XOA PHONG P103");

for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P103") {
    rooms.splice(i, 1);
    console.log("Da xoa phong P103");
    break;
  }
}

displayRooms();
