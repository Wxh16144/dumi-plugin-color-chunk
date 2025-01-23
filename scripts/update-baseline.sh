#!/bin/bash
set -e

# docker build --build-arg CHROME_VERSION=dev -t test-chrome-for-testing .

docker build -f Cypress.Dockerfile \
  -t self-cypress-chrome-for-testing \
  --build-arg CHINA_MIRROR=$CHINA_MIRROR \
  .

# docker run --rm --entrypoint bash test-chrome-for-testing -c "pnpm run test:e2e:update"
docker run --rm \
  -v ./cypress-image-diff:/opt/app/cypress-image-diff \
  -w /opt/app \
  --entrypoint bash \
  self-cypress-chrome-for-testing \
  -c "pnpm run test:e2e:update --browser electron"
