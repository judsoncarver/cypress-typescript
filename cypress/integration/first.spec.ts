/// <reference types="cypress"/>

describe('amazon search', () => {
	it('should work', () => {
		cy.visit('https://www.amazon.com/');
		cy.get('#twotabsearchtextbox').type('usb c converter{Enter}');
	});
});
