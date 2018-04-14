'use strict'

const store = require('../store')

const goTop = function () {
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const signUpSuccess = function (data) {
  // if ($(.form-group).val() === $(.confirmation).val())
  $('#message').text('Signed up successful!')
  $('#message').css('background-color', 'green')
  $('.close').click()
  $('#exampleInputEmail1').val('')
  $('#exampleInputPassword1').val('')
  $('#exampleInputPasswordConfirmation').val('')
  goTop()
  // console.log(data)
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  $('#exampleInputEmail1').val('')
  $('#exampleInputPassword1').val('')
  $('#exampleInputPasswordConfirmation').val('')
  $('.close').click()
  goTop()
  // console.error(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in succesfully')
  $('#message').css('background-color', 'green')
  // keep but change id for this and temporarily commenting out below
  $('#dashboard').removeClass('hidden')
  // console.log(data)
  store.user = data.user
  // Keep but temporarilly comment out to test
  $('#pageone').toggleClass('hidden')
  $('.close').click()
  $('#InputEmail1').val('')
  $('#InputPassword1').val('')
  goTop()
}
const signInFailure = function () {
  $('#message').text('Error on sign in, try again!')
  $('#message').css('background-color', 'red')
  $('#InputEmail1').val('')
  $('#InputPassword1').val('')
  $('.close').click()
  // console.error(error)
  goTop()
}

const changePasswordSuccess = function () {
  $('#message').text('You have changed your password succesfully')
  $('#message').css('background-color', 'green')
  $('#old-password').val('')
  $('#new-password').val('')
  // console.log('change password successfully')
  goTop()
}

const changePasswordFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').css('background-color', 'red')
  $('#old-password').val('')
  $('#new-password').val('')
  console.error(error)
  goTop()
}

const signOutSuccess = function () {
  $('#message').text('You have signed out succesfully')
  $('#message').css('background-color', 'green')
  $('#dashboard').toggleClass('hidden')
  $('#pageone').removeClass('hidden')
  $('.content').empty()
  // console.log('Signed out successfully')
  goTop()
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error(error)
  goTop()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
