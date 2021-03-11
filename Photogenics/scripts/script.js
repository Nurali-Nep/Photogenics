function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
}

var button_portfolio = document.querySelector('#portfolio');
var portfolioSection = document.querySelector('.section-portfolio');



var button_about = document.querySelector('#about');
var plansSection = document.querySelector('.section-plans')

var button_contact = document.querySelector('#contact');
var contactSection = document.querySelector('.section-contact')

var button_top = document.querySelector('#top');
var headerSection = document.querySelector('.section-header')

button_portfolio.addEventListener('click', () => {
	scrollTo(portfolioSection);
})


button_about.addEventListener('click', () => {
	scrollTo(plansSection);
})

button_contact.addEventListener('click', () => {
	scrollTo(contactSection);
})

button_top.addEventListener('click', () => {
	scrollTo(headerSection);
})