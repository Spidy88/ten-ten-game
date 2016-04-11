"use strict";

// TODO: Get transpiled source code so tests can run with ES6 source code

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const should = chai.should();
chai.use(sinonChai);

import TenTenGame from '../app/ten-ten-game';

describe('TenTenGame', function() {
    let tenTen;

    describe('api', function() {
        beforeEach(function() {
            tenTen = new TenTenGame();
        });

        it('should have getPlayfield()', function() {
            tenTen.should.respondTo('getPlayfield');
        });

        it('should have getPlayerPieces()', function() {
            tenTen.should.respondTo('getPlayerPieces');
        });

        it('should have isGameOver()', function() {
            tenTen.should.respondTo('isGameOver');
        });
    });
});