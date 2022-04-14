import { Stack, StackProps } from 'aws-cdk-lib';
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

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
  }
}
