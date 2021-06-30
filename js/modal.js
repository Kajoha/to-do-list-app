const modal = document.querySelector('.modal');
const openModal = document.querySelector('.js-modal__open');
const closeModal = document.querySelector('.js-modal__close');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
