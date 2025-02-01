// Leer mensaje personalizado desde la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// Botones de interacción
const btnOpenElement = document.querySelector('#open');
const btnAcceptElement = document.querySelector('#accept');

btnAcceptElement.disabled = true;

// Abrir la carta
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnAcceptElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

// Redirigir a la pantalla de flores al hacer clic en "Acepto"
btnAcceptElement.addEventListener('click', () => {
  const messageCustom = document.querySelector('#mainMessage').textContent;
  const encodedMessage = encodeURIComponent(messageCustom); // Codificar el mensaje para la URL
  window.location.href = `flores.html?message=${encodedMessage}`; // Redirigir a flores.html
});