const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')

Given('访问谷歌搜索页面', function () {
  this.browser = '谷歌'
})

When('搜索框输入奶酪', function () {
  this.keyword = '奶酪'
})

// Then('页面标题会以{string}开始', function () {
//   // Write code here that turns the phrase above into concrete actions
//   // return 'pending'
// })

Then('页面标题会以奶酪开头', function () {
  // console.log(expectedAnswer)
  // Write code here that turns the phrase above into concrete actions
  // assert.strictEqual(this.actualAnswer, expectedAnswer)
})
