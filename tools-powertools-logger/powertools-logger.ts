﻿// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger';
import middy from '@middy/core';

const logger = new Logger({
  logLevel: 'INFO',
  serviceName: 'shopping-cart-api',
});

const lambdaHandler = async (): Promise<void> => {
  logger.info('This is an INFO log with some context');
};

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));
