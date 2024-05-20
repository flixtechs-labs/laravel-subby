#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn vuepress build

# navigate into the build output directory
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:flixtechs-labs/laravel-subby.git main:gh-pages

cd -
