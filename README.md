# Cloudifier

[![Build Status](https://travis-ci.org/netantho/cloudifier.svg?branch=master)](https://travis-ci.org/netantho/cloudifier)
[![Dependency Status](https://www.versioneye.com/user/projects/534254f6e97a465ad90001ea/badge.png)](https://www.versioneye.com/user/projects/534254f6e97a465ad90001ea)
[![Dependency Status](https://www.versioneye.com/user/projects/53425514e97a46adb0000173/badge.png)](https://www.versioneye.com/user/projects/53425514e97a46adb0000173)

Cloudifier provides a web interface to help you manage your cloud hosting (currently only AWS).
We rely on [sails](http://sailsjs.org) for the backend and [angular](http://angularjs.org/) for the frontend.

## Installation

- Install [node.js](http://nodejs.org/) and [mongodb](http://www.mongodb.org/)
- Install javascript dependencies with ```npm install```
- create a config/aws.json file with your AWS keys

  `{ "accessKeyId": "akid", "secretAccessKey": "secret", "region": "us-west-2" }`

- Launch the server with ```sails lift```
- Go to [http://localhost:1337](http://localhost:1337)

## License

This is project is under the [MIT](https://github.com/netantho/cloudifier/blob/master/LICENSE) license.
