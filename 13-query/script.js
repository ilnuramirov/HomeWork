let query = {
    search: 'Вася',
    take: 10,
}

function executeQuery(query) {
    let temp = '';
    for (const key in query) {
        temp += `${key}=${query[key]}&`;
    }
    return temp.slice(0, -1);
}

console.log(executeQuery(query));