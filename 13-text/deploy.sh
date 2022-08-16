#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'chad.is-a-dev' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/djsnipa1/threejsjourney main:gh-pages

cd -
