import { Stack, StackProps } from 'aws-cdk-lib';
import { ManualApprovalAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import {
  CodePipeline,
  CodePipelineSource,
  ManualApprovalStep,
  ShellStep,
} from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { MyPipelineStage } from './stage';

export class CiCdAwsPipelineDemoCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyFirstPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub(
          'rupeshtiwari/ci-cd-aws-pipeline-demo-cdk',
          'main'
        ),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });

    // Add Test Stage 
    const testingStage = pipeline.addStage(
      new MyPipelineStage(this, 'test', {
        env: { account: '899252663854', region: 'us-east-1' },
      })
    );
    // Add Approval Stage
    const approval = testingStage.addPost(new ManualApprovalStep('Manual Approval Before Production Stage')); 

    // Add Prod Stage 
    const prodStage = pipeline.addStage(
      new MyPipelineStage(this, 'prod', {
        env: { account: '899252663854', region: 'us-east-1' },
      })
    );

    
  }
}
