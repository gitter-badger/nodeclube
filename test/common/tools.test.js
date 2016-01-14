/*!
 * nodeclub - onehost plugins unit tests.
 * Copyright(c) 2012 dead-horse <dead_horse@qq.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var tools = require('../../common/tools');

describe('test/common/tools.test.js', function () {
  it('should format date', function () {
    tools.formatDate(new Date(0)).should.match(/19\d\d\-\d\d\-\d\d \d\d:00/);
  });
  it('should format date friendly', function () {
    tools.formatDate(new Date(), true).should.equal('poucos segundos atrás');
  });
});
