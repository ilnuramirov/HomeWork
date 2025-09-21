const dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

let trueFormattedDates = dates.filter(function(date) {
  if (date.includes('-')) {
    return date.split('-');
  } else if (date.includes('/')) {
    return date.split('/');
  } else {
    return false;
  }
}).map(function(dateParts) {
  let arrDateTemp;
  let arrDate;

  if (dateParts.includes('-')) {
    arrDate = dateParts.split('-');
  } else if (dateParts.includes('/')) {
    arrDateTemp = dateParts.split('/');
    arrDate = [arrDateTemp[1], arrDateTemp[0], arrDateTemp[2]];
  }
  return arrDate;
});

let validDates = [];
for (let i = 0; i < trueFormattedDates.length; i++) {
  let day = Number(trueFormattedDates[i][0]);
  let month = Number(trueFormattedDates[i][1]);
  let year = Number(trueFormattedDates[i][2]);

  if (day > 0 && day < 32 && month > 0 && month < 13 && year > 0) {
    const dayStr = String(day).padStart(2, '0');
        const monthStr = String(month).padStart(2, '0');
    validDates.push(`${dayStr}.${monthStr}.${year}`);
  }
}

console.log(validDates);
