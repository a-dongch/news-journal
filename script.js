(function () {
  const dropdownBtn = document.querySelector('.nav-link-dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (!dropdownBtn || !dropdownMenu) return;

  function open() {
    dropdownBtn.classList.add('is-open');
    dropdownBtn.setAttribute('aria-expanded', 'true');
    dropdownMenu.classList.add('is-open');
  }

  function close() {
    dropdownBtn.classList.remove('is-open');
    dropdownBtn.setAttribute('aria-expanded', 'false');
    dropdownMenu.classList.remove('is-open');
  }

  function toggle() {
    if (dropdownMenu.classList.contains('is-open')) close();
    else open();
  }

  dropdownBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  });

  document.addEventListener('click', function () {
    close();
  });

  dropdownMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });
})();
