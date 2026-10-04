const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

const xeVaoSac = hangDoiXeCho.shift();
console.log('Xe vào sạc:', xeVaoSac);

hangDoiXeCho.push('43D-88888');

for (let i = 0; i < hangDoiXeCho.length; i++) {
    console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}