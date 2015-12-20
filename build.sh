#!/bin/bash

# This script builds all syngular modules. Script usage:
# ./build.sh - interactive execution
# additional parameters
# --quiet - rebuild & deploy all modules without asking user
# --local-grunt - use grunt directly form node_modules. Shared env friendly
# --build-flag="<flags>" - flag that are used on grunt build

# moving to script location
LOCATION="$( dirname "${BASH_SOURCE[0]}" )";
cd $LOCATION

start_location=`pwd`

mode="standard"
grunt="grunt"
buildFlags=""

for var in "$@"; do
  case "$var" in
    --quiet )
      mode='quiet';
      ;;
    --local-grunt )
      grunt="`npm bin`/grunt";
      ;;
    --build-flag=* )
      buildFlags=$(echo $var | sed 's/--build-flag=//g');
      ;;
    * )
      echo "'$var' is invalid argument, exiting";
      exit;
      ;;
  esac
done

echo "Build in $mode mode, using '$grunt'"

basedir=${PWD##*/};
if [ "$basedir" != "syngular-dev" ]; then
  echo "Unexpeceted location - you are probably not in expeted place: "
  echo "current folder is called $basedir, and not 'syngular-dev'"

  if [ "$basedir" == "syngular" ]; then
    echo "during build we try to remove '../public/syngular' folder"
    echo "Executing build from folder called syngular is really wrong idea"
    echo "exiting"
    exit
  fi

  if [ "$mode" != "quiet" ]; then
    read -r -p "Build in nonstandard location? [y/N]" nonstandartLocation
    response=${nonstandartLocation:-n}
  else
    echo "Build in nonstandard location!"
    response='y'
  fi

  if [ "$response" == "y" ]; then
    echo "Ok, build continue"
  else
    echo "exiting"
    exit
  fi
fi

shopt -s extglob # extend globing

echo "Rebuild all modules!"
response='y'

# create a folder if missing
[ -d dist ] || mkdir dist

# clean up dist folder
cd dist
rm -rf !('.gitignore')
cd ..

mkdir 'dist/scripts'
mkdir 'dist/scripts/main'
mkdir 'dist/views'
mkdir 'dist/vendor'

# describe version
echo "========syngular=======" > dist/version.info
echo "Branch: $(git rev-parse --abbrev-ref HEAD)" >> dist/version.info
echo "Commit: $(git rev-parse HEAD)" >> dist/version.info
echo "Build time" >> dist/version.info
date +"%a %b %d %H:%M:%S %Z %Y" >> dist/version.info

echo "Built version"
cat dist/version.info

for module in `./get-modules.sh`; do
  printf '=%.0s' {1..80}; echo '';
  printf '=%.0s' {1..80}; echo '';
  echo "Build $module module"
  printf '=%.0s' {1..80}; echo '';
  printf '=%.0s' {1..80}; echo '';

  # build syngular
  cd $module

  if $rebuild; then
    # remove dist only if module are rebuild
    rm dist -r
    if grunt build --gruntfile $start_location/Gruntfile-module.js --base $start_location/$module --basePath=$module $buildFlags; then
      printf '=%.0s' {1..80}; echo '';
      printf '=%.0s' {1..80}; echo '';
      echo "$module built succesfully"
      printf '=%.0s' {1..80}; echo '';
      printf '=%.0s' {1..80}; echo '';
    else
      printf '=%.0s' {1..80}; echo '';
      printf '=%.0s' {1..80}; echo '';
      echo "$module built failed, exiting"
      printf '=%.0s' {1..80}; echo '';
      printf '=%.0s' {1..80}; echo '';
      exit 1
    fi
  fi
  cd $start_location

  # Copy modules
  cp ${module}/dist/styles dist -r
  cp ${module}/dist/images dist -r
  cp ${module}/dist/scripts/ dist/scripts/${module} -r
done

grunt build

# pack js and css files
grunt build --gruntfile Gruntfile-resources.js

# Export syngular packet to outside world
#if [ "$mode" != "quiet" ]; then
#  read -r -p "Deploy built version to ../webapp/static/syngular [y/N]" deploy
#  response=${deploy:-n}
#else
#  echo "Deploy built version to ../webapp/static/syngular-test!"
#  response='y'
#fi

# move to production server folder
rm ../webapp/static/syngular -rf # bug
rm ../webapp/static/syngular -rf
cp -R dist/ ../webapp/static/syngular/

# move to server target folder
#rm ../../../target/classes/public/syngular -rf # bug
#rm ../../../target/classes/public/syngular -rf
#cp -R dist/ ../../../target/classes/public/syngular/

#cp ../webapp/static/index.html ../../../target/classes/public/index.html

# copy files to tmp server
#grunt copy:target