import { aws_lambda as lambda, Stack, StackProps } from 'aws-cdk-lib';
import { Code } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as path from 'path';

export class MyLambdaStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    stageName: string,
    props?: StackProps
  ) {
    super(scope, id, props);
    new lambda.Function(this, 'LambdaFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler.handler',
      code: Code.fromAsset(path.join(__dirname, 'lambda')),
      environment: { stageName: stageName },
    });
  }
}
