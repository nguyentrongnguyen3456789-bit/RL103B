// solution_ex7.js

const appointment1 = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";
const appointment2 = "BS.tran_thi_lan-KHOA_NHI-09:00-PHONG_205";
const appointment3 = "BS.le_hoang_nam-KHOA_NOI_TONG_QUAT-10:30-PHONG_401";

function processAppointment(appointmentCode) {
    // Tách chuỗi thành 4 phần
    const appointmentParts = appointmentCode.split("-");

    // Bác sĩ
    let doctorName = appointmentParts[0];
    doctorName = doctorName.replace("BS.", "");
    doctorName = doctorName.replaceAll("_", " ");
    doctorName = doctorName.toLowerCase();

    // Viết hoa chữ cái đầu từng từ
    const doctorWords = doctorName.split(" ");

    let formattedDoctorName = "";

    for (let i = 0; i < doctorWords.length; i++) {
        const word = doctorWords[i];

        const formattedWord =
            word.slice(0, 1).toUpperCase() +
            word.slice(1).toLowerCase();

        formattedDoctorName += formattedWord;

        if (i < doctorWords.length - 1) {
            formattedDoctorName += " ";
        }
    }

    // Chuyên khoa
    const departmentCode = appointmentParts[1];
    const departmentName = departmentCode
        .replaceAll("_", " ")
        .toLowerCase();

    const departmentWords = departmentName.split(" ");
    let formattedDepartment = "";

    for (let i = 0; i < departmentWords.length; i++) {
        const word = departmentWords[i];

        const formattedWord =
            word.slice(0, 1).toUpperCase() +
            word.slice(1).toLowerCase();

        formattedDepartment += formattedWord;

        if (i < departmentWords.length - 1) {
            formattedDepartment += " ";
        }
    }

    // Giờ khám
    const appointmentTime = appointmentParts[2];

    // Phòng khám
    const roomCode = appointmentParts[3];
    const roomNumber = roomCode.slice(6);
    const roomName = "Phòng " + roomNumber;

    // In bảng phân công
    console.log(`
========================================
        PHÂN CÔNG CA KHÁM
========================================
Bác sĩ      : ${formattedDoctorName}
Chuyên khoa : ${formattedDepartment}
Giờ khám    : ${appointmentTime}
Phòng khám  : ${roomName}
========================================
`);
}

// Kiểm thử 3 dữ liệu
processAppointment(appointment1);
processAppointment(appointment2);
processAppointment(appointment3);