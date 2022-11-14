#!/usr/bin/env bash 

# Global colors
green="$bold$(tput setaf 2)"              # bright green text
darkcyan=$(tput setaf 6)                  # dim cyan text

echo "${darkcyan}[START] Generating build and submit credentials"
echo ${ENVIRONMENT}

eas secret:push --scope project --env-file .env --force

echo "${green}[SUCESS] Generating build and submit credentials"

eas secret:list