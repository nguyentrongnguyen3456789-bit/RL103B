
// 1. So sanh co che Hoisting

// Function Declaration: co the goi truoc khi khai bao
showMessage();

function showMessage() {
    console.log("Smart Home IoT dang hoat dong");
}

// Function Expression: phai khoi tao bien truoc khi goi
const turnOnLight = function () {
    console.log("Da bat den");
};

turnOnLight();

// Arrow Function: phai khoi tao bien truoc khi goi
const turnOffLight = () => {
    console.log("Da tat den");
};

turnOffLight();

/*
Neu goi turnOnLight() hoac turnOffLight() truoc khi khai bao,
chuong trinh se bao ReferenceError vi bien const chua duoc khoi tao.
*/


// 2. So sanh this

const device = {
    name: "Den phong khach",

    // Function Expression co this tro den device khi goi theo cach nay
    showName: function () {
        console.log("Function Expression: " + this.name);
    },

    // Arrow Function khong co this rieng
    getName: () => {
        console.log("Arrow Function: " + this.name);
    }
};

device.showName();
device.getName();

/*
Ket qua:
Function Expression: Den phong khach
Arrow Function: undefined (trong moi truong chay thong thuong
khong co this.name tu pham vi ben ngoai)

Function Expression co this phu thuoc vao cach goi ham.
Arrow Function ke thua this tu pham vi ben ngoai.
*/


// 3. So sanh arguments

function showValues() {
    console.log("Function Declaration:");
    console.log(arguments);
}

showValues("Nhiet do", 28, "Do am", 60);

const showValuesExpression = function () {
    console.log("Function Expression:");
    console.log(arguments);
};

showValuesExpression("Den", "Dang bat");

// Arrow Function khong co arguments rieng
// Su dung Rest Parameter de nhan nhieu tham so
const showValuesArrow = (...values) => {
    console.log("Arrow Function:");
    console.log(values);
};

showValuesArrow("Quat", "Dang tat");

/*
Function Declaration va Function Expression thong thuong co arguments.
Arrow Function khong co arguments rieng, nen co the dung ...values.
*/


// 4. Vi du ap dung trong du an Smart Home IoT

// Function Declaration: xu ly chinh
function readTemperature(temperature) {
    console.log("Nhiet do hien tai: " + temperature + " do C");
}

// Function Expression: ham bat quat
const turnOnFan = function () {
    console.log("Quat da bat");
};

// Arrow Function: kiem tra do am
const checkHumidity = (humidity) => {
    console.log("Do am hien tai: " + humidity + "%");
};

readTemperature(28);
turnOnFan();
checkHumidity(60);


// 5. Phan tich uu diem va nhuoc diem

/*
FUNCTION DECLARATION
- Uu diem:
  + Co the goi ham truoc khi khai bao.
  + Ten ham ro rang, de doc va tai su dung.
- Nhuoc diem:
  + this phu thuoc vao cach goi ham.
- Nen dung:
  + Cac ham xu ly chinh trong du an.

FUNCTION EXPRESSION
- Uu diem:
  + Co the gan ham vao bien.
  + De truyen ham lam tham so cho ham khac.
- Nhuoc diem:
  + Neu dung const, phai khoi tao bien truoc khi goi.
- Nen dung:
  + Khi can luu ham vao bien hoac truyen ham nhu mot gia tri.

ARROW FUNCTION
- Uu diem:
  + Cu phap ngan gon.
  + this duoc ke thua tu pham vi ben ngoai.
- Nhuoc diem:
  + Khong co arguments rieng.
  + Khong phu hop lam method neu can this cua doi tuong.
- Nen dung:
  + Callback va cac ham xu ly ngan gon.


// 6. Quy chuan su dung trong Smart Home IoT

1. Dung Function Declaration cho cac ham xu ly chinh.
2. Uu tien const khi khai bao Function Expression va Arrow Function.
3. Dung Arrow Function cho callback va ham ngan gon.
4. Khong dung Arrow Function lam method neu can this cua doi tuong.
5. Khong goi bien ham truoc khi khoi tao.
6. Dat ten ham ro rang, thong nhat va de bao tri.
*/
