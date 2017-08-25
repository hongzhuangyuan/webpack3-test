describe("global", () => {
  it("NODE_ENV", () => {
    expect(process.env.NODE_ENV).toBe("production")
  })

  it("__dirname", () => {
    expect(__dirname).toMatch(/\/test$/)
    expect(require("./data/dirname").__dirname).toMatch(/\/test\/data$/)
  })
})
