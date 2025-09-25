let query = {
    search: 'Вася',
    take: 10,
}

function executeQuery(query) {
    return `search=${query.search}&take=${query.take}`;
}

