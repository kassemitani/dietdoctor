/* eslint-disable no-undef */
describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have list of meals', async () => {
    await expect(element(by.id('meallist'))).toBeVisible()
    await element(by.id('mealItem')).tap()
  })

  it('should show meal plan detail screen after tap', async () => {
    await expect(element(by.id('title'))).toBeVisible()
  })
})
