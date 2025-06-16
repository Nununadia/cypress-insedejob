describe('Verifikasi Fitur Login Akun', () => {
  it('User Berhasil Login dengan data akun yang terdaftar', () => {
      cy.Login('standard_user', 'secret_sauce')
  })
})