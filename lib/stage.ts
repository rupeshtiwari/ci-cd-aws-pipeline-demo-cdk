import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyLambdaStack } from './lambda-stack';

export class MyPipelineStage extends Stage {
  constructor(scope: Construct, stageName: string, props?: StageProps) {
      super(scope, stageName, props);
      
      const lambdaStack = new MyLambdaStack(this, 'LambdaStack', stageName);
  }
}
