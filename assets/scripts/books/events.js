const onShowBooks = function () {
  event.preventDefault()
  $('.content').show()
  api.getBooks()
    .then(ui.onGetBooksSuccess)
    .catch(ui.onGetBooksFailure)
}
