let bookings = [
    {
        bookingCode: "CIN-001",
        customerName: "Nguyễn Văn An",
        movieTitle: "Ánh Trăng Cuối Phố",
        ticketCount: 2,
        pricePerTicket: 90000,
        totalAmount: 194400
    },
    {
        bookingCode: "CIN-002",
        customerName: "Trần Thị Bình",
        movieTitle: "Biệt Đội Sao Băng",
        ticketCount: 4,
        pricePerTicket: 90000,
        totalAmount: 349920
    },
    {
        bookingCode: "CIN-003",
        customerName: "Lê Minh Châu",
        movieTitle: "Mùa Hè Rực Lửa",
        ticketCount: 6,
        pricePerTicket: 110000,
        totalAmount: 641520
    }
];

function formatCurrency(money) {
    return money + " VNĐ";
}

function findBookingIndex(code) {
    for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].bookingCode === code.trim().toUpperCase()) {
            return i;
        }
    }
    return -1;
}

function validateBookingCode(code) {
    if (code === "") {
        return "Mã đặt vé không được để trống.";
    }

    if (code.length < 6) {
        return "Mã đặt vé phải có ít nhất 6 ký tự.";
    }

    if (!code.startsWith("CIN-")) {
        return "Mã đặt vé phải bắt đầu bằng CIN-.";
    }

    if (code.includes(" ")) {
        return "Mã đặt vé không được chứa khoảng trắng.";
    }

    if (findBookingIndex(code) !== -1) {
        return "Mã đặt vé đã tồn tại.";
    }

    return "";
}

function inputPositiveInteger(message) {
    while (true) {
        let input = prompt(message);

        if (input === null) {
            return null;
        }

        input = input.trim();
        let number = Number(input);

        if (input !== "" && Number.isInteger(number) && number > 0) {
            return number;
        }

        console.log("Vui lòng nhập số nguyên lớn hơn 0.");
    }
}

function calculateTotal(ticketCount, pricePerTicket) {
    let money = ticketCount * pricePerTicket;
    let discount = 0;

    if (ticketCount > 4) {
        discount = money * 0.1;
    }

    let serviceFee = (money - discount) * 0.08;
    let totalAmount = money - discount + serviceFee;

    return totalAmount;
}

function displayBookings() {
    if (bookings.length === 0) {
        console.log("Danh sách đặt vé đang trống.");
        return;
    }

    let totalRevenue = 0;

    for (let i = 0; i < bookings.length; i++) {
        let booking = bookings[i];

        console.log("Đơn đặt vé số " + (i + 1));
        console.log("Mã vé: " + booking.bookingCode);
        console.log("Khách hàng: " + booking.customerName);
        console.log("Tên phim: " + booking.movieTitle);
        console.log("Số vé: " + booking.ticketCount);
        console.log("Giá mỗi vé: " + formatCurrency(booking.pricePerTicket));
        console.log("Tổng tiền: " + formatCurrency(booking.totalAmount));
        console.log("------------------------------");

        totalRevenue += booking.totalAmount;
    }

    console.log("Tổng số đơn: " + bookings.length);
    console.log("Tổng doanh thu: " + formatCurrency(totalRevenue));
}

function addBooking() {
    let code = prompt("Nhập mã đặt vé:");

    if (code === null) {
        return;
    }

    code = code.trim().toUpperCase();

    let error = validateBookingCode(code);

    if (error !== "") {
        console.log(error);
        return;
    }

    let customerName = prompt("Nhập tên khách hàng:");

    if (customerName === null || customerName.trim() === "") {
        console.log("Tên khách hàng không được để trống.");
        return;
    }

    let movieTitle = prompt("Nhập tên phim:");

    if (movieTitle === null || movieTitle.trim() === "") {
        console.log("Tên phim không được để trống.");
        return;
    }

    let ticketCount = inputPositiveInteger("Nhập số lượng vé:");

    if (ticketCount === null) {
        return;
    }

    let pricePerTicket = inputPositiveInteger("Nhập giá mỗi vé:");

    if (pricePerTicket === null) {
        return;
    }

    let newBooking = {
        bookingCode: code,
        customerName: customerName.trim(),
        movieTitle: movieTitle.trim(),
        ticketCount: ticketCount,
        pricePerTicket: pricePerTicket,
        totalAmount: calculateTotal(ticketCount, pricePerTicket)
    };

    bookings.push(newBooking);

    console.log("Thêm đơn đặt vé thành công!");
    console.log("Tổng tiền: " + formatCurrency(newBooking.totalAmount));
}

function updateBooking() {
    let code = prompt("Nhập mã đặt vé cần cập nhật:");

    if (code === null) {
        return;
    }

    let index = findBookingIndex(code);

    if (index === -1) {
        console.log("Không tìm thấy đơn đặt vé.");
        return;
    }

    let ticketCount = inputPositiveInteger("Nhập số lượng vé mới:");

    if (ticketCount === null) {
        return;
    }

    let pricePerTicket = inputPositiveInteger("Nhập giá vé mới:");

    if (pricePerTicket === null) {
        return;
    }

    bookings[index].ticketCount = ticketCount;
    bookings[index].pricePerTicket = pricePerTicket;
    bookings[index].totalAmount = calculateTotal(ticketCount, pricePerTicket);

    console.log("Cập nhật đơn đặt vé thành công!");
    console.log("Tổng tiền mới: " + formatCurrency(bookings[index].totalAmount));
}

function deleteBooking() {
    let code = prompt("Nhập mã đặt vé cần xóa:");

    if (code === null) {
        return;
    }

    let index = findBookingIndex(code);

    if (index === -1) {
        console.log("Không tìm thấy đơn đặt vé.");
        return;
    }

    let confirmDelete = prompt("Nhập Y để xác nhận xóa, N để hủy:");

    if (confirmDelete === null) {
        return;
    }

    if (confirmDelete.trim().toUpperCase() === "Y") {
        bookings.splice(index, 1);
        console.log("Xóa đơn đặt vé thành công!");
    } else {
        console.log("Đã hủy thao tác xóa.");
    }
}

function searchBooking() {
    let keyword = prompt("Nhập tên phim cần tìm:");

    if (keyword === null || keyword.trim() === "") {
        console.log("Từ khóa tìm kiếm không hợp lệ.");
        return;
    }

    keyword = keyword.trim().toLowerCase();

    let found = false;

    for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].movieTitle.toLowerCase().includes(keyword)) {
            console.log("Mã vé: " + bookings[i].bookingCode);
            console.log("Khách hàng: " + bookings[i].customerName);
            console.log("Tên phim: " + bookings[i].movieTitle);
            console.log("Số vé: " + bookings[i].ticketCount);
            console.log("Tổng tiền: " + formatCurrency(bookings[i].totalAmount));

            found = true;
        }
    }

    if (found === false) {
        console.log("Không tìm thấy phim cần tìm.");
    }
}

function main() {
    let choice;

    do {
        choice = prompt(
            "===== QUẢN LÝ ĐẶT VÉ XEM PHIM =====\n" +
            "1. Hiển thị danh sách vé\n" +
            "2. Thêm đơn đặt vé\n" +
            "3. Cập nhật đơn đặt vé\n" +
            "4. Xóa đơn đặt vé\n" +
            "5. Tìm kiếm theo tên phim\n" +
            "0. Thoát chương trình\n" +
            "Nhập lựa chọn của bạn:"
        );

        if (choice === null) {
            break;
        }

        switch (choice) {
            case "1":
                displayBookings();
                break;
            case "2":
                addBooking();
                break;
            case "3":
                updateBooking();
                break;
            case "4":
                deleteBooking();
                break;
            case "5":
                searchBooking();
                break;
            case "0":
                console.log("Đã thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "0");
}

main();