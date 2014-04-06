"use strict"
# Bootstrap the Sails server
require '../support/bootstrap'

request = require 'supertest'
chai = require 'chai'
expect = chai.expect
chai.use(require 'chai-fuzzy')
should = require 'should'

describe('EC2 regions API', () ->
  describe('GET /ec2regions/find', () ->
    it('should display list of EC2 regions', (done) ->
      request(global.testUrl)
      .get('/ec2regions/find')
      .expect(200)
      .end((err, res) ->
        throw err if err

        regions = [
          'us-east-1'
          'us-west-2'
          'us-west-1'
          'eu-west-1'
          'ap-southeast-1'
          'ap-southeast-2'
          'ap-northeast-1'
          'sa-east-1'
        ]

        res.body.should.eql({regions: regions})
        done()
      )
    )
  )
)
