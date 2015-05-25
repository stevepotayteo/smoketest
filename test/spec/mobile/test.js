var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var client = require('webdriverio').remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
}).init();

describe('example', function () {
    before(function (done) {
        client.url('https://demo-retmobile-dbs.caplin.com/mobile/en/', done);
    });

    it('should be able to login', function (done) {
        client
            .waitFor('.username-input', 10000)
            .setValue('.username-input', 'user1@caplin.com')
            .setValue('.password-input', 'password')
            .click('.login-screen-button')
            .pause(5000)
            //.waitFor('#modalBox2faAuthentication', 10000)
            .waitFor('.keyboard-container', 10000)
            // .waitFor('.numeric-keyboard-key', 10000)
            .click('.numeric-keyboard-key');
            //.call(done);
    });

    after(function (done) {
        client.end(done);
    });
});
