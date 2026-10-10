
// Tim thiet bi theo ID
const findDeviceById = (devices, targetId) => {
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].id === targetId) {
      return devices[i];
    }
  }

  return null;
};

// Cap nhat thong tin thiet bi
const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);

  if (targetDevice === null) {
    return false;
  }

  // Kiem tra khac undefined de khong bo qua gia tri Falsy
  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};

// Danh sach thiet bi
const devices = [
  {
    id: "D01",
    name: "Dieu hoa phong khach",
    isActive: true,
    powerWatts: 1500
  },
  {
    id: "D02",
    name: "Den ngu",
    isActive: true,
    powerWatts: 10
  }
];

// Tat dieu hoa
console.log("Cap nhat dieu hoa:");
console.log(updateDevice(devices, "D01", {
  isActive: false
}));

// Dua cong suat den ngu ve 0W
console.log("Cap nhat den ngu:");
console.log(updateDevice(devices, "D02", {
  powerWatts: 0
}));

// Hien thi ket qua
console.log("\nDanh sach thiet bi sau khi cap nhat:");

for (let i = 0; i < devices.length; i++) {
  console.log(
    "ID:", devices[i].id,
    "| Ten:", devices[i].name,
    "| Dang hoat dong:", devices[i].isActive,
    "| Cong suat:", devices[i].powerWatts, "W"
  );
}
