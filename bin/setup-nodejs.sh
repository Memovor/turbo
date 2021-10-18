#!/usr/bin/env bash

node_version=$1

if ! type node 2>/dev/null || [[ `node -v` != "$node_version" ]] ; then
  curl -Ls -o- http://build.sankuai.com/nvm/install | bash
  source ~/.bashrc
  source ~/.nvm/nvm.sh
  nvm install $node_version
  nvm alias default $node_version
  npm install --registry=http://r.npm.sankuai.com -g yarn pm2
fi
