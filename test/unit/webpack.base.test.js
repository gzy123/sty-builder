const assert = require('assert')
describe('webpack base test case', () => {
    const baseConfig = require('../../lib/webpack.base')
    console.log(baseConfig)
    // 'E:/code/webpack-project/builder-webpack/test/smoke/template/src/index/index.js'
    // 'E:/code/webpack-project/builder-webpack/test/smoke/template/src/search/index.js'
    it('entry', () => {
        assert.equal(baseConfig.entry.index, 'E:/code/webpack-project/builder-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, 'E:/code/webpack-project/builder-webpack/test/smoke/template/src/search/index.js')
    })
})