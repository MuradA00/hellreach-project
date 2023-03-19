const loginTriggers = document.querySelectorAll('.login--trigger'),
      registerTriggers = document.querySelectorAll('.reg--trigger'),
      loginModal = document.querySelector('#login'),
      registerModal = document.querySelector('#register'),
      successModal = document.querySelector('#success'),
      closeLogin = document.querySelector('.modal_login .modal__close'),
      closeRegister = document.querySelector('.modal_register .modal__close'),
      closeSuccess = document.querySelector('.modal_success .modal__close'),
      registerBtn = document.querySelector('#createAcc'),
      continueBtn = document.querySelector('.modal__continue');

function showModal(modal, closeModalIcon) {
  modal.classList.add('show-modal');
  menu.classList.remove('show-menu')
  body.classList.remove('body-locked')
  burger.classList.remove('active-burger')
  body.style.overflow = 'hidden'
  html.classList.remove('body-locked')
  closeModalIcon.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    body.classList.remove('body-locked')
    body.style.overflow = ''
  })
}

continueBtn.addEventListener('click', () => {
  successModal.classList.remove('show-modal');
  body.style.overflow = ''
})

registerBtn.addEventListener('click', function() {
  registerModal.classList.remove('show-modal')
  successModal.classList.add('show-modal')

closeSuccess.addEventListener('click', () => {
    successModal.classList.remove('show-modal')
    body.style.overflow = ''
  })
})

loginTriggers.forEach(trigger => trigger.addEventListener('click', () => {
  showModal(loginModal, closeLogin);
}))

registerTriggers.forEach(trigger => trigger.addEventListener('click', () => {
  showModal(registerModal, closeRegister)
}))
