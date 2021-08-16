'use strict';
const { describe, beforeEach, afterEach } = require('@jest/globals');
const { request } = require('express');
const loggerMiddleware=require('../src/error-handelars/middleware/logger');

describe('logger middleware',()=>{
    let consoleSpy;
    let req={};
    let res ={};
    let next=jest.fn();

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(()=>{
        consoleSpy.mockRestore();
    });

    it ('should log to console ' ,()=>{
        loggerMiddleware(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('Should Move To The Next Middle Ware', () => {
        // act
        loggerMiddleware(req, res, next);
        // assert
        expect(next).toHaveBeenCalledWith();
    });
})