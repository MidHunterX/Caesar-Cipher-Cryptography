
(function ($) {
	"use strict";
	//Navigation Animation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');

			nav_transition(); // added for transition
			window.addEventListener('load', function () { // added for transition
				nav_transition();
			})
			applyListeners();
		};
		var nav_transition = function nav_transition() { // added for transition
			return toggleClass(body, 'nav-active');
		};

		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}();

})(jQuery);
