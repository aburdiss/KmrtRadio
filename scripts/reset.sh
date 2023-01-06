#!/bin/bash
# reset.sh
# Author: Alexander Burdiss
# Since: 1/6/23
# Version: 1.0.0
# Description: Does a basic reset of a React Native project

watchman watch-del-all
npm start -- --reset-cache
