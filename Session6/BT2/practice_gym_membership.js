let registeredMembers = 0;
let totalRevenue = 0;
let checkInCount = 0;

let memberName = "";
let memberCard = "";
let packageType = "";
let months = 0;
let hasRegistered = false;

do {
    console.log("\n===== GYM FITNESS =====");
    console.log("1. Đăng ký hội viên");
    console.log("2. Tính tiền gói tập");
    console.log("3. Quét mã thẻ check-in");
    console.log("4. Báo cáo và thoát");

    let choice = prompt("Nhập lựa chọn: ").trim();

    switch (choice) {

        case "1":
            memberName = prompt("Nhập tên hội viên: ")
                .trim()
                .toUpperCase();

            memberCard = prompt("Nhập mã thẻ: ")
                .trim()
                .toUpperCase();

            packageType = prompt("Nhập gói tập (STANDARD/VIP): ")
                .trim()
                .toUpperCase();

            months = Number(prompt("Nhập số tháng đăng ký: "));

            if (
                memberName.length > 0 &&
                memberCard.length > 0 &&
                (packageType === "STANDARD" || packageType === "VIP") &&
                months > 0
            ) {
                registeredMembers++;
                hasRegistered = true;

                console.log("\nĐăng ký hội viên thành công!");
                console.log("Tên: " + memberName);
                console.log("Mã thẻ: " + memberCard);
                console.log("Gói tập: " + packageType);
                console.log("Số tháng: " + months);
            } else {
                console.log("Thông tin đăng ký không hợp lệ!");
            }

            break;

        case "2":
            if (!hasRegistered) {
                console.log("Vui lòng đăng ký hội viên trước!");
                break;
            }

            let price = 0;

            if (packageType === "STANDARD") {
                price = 500000;
            } else if (packageType === "VIP") {
                price = 800000;
            }

            let ptCount = Number(
                prompt("Nhập số buổi thuê PT: ")
            );

            if (ptCount < 0) {
                console.log("Số buổi PT không hợp lệ!");
                break;
            }

            let packageMoney = price * months;
            let ptMoney = ptCount * 300000;
            let subtotal = packageMoney + ptMoney;

            let discount = 0;

            if (months >= 12) {
                discount = subtotal * 0.25;
            } else if (months >= 6) {
                discount = subtotal * 0.15;
            }

            let finalMoney = subtotal - discount;

            totalRevenue += finalMoney;

            console.log("\n----- HÓA ĐƠN GYM -----");
            console.log("Hội viên: " + memberName);
            console.log("Gói tập: " + packageType);
            console.log("Số tháng: " + months);
            console.log("Tiền gói: " + packageMoney + " VNĐ");
            console.log("Tiền PT: " + ptMoney + " VNĐ");
            console.log("Tạm tính: " + subtotal + " VNĐ");
            console.log("Giảm giá: " + discount + " VNĐ");
            console.log("THANH TOÁN: " + finalMoney + " VNĐ");
            console.log("----------------------");

            break;

        case "3":
            let cardCheck = prompt("Quét mã thẻ: ")
                .trim()
                .toUpperCase();

            let currentYear = new Date().getFullYear();
            let yearString = String(currentYear);

            if (
                cardCheck.startsWith("GYM-") &&
                cardCheck.endsWith(yearString)
            ) {
                checkInCount++;
                console.log("Check-in thành công!");
                console.log("Mã thẻ: " + cardCheck);
            } else {
                console.log("Mã thẻ không hợp lệ!");
                console.log(
                    "Mã phải bắt đầu bằng GYM- và kết thúc bằng năm hiện tại."
                );
            }

            break;

        case "4":
            console.log("\n===== BÁO CÁO CA TRỰC =====");
            console.log("Số hội viên đã đăng ký: " + registeredMembers);
            console.log("Số lượt check-in: " + checkInCount);
            console.log("Tổng doanh thu: " + totalRevenue + " VNĐ");
            console.log("===========================");
            console.log("Đã thoát chương trình.");

            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }

    if (choice === "4") {
        break;
    }

} while (true);