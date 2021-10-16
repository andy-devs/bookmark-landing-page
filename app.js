const headerLogo = document.querySelector(".header__logo");
const headerNav = document.querySelector(".header__nav");
const headerIcon = document.querySelector(".header__icon");

headerIcon.addEventListener("click", (e) => {
	headerLogo.classList.toggle("_active");
	headerNav.classList.toggle("_active");
	headerIcon.classList.toggle("_active");
});

const tabNavItems = document.querySelectorAll(".features__tabs__nav-item");
const tabBodyItems = document.querySelectorAll(".features__tabs__body-item");

for (let i = 0; i < tabNavItems.length; i++) {
	tabNavItems[i].addEventListener("click", (e) => {
		if (!tabNavItems[i].classList.contains("_active")) {
			removeActive(tabNavItems);
			tabNavItems[i].classList.add("_active");
			removeActive(tabBodyItems);
			tabBodyItems[i].classList.add("_active");
		}
	});
}

const accBtn = document.querySelectorAll(".questions__accordion__body-btn");
const accBlock = document.querySelectorAll(".questions__accordion__body-panel");

for (let i = 0; i < accBtn.length; i++) {
	accBtn[i].addEventListener("click", (e) => {
		if (!accBtn[i].classList.contains("_active")) {
			removeActive(accBtn);
			accBtn[i].classList.toggle("_active");
			removeActive(accBlock);
			accBlock[i].classList.toggle("_active");
		} else {
			removeActive(accBtn);
			removeActive(accBlock);
		}
	});
}

function removeActive(items) {
	for (let i of items) {
		i.classList.remove("_active");
	}
}
