# ukrainium-app

## Install
* make sure you have bower and yarn installed
`npm install -g bower`
`npm install -g yarn`

* install dependancies:
`bower install && yarn install`

## Run Locally
`gulp serve`

## Deploy Live
* to deploy to s3 (http://ukrainium.com) make sure you have an aws credential profile in ~/.aws/credentials like:
```
[ukrainium-deploy]
aws_access_key_id=ABCDEFG
aws_secret_access_key=ABCDEFG
```

* then to actually perform the push to s3 run:
`gulp deploy`
