#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdAwsPipelineDemoCdkStack } from '../lib/ci-cd-aws-pipeline-demo-cdk-stack';

const app = new cdk.App();
new CiCdAwsPipelineDemoCdkStack(app, 'CiCdAwsPipelineDemoCdkStack', {
  env: { account: '899252663854', region: 'us-east-1' },
});