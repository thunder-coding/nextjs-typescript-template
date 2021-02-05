/// <reference types="Cypress" />

describe('Visit Site', () => {
    it('Opens my website', () => {
        cy.visit('http://localhost:3000')
    })
})


describe('Perform some checks', () => {
    it('Test 1', () => {
        cy.contains('Welcome to Next.js!')
    })

    it('Test 2', () => {
        cy.contains('Next.js');
    })
})