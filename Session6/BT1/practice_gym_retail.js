let orderCode = "";
let isValid = false;

do {
    console.log("\n===== GYM FITNESS =====");
    console.log("1. Nhập và chuẩn hóa mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát chương trình");

    let choice = prompt("Nhập lựa chọn: ");

    switch (choice) {
        case "1":
            orderCode = prompt("Nhập mã đơn hàng: ").trim().toUpperCase();

            if (orderCode.length >= 8 && orderCode.startsWith("GYM")) {
                isValid = true;
                console.log("Mã đơn hàng hợp lệ: " + orderCode);
            } else {
                isValid = false;
                console.log("Mã đơn hàng không hợp lệ!");
                console.log("Mã phải bắt đầu bằng GYM và có ít nhất 8 ký tự.");
            }
            break;

        case "2":
            if (!isValid) {
                console.log("Vui lòng nhập mã đơn hàng hợp lệ trước!");
                break;
            }

            let order = "SHAKER:1,GLOVES:2,STRAP:1";
            let items = order.split(",");

            let total = 0;
            let invoice = [];

            for (let i = 0; i < items.length; i++) {
                let item = items[i];

                if (item.startsWith("SHAKER")) {
                    let quantity = Number(item.slice(7));
                    let price = 120000;
                    let amount = quantity * price;

                    total += amount;
                    invoice.push(["Bình lắc", quantity, price, amount]);
                } 
                else if (item.startsWith("GLOVES")) {
                    let quantity = Number(item.slice(7));
                    let price = 180000;
                    let amount = quantity * price;

                    total += amount;
                    invoice.push(["Găng tay", quantity, price, amount]);
                } 
                else if (item.startsWith("STRAP")) {
                    let quantity = Number(item.slice(5));
                    let price = 150000;
                    let amount = quantity * price;

                    total += amount;
                    invoice.push(["Dây kéo lưng", quantity, price, amount]);
                }
            }

            let vip = prompt("Khách có thẻ VIP? (Y/N): ").trim().toUpperCase();

            let discount = 0;

            if (vip === "Y") {
                discount = total * 0.1;
            }

            let finalTotal = total - discount;

            console.log("\n" + "-".repeat(40));
            console.log("             HÓA ĐƠN GYM");
            console.log("-".repeat(40));
            console.log("Mã đơn: " + orderCode);
            console.log("-".repeat(40));

            console.log(
                "Sản phẩm".padEnd(18) +
                "SL".padStart(4) +
                "Tiền".padStart(12)
            );

            console.log("-".repeat(40));

            for (let i = 0; i < invoice.length; i++) {
                let item = invoice[i];

                console.log(
                    item[0].padEnd(18) +
                    String(item[1]).padStart(4) +
                    String(item[3]).padStart(12)
                );
            }

            console.log("-".repeat(40));
            console.log("Tạm tính: " + total + " VNĐ");

            if (vip === "Y") {
                console.log("Giảm VIP 10%: " + discount + " VNĐ");
            } else {
                console.log("Giảm VIP: 0 VNĐ");
            }

            console.log("THANH TOÁN: " + finalTotal + " VNĐ");
            console.log("-".repeat(40));
            break;

        case "3":
            console.log("Đã thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }

} while (true);