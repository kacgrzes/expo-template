#!/usr/bin/env bash 
ENVIRONMENT=$1
echo $ENVIRONMENT

cp .env.$ENVIRONMENT .env
