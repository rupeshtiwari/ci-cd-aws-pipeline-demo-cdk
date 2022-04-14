# CI/CD demo

![](https://i.imgur.com/tPl5sCc.png)

- Create GitHub PAT ( select `repo` and `admin:repo_hook`)
- Create `github-token` secrete as plain text in AWS secrete manager. By default this is what CDK uses when communicating to GitHub and AWS. 
- Create a lambda stack that provisions a lambda function on AWS. 

![](https://i.imgur.com/eJyL9el.png)

Notice the lambda function got created 


![](https://i.imgur.com/6Tnan5N.png)


## Welcome to your CDK TypeScript project

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
