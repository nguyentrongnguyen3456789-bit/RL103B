
// Kiem tra du lieu thiet bi
const validateDevice = (newDev) => {
  if (!newDev.name || !newDev.room || newDev.powerWatts <= 0) {
    return false;
  }
  return true;
};

// Them thiet bi moi
const createDevice = (list, newDev) => {
  if (!validateDevice(newDev)) {
    console.log("Du lieu thiet bi khong hop le!");
    return false;
  }

  const newId = "DEV_" + String(list.length + 1).padStart(3, "0");

  const device = {
    id: newId,
    name: newDev.name,
    room: newDev.room,
    powerWatts: newDev.powerWatts,
    isActive: newDev.isActive ?? false
  };

  list.push(device);
  return device;
};

// Xem thiet bi theo phong
const readDevicesByRoom = (list, roomName) => {
  return list.filter(device => device.room === roomName);
};

// Cap nhat thiet bi
const updateDevice = (list, id, updateData) => {
  const device = list.find(item => item.id === id);

  if (!device) {
    return false;
  }

  if (updateData.name !== undefined) {
    device.name = updateData.name;
  }

  if (updateData.room !== undefined) {
    device.room = updateData.room;
  }

  if (updateData.powerWatts !== undefined) {
    if (updateData.powerWatts <= 0) {
      console.log("Cong suat phai lon hon 0!");
      return false;
    }
    device.powerWatts = updateData.powerWatts;
  }

  if (updateData.isActive !== undefined) {
    device.isActive = updateData.isActive;
  }

  return true;
};

// Xoa thiet bi theo ID
const deleteDevice = (list, id) => {
  const index = list.findIndex(device => device.id === id);

  if (index === -1) {
    return false;
  }

  list.splice(index, 1);
  return true;
};

// Du lieu ban dau
const devices = [
  {
    id: "DEV_001",
    name: "Dieu hoa",
    room: "Phong khach",
    powerWatts: 1500,
    isActive: true
  },
  {
    id: "DEV_002",
    name: "Den ngu",
    room: "Phong ngu",
    powerWatts: 10,
    isActive: true
  }
];

// Kiem thu createDevice
console.log("1. THEM THIET BI");
console.log(createDevice(devices, {
  name: "Quat dien",
  room: "Phong khach",
  powerWatts: 50,
  isActive: false
}));

console.log("Them du lieu sai:");
console.log(createDevice(devices, {
  name: "",
  room: "Phong ngu",
  powerWatts: 0
}));

// Kiem thu readDevicesByRoom
console.log("\n2. XEM THIET BI PHONG KHACH");
console.log(readDevicesByRoom(devices, "Phong khach"));

// Kiem thu updateDevice
console.log("\n3. CAP NHAT THIET BI");
console.log("Tat dieu hoa:", updateDevice(devices, "DEV_001", {
  isActive: false
}));
console.log("Dat cong suat den ngu ve 0:", updateDevice(devices, "DEV_002", {
  powerWatts: 0
}));

// Kiem thu ID khong ton tai
console.log("Cap nhat ID sai:", updateDevice(devices, "DEV_999", {
  isActive: true
}));

// Kiem thu deleteDevice
console.log("\n4. XOA THIET BI");
console.log("Xoa DEV_003:", deleteDevice(devices, "DEV_003"));
console.log("Xoa ID khong ton tai:", deleteDevice(devices, "DEV_999"));

// Danh sach cuoi cung
console.log("\n5. DANH SACH THIET BI CUOI CUNG");
console.table(devices);
