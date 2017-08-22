describe("global", () => {

  it("__dirname", () => {
    expect(__dirname).toMatch(/\/test$/)
    expect(require("./data/dirname").__dirname).toMatch(/\/test\/data$/)
  })
})
