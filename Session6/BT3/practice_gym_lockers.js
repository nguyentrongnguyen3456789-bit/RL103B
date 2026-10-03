let memberCard = "";
let memberType = "";
let isValid = false;

let materialLog = "";

let towelCount = 0;
let lockCount = 0;

do {
    console.log("\n===== GYM FITNESS =====");
    console.log("1. Tiếp nhận và xác thực thẻ hội viên");
    console.log("2. Ghi nhận vật tư mượn thêm");
    console.log("3. In phiếu bàn giao");
    console.log("4. Đóng ca và thoát");

    let choice = prompt("Nhập lựa chọn: ").trim();

    switch (choice) {

        case "1":
            memberCard = prompt("Nhập mã thẻ hội viên: ")
                .trim()
                .toUpperCase();

            if (memberCard.startsWith("GYM-VIP-")) {
                memberType = "VIP";
                isValid = true;

                console.log("Thẻ hợp lệ!");
                console.log("Hạng hội viên: VIP");
                console.log("Tủ được cấp: ZONE-A");
                console.log("Miễn phí 1 khăn tắm lớn.");
            } 
            else if (memberCard.startsWith("GYM-STANDARD-")) {
                memberType = "STANDARD";
                isValid = true;

                console.log("Thẻ hợp lệ!");
                console.log("Hạng hội viên: STANDARD");
                console.log("Tủ được cấp: ZONE-B");
            } 
            else {
                isValid = false;
                console.log("Thẻ hội viên không hợp lệ!");
            }

            break;

        case "2":
            if (!isValid) {
                console.log("Vui lòng xác thực thẻ hội viên trước!");
                break;
            }

            materialLog = prompt(
                'Nhập vật tư mượn thêm (VD: "TOWEL:2|LOCK:1"): '
            ).trim().toUpperCase();

            towelCount = 0;
            lockCount = 0;

            let remaining = materialLog;

            while (remaining.length > 0) {

                let separator = remaining.indexOf("|");

                let item;

                if (separator === -1) {
                    item = remaining;
                    remaining = "";
                } else {
                    item = remaining.slice(0, separator);
                    remaining = remaining.slice(separator + 1);
                }

                let colon = item.indexOf(":");

                if (colon !== -1) {
                    let material = item.slice(0, colon);
                    let quantity = Number(item.slice(colon + 1));

                    if (material === "TOWEL") {
                        towelCount += quantity;
                    } 
                    else if (material === "LOCK") {
                        lockCount += quantity;
                    }
                }
            }

            console.log("Đã ghi nhận vật tư mượn thêm.");
            console.log("Khăn tắm: " + towelCount);
            console.log("Khóa tủ: " + lockCount);

            break;

        case "3":
            if (!isValid) {
                console.log("Vui lòng xác thực thẻ hội viên trước!");
                break;
            }

            let towelPrice = 20000;
            let lockPrice = 15000;

            let towelFee = towelCount * towelPrice;
            let lockFee = lockCount * lockPrice;

            let materialFee = towelFee + lockFee;

            let deposit = 0;

            if (towelCount > 0 || lockCount > 0) {
                deposit = 50000;
            }

            console.log("\n" + "=".repeat(50));
            console.log("             PHIẾU BÀN GIAO VẬT TƯ");
            console.log("=".repeat(50));

            console.log(`Mã thẻ:       ${memberCard}`);
            console.log(`Hạng:          ${memberType}`);

            if (memberType === "VIP") {
                console.log("Khu tủ:        ZONE-A");
                console.log("Khăn miễn phí: 1 khăn tắm lớn");
            } 
            else {
                console.log("Khu tủ:        ZONE-B");
            }

            console.log("-".repeat(50));

            console.log(
                "Vật tư".padEnd(20) +
                "Số lượng".padStart(10) +
                "Thành tiền".padStart(15)
            );

            console.log("-".repeat(50));

            console.log(
                "Khăn tắm".padEnd(20) +
                String(towelCount).padStart(10) +
                String(towelFee).padStart(15)
            );

            console.log(
                "Khóa tủ phụ".padEnd(20) +
                String(lockCount).padStart(10) +
                String(lockFee).padStart(15)
            );

            console.log("-".repeat(50));

            console.log("Phụ phí vật tư: " + materialFee + " VNĐ");
            console.log("Tiền đặt cọc:   " + deposit + " VNĐ");
            console.log(
                "Tổng thu:       " + (materialFee + deposit) + " VNĐ"
            );

            console.log("-".repeat(50));
            console.log("Tiền đặt cọc 50.000 VNĐ sẽ được hoàn lại khi trả đủ vật tư.");
            console.log("=".repeat(50));

            break;

        case "4":
            console.log("\nĐã đóng ca làm việc.");
            console.log("Hẹn gặp lại!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }

    if (choice === "4") {
        break;
    }

} while (true);