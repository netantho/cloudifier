module.exports = (sails) ->
  return {
    initialize: (cb) ->
      if sails.config.environment == 'test'
        AWS = require '../../test/mocks/aws'
      else
        AWS = require 'aws-sdk'
        AWS.config.loadFromPath 'config/aws.json'

      sails.config.aws =
        module:
          AWS: AWS
          ec2: new AWS.EC2()
        ec2:
          regions: [
            "us-east-1"
            "us-west-2"
            "us-west-1"
            "eu-west-1"
            "ap-southeast-1"
            "ap-southeast-2"
            "ap-northeast-1"
            "sa-east-1"]
      cb()
  }
