const assert = require('assert')
describe('webpack base test case', () => {
    const baseConfig = require('../../lib/webpack.base')
    console.log(baseConfig)
    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexof('/test/smoke/template/src/index/index.js') > -1)
        assert.equal(baseConfig.entry.search.indexof('/test/smoke/template/src/search/index.js') > -1)
    })
})