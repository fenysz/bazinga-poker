#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR
#killall node
#node player_service.js &
npm install
nodejs player_service.js &

echo $! > express.pid
