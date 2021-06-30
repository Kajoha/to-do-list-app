function classElem(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, '');
  } else {
    elem.className = `${elem.className.replace(/\s+/g, ' ')} ${className}`;
  }

  return elem;
}

function selectDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const option = dropdown.querySelector('.dropdown__option');
  const icon = dropdown.querySelector('.dropdown__arrow--right');

  classElem(option, 'dropdown__hide');
  classElem(icon, 'dropdown__arrow--rotate');
}

function optionSelected(e) {
  classElem(e.target.parentNode, 'dropdown__hide');

  const newValue = `${e.target.textContent}`;
  const textElem = document.querySelector('.dropdown__select');
  const icon = document.querySelector('.dropdown__select .dropdown__arrow');

  textElem.textContent = newValue;
  textElem.appendChild(icon);

  document.querySelector('.dropdown__select').dispatchEvent(new Event('change'));
  setTimeout(() => classElem(icon, 'dropdown__arrow--rotate', 0));
}

export { selectDisplay, optionSelected };
