// select DOM elements
const form = document.querySelector('#form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const formDone = document.querySelector('.form-sent')
const showPass = document.querySelector('.showpass')
const checkbox = document.querySelector('#check')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkData()
})

//validate form input data
function checkData() {
  const userData = userName.value.trim()
  const emailData = email.value.trim()
  const passData = password.value.trim()
  if (userData === '') {
    setError(userName, 'user name is empty')
  } else {
    setSuccess(userName)
  }
  if (emailData === '') {
    setError(email, 'email is empty')
  } else if (!isEmail(emailData)) {
    setError(email, 'invalid email')
  } else {
    setSuccess(email)
  }
  if (passData === '') {
    setError(password, 'password is empty')
  } else if (passData.length < 8) {
    setError(password, 'password too short')
  } else {
    setSuccess(password)
  }

  if (
    userData !== '' &&
    isEmail(emailData) &&
    passData !== '' &&
    passData.length > 8
    // passCheckData === passData
  ) {
    formSent()
    restoreDeafault(userName)
    restoreDeafault(email)
    restoreDeafault(password)
    clearFrom()
  }
}

//give feedback on what went wrong
function setError(element, text) {
  const formControl = element.parentElement
  const small = formControl.querySelector('small')
  showPass.style.visibility = 'hidden'

  formControl.className = 'form-contorl error'
  formControl.querySelector('small').textContent = text
}

//show success
function setSuccess(element) {
  const formControl = element.parentElement
  showPass.style.visibility = 'visible'
  formControl.className = 'form-contorl success'
}

// restore default
function restoreDeafault(element) {
  element.parentElement.className = 'form-contorl'
}

// vadlidate email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

// show successul form sent
function formSent() {
  formDone.className = 'form-sent show'
  setTimeout(() => {
    formDone.className = 'form-sent'
  }, 3000)
}

// clear input fields
function clearFrom() {
  userName.value = ''
  email.value = ''
  password.value = ''
  passwordCheck.value = ''
}

// show password
showPass.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
})
