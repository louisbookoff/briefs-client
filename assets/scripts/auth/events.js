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

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateBriefs = function (event) {
  event.preventDefault()
  // pass event.target to getFormFields to create a data object
  const data = getFormFields(event.target)

  // pass data to createTrips function
  api.createBriefs(data)
    .then(ui.createBriefSuccess)
    .catch(ui.createBriefFailure)
}

const onGetBriefs = function (event) {
  event.preventDefault()
  api.getBriefs(event)
    .then(ui.getBriefsSuccess)
    .catch(ui.getBriefsFailure)
}

const onUpdateBrief = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event.target is', event.target)
  // send data to api method
  api.updateBrief(data)
    .then(ui.updateBriefSuccess)
    .catch(ui.updateBriefFailure)
}

const onDeleteBrief = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  const id = event.target.dataset.id
  api.deleteBrief(id)
    .then(ui.deleteBriefSuccess)
    .catch(ui.deleteBriefFailure)
  // console.log('data is ', data)
}

const addHandlers = () => {
  $('.signup-form').on('submit', onSignUp)
  $('.signin-form').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-brief').on('submit', onCreateBriefs)
  $('.briefs').on('click', onGetBriefs)
  $('.change-brief').on('submit', '.edit', onUpdateBrief)
  $('#content').on('click', '.delete', onDeleteBrief)
}

module.exports = {
  addHandlers
}
