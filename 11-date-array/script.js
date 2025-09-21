const dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

let validDates = dates
  .map(function(date) {
    let separator = null;
    if (date.includes('-')) {
      separator = '-';
    } else if (date.includes('/')) {
      separator = '/';
    } else {
      return null;
    }

    const arrDate = date.split(separator);
    if (
      arrDate.length === 3 &&
      arrDate[0].length === 2 &&
      arrDate[1].length === 2 &&
      arrDate[2].length === 4 &&
      !isNaN(arrDate[0]) &&
      !isNaN(arrDate[1]) &&
      !isNaN(arrDate[2])
    ) {
      const day = Number(arrDate[0]);
      const month = Number(arrDate[1]);
      const year = Number(arrDate[2]);
      if (day > 0 && day < 32 && month > 0 && month < 13 && year > 0) {
        // Добавляем ведущие нули
        const dayStr = String(day).padStart(2, '0');
        const monthStr = String(month).padStart(2, '0');
        return `${dayStr}-${monthStr}-${year}`;
      }
    }
    return null;
  })
  .filter(Boolean);

console.log(validDates);