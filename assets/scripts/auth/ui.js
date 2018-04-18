'use strict'

const store = require('../store')
const showHandlebars = require('../templates/list.hbs')
const events = require('./events')
require('./../../../node_modules/jquery-toast-plugin/src/jquery.toast.js')
require('./../../../node_modules/jquery-toast-plugin/src/jquery.toast.css')

// const goTop = function () {
//   $('html, body').animate({ scrollTop: 0 }, 'fast')
// }

const signUpSuccess = function (data) {
  // if ($(.form-group).val() === $(.confirmation).val())
  $('.close').click()
  $('#email').val('')
  $('#password-conf').val('')
  $('#confirm-password').val('')
  // goTop()
  // console.log(data)

  $.toast({
    text: 'You have signed up for briefs',
    heading: 'Sign up success!',
    icon: 'success',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'bottom-left',
    textAlign: 'left',
    loader: true,
    loaderBg: '#fed',
    bgColor: '#green',
    textColor: 'black'
  })
}

const signUpFailure = function () {
  $('#email').val('')
  $('#password-conf').val('')
  $('#confirm-password').val('')
  $('.close').click()
  // goTop()

  $.toast({
    text: 'Make sure you entered in the correct info!',
    heading: 'Sign up failure!',
    icon: 'warning',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: 'red',
    bgColor: 'red',
    textColor: 'black'
  })
}

const signInSuccess = function (data) {
  // keep but change id for this and temporarily commenting out below
  $('#dashboard').removeClass('hidden')
  // console.log(data)
  store.user = data.user
  // Keep but temporarilly comment out to test
  $('#pageone').toggleClass('hidden')
  $('.close').click()
  $('#InputEmail1').val('')
  $('#InputPass1').val('')

  $.toast({
    text: 'You have signed in!',
    heading: 'Sign in success!',
    icon: 'success',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'bottom-left',
    textAlign: 'left',
    loader: true,
    loaderBg: '#fed',
    bgColor: '#green',
    textColor: 'black'
  })
  //
  // goTop()
}
const signInFailure = function () {
  // $('#message').text('Error on sign in, try again!')
  // $('#message').css('background-color', 'red')
  $('#InputEmail1').val('')
  $('#InputPass1').val('')
  $('.close').click()
  // console.error(error)
  // goTop()

  $.toast({
    text: 'Make sure you entered in the correct information!',
    heading: 'Sign in failure!',
    icon: 'warning',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: 'red',
    bgColor: 'red',
    textColor: 'black'
  })
}

const changePasswordSuccess = function () {
  // $('#message').text('You have changed your password succesfully')
  // $('#message').css('background-color', 'green')
  $('#password-change-field').val('')
  $('#password-confirm-change').val('')
  // console.log('change password successfully')
  // goTop()
  $.toast({
    text: 'You have succesfully change your password!',
    heading: 'Change Password Success!',
    icon: 'success',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'bottom-left',
    textAlign: 'left',
    loader: true,
    loaderBg: '#fed',
    bgColor: '#green',
    textColor: 'black'
  })
}

const changePasswordFailure = function () {
  // $('#message').text('Error changing password')
  // $('#message').css('background-color', 'red')
  $('#password-change-field').val('')
  $('#password-confirm-change').val('')
  // console.error(error)
  // goTop()

  $.toast({
    text: 'Make sure you entered in the correct information!',
    heading: 'Change Password Failure',
    icon: 'warning',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: 'red',
    bgColor: 'red',
    textColor: 'black'
  })
}

const signOutSuccess = function () {
  // $('#message').text('You have signed out succesfully')
  // $('#message').css('background-color', 'green')
  $('#dashboard').toggleClass('hidden')
  $('#pageone').removeClass('hidden')
  $('.content').empty()
  // console.log('Signed out successfully')
  // goTop()

  $.toast({
    text: 'You Have Succesfully Signed Out. Visit us soon!',
    heading: 'Change Password Success!',
    icon: 'success',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: '#fed',
    bgColor: '#green',
    textColor: 'black'
  })
}

const signOutFailure = function () {
  // $('#message').text('Error on sign out')
  // $('#message').css('background-color', 'red')
  // console.error(error)
  // goTop()

  $.toast({
    text: 'Check your connection',
    heading: 'Sign Out Failure',
    icon: 'warning',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: 'red',
    bgColor: 'red',
    textColor: 'black'
  })
}

const createBriefSuccess = function (data) {
  // $('#message').text('You have sucessfully created a trip!')
  // $('#message').css('background-color', 'green')
  // console.log(events)
  $('.content').empty()
  $('.update').val('')
  // goTop()

  $.toast({
    text: 'You Have Succesfully Created A Brief!',
    heading: 'Brief Created!',
    icon: 'success',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'bottom-left',
    textAlign: 'left',
    loader: true,
    loaderBg: '#fed',
    bgColor: '#green',
    textColor: 'black'
  })
}

const createBriefFailure = function () {
  // $('#message').text('Error while creating a trip')
  // $('#message').css('background-color', 'red')
  $('.update').val('')
  // goTop()

  $.toast({
    text: 'Make sure all fields are correct and your connection is strong',
    heading: 'Brief Creation Failed',
    icon: 'warning',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'bottom-left',
    textAlign: 'left',
    loader: true,
    loaderBg: 'red',
    bgColor: 'red',
    textColor: 'black'
  })
}

const getBriefsSuccess = function (data) {
  // console.log(data)
  const showBriefsHtml = showHandlebars({ briefs: data.briefs })
  $('#content').html(showBriefsHtml)
  const elements = data.briefs
  if (elements.length === 0) {
    $.toast({
      text: 'You have no briefs, please create some.',
      heading: 'No Briefs Have Been Created',
      icon: 'warning',
      showHideTransition: 'slide',
      allowToastClose: true,
      hideAfter: 3000,
      stack: 5,
      position: 'bottom-left',
      textAlign: 'left',
      loader: true,
      loaderBg: 'red',
      bgColor: 'red',
      textColor: 'black'
    })
  } else {
    $.toast({
      text: 'Checkout Your Briefs!',
      heading: 'Below Are Your Briefs!',
      icon: 'success',
      showHideTransition: 'slide',
      allowToastClose: true,
      hideAfter: 3000,
      stack: 5,
      position: 'top-left',
      textAlign: 'left',
      loader: true,
      loaderBg: '#fed',
      bgColor: '#green',
      textColor: 'black'
    })
  }
}

const getBriefsFailure = function (data) {
  $.toast({
    text: 'Check your connection',
    heading: 'Brief Retrieval Failed',
    icon: 'warning',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: 'red',
    bgColor: 'red',
    textColor: 'black'
  })
}

const updateBriefSuccess = function (data) {
  // $('#message').text('You have sucessfully updated that brief!')
  // $('#message').css('background-color', 'green')
  $('.content').empty()
  store.brief = data.brief
  // goTop()
  $('#testing-this-modal').modal('toggle')
  $('.title-class').val('')
  $('.subject-class').val('')
  $('.body-class').val('')

  $.toast({
    text: 'You Have Succesfully Updated Your Brief!',
    heading: 'Brief Updated!',
    icon: 'success',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'bottom-left',
    textAlign: 'left',
    loader: true,
    loaderBg: '#fed',
    bgColor: '#green',
    textColor: 'black'
  })
}

const updateBriefFailure = function () {
  // $('#message').text('Error while updating brief')
  // $('#message').css('background-color', 'red')
  $('.content').empty()
  // goTop()
  $('.title-class').val('')
  $('.subject-class').val('')
  $('.body-class').val('')

  $.toast({
    text: 'Check your connection and make sure the correct info has been entered',
    heading: 'Brief Update Failed',
    icon: 'warning',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: 'red',
    bgColor: 'red',
    textColor: 'black'
  })
}

const deleteBriefSuccess = function () {
  // $('#message').text('Brief deleted')
  // $('#message').css('background-color', 'green')
  $('.content').empty()
  // goTop()

  $.toast({
    text: 'You Have Succesfully Deleted Your Brief! Click Get Briefs To See Updated List',
    heading: 'Brief Deleted!',
    icon: 'success',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: '#fed',
    bgColor: '#green',
    textColor: 'black'
  })
}

const deleteBriefFailure = function () {
  // $('#message').text('Error while updating brief')
  // $('#message').css('background-color', 'red')
  $('.content').empty()
  // goTop()

  $.toast({
    text: 'Check your connection',
    heading: 'Brief Delete Failed',
    icon: 'warning',
    showHideTransition: 'slide',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-left',
    textAlign: 'left',
    loader: true,
    loaderBg: 'red',
    bgColor: 'red',
    textColor: 'black'
  })
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createBriefSuccess,
  createBriefFailure,
  getBriefsSuccess,
  getBriefsFailure,
  updateBriefSuccess,
  updateBriefFailure,
  deleteBriefSuccess,
  deleteBriefFailure
}
