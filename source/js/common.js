const footer = document.querySelector('.footer'),
      spakrs = document.querySelector('.sparks-wrapper');

function setSpakrs() {
  const footerHeight = footer.clientHeight;
  spakrs.style.bottom = `${footerHeight}px`;
}

setSpakrs();
