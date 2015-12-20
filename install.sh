#!/bin/bash

platform=`uname`

# install node_modules only for supported platforms
# Linux, Mac(Darwin), Windows
if [[ $platform == 'Linux' || $platform == *Darwin* || $platform == *NT-6\.1* ]] ; then
  npm install || {
    echo "npm install failed"
  }
fi

bower install

exit 1
