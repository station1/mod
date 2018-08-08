const expect = require('chai').expect;
const mod= require("./../index.js");


describe('mod()', () => {

    it('promise should work', async () => {

        const result = await mod();

        expect(1).to.be.equal(1);
    });

});


