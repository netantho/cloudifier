###
bootstrap-aws.coffee

@description :: Bootstrap AWS global objects
###

module.exports =
  AWS: require('aws-sdk')
  ec2: () ->
  	new @AWS.EC2()
