# Bootstrap the Sails server
require '../support/bootstrap'

request = require 'supertest'
chai = require 'chai'
expect = chai.expect
chai.use(require 'chai-fuzzy')

describe('EC2 regions API', () ->
  describe('GET /ec2regions/find', () ->
    it('should display list of EC2 regions', (done) ->
      request(global.testUrl)
        .get('/ec2regions/find')
        .expect(200, () ->
          done()
        )
    )
  )
)
