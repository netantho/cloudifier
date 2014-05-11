module.exports = (sails) ->
  return {
    initialize: (cb) ->
      sails.config.aws =
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
