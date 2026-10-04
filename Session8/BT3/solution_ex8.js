const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

const indexS01 = portIds.indexOf('S01');
portStatuses[indexS01] = 'CHARGING';

const indexS03 = portIds.indexOf('S03');
portStatuses[indexS03] = 'AVAILABLE';

let availableCount = 0;
let maxPower = 0;
let maxPowerPort = '';

for (let i = 0; i < portIds.length; i++) {
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++;

        if (portPowersKw[i] > maxPower) {
            maxPower = portPowersKw[i];
            maxPowerPort = portIds[i];
        }
    }

    console.log(portIds[i] + ': ' + portStatuses[i] + ' - ' + portPowersKw[i] + ' kW');
}

console.log('Tổng số trụ AVAILABLE:', availableCount);
console.log('Trụ AVAILABLE có công suất cao nhất:', maxPowerPort);
console.log('Công suất cao nhất:', maxPower, 'kW');