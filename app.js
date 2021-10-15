const headerLogo = document.querySelector('.header__logo');
const headerNav = document.querySelector('.header__nav');
const headerIcon = document.querySelector('.header__icon');

headerIcon.addEventListener('click', (e) => {
	headerLogo.classList.toggle('_active');
	headerNav.classList.toggle('_active');
	headerIcon.classList.toggle('_active');
});
