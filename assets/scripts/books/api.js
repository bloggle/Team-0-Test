const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
getBooks
}
