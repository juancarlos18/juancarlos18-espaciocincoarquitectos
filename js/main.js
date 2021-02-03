
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav =document.querySelector('.nav-items');
	const navItems = document.querySelectorAll('.nav-items li')
	
	burger.addEventListener('click', () => {
		//Toggle nav
		nav.classList.toggle('nav-active')

		//Animation items
		navItems.forEach((item, index) => {
			if (item.style.animation) {
				item.style.animation = '';
			} else {
				item.style.animation = `navItemFade 0.2s ease forwards ${index / 10}s`;
			}
		});

		//Burger animation
		burger.classList.toggle('toggle');
	});
}

navSlide();