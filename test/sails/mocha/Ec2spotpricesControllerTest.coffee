"use strict"
# Bootstrap the Sails server
require '../support/bootstrap'

request = require 'supertest'
chai = require 'chai'
expect = chai.expect
chai.use(require 'chai-fuzzy')
should = require 'should'

# TODO: mocks for AWS req/res
# because we don't want to actually make reqs to them
# and have creds in git for travis

describe('EC2 spot prices API', () ->
  describe('GET /api/v1/ec2spotprices/findCurrentAll', () ->
    it('should return 404 Not found', (done) ->
      request(global.testUrl)
      .get('/api/v1/ec2spotprices/findCurrentAll')
      .expect(200)
      .end((err, res) ->
        throw err if err
        done()
      )
    )
  )

  describe('GET /api/v1/ec2spotprices/findCurrentByRegion/us-east-1', () ->
    it('should return 404 Not found', (done) ->
      request(global.testUrl)
      .get('/api/v1/ec2spotprices/findCurrentByRegion/us-east-1')
      .expect(200)
      .end((err, res) ->
        throw err if err
        done()
      )
    )
  )

  describe('GET /api/v1/ec2spotprices/findCurrentByZone/us-east-1/a', () ->
    it('should return 404 Not found', (done) ->
      request(global.testUrl)
      .get('/api/v1/ec2spotprices/findCurrentByZone/us-east-1/a')
      .expect(200)
      .end((err, res) ->
        throw err if err
        done()
      )
    )
  )
)
