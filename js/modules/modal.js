export default class Modal {
  constructor(botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(container);

    // bind link ao callback para
    // fazer referência ao objeto
    // da classes.
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha modal ao clicar
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona o evento aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}

//   function toggleModal(event) {
//     event.preventDefault();
//     containerModal.classList.toggle('ativo');
//   }
//   function cliqueForaModal(event) {
//     if (event.target === this) {
//       toggleModal(event);
//     }
//   }
//   if (botaoAbrir && botaoFechar && containerModal) {
//     botaoAbrir.addEventListener('click', toggleModal);
//     botaoFechar.addEventListener('click', toggleModal);
//     containerModal.addEventListener('click', cliqueForaModal);
//   }
// }
