'use strict'

const api = require('./api')
const getFormFields = require('.../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = () => {
  $('.signup-form').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
