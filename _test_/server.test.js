'use strict';

const app=require('../src/server');
const supertest=require('supertest');
const request=supertest(app.app);

describe('Middleware',()=>{
    it('should test that every thing is working fine',async()=>{
        let status=200;
        let param='/';
        let text='Hello world'
        const respons=await request.get(param);
        expect(respons.status).toBe(status);
        expect(respons.text).toBe(text);
    });

    it('should test error of not found',async()=>{
        let status=404;
        let param='/error';
        const respons=await request.get(param);
        expect(respons.status).toBe(status);
       
    });

    it('should test handelar error ',async()=>{
        let status=404;
        let param='/bad';
        const respons=await request.get(param);
        expect(respons.status).toBe(status);
       
    });

    it('should test data response ',async()=>{
        let status=404;
        let param='/status';
        const respons=await request.get(param);
        expect(respons.status).toBe(status);
        expect(typeof respons.body).toEqual('object');
       
    });

    it('should test data respons',async()=>{
        let status=200;
        let param='/person?name=suad';
        const respons=await request.get(param);
        expect(respons.status).toBe(status);
        expect(typeof respons.body).toEqual('object');
       
    })
})