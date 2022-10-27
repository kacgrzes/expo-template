<!-- README document about scrips used in the template to perform build / upload / submit process -->

# About scripts used in this template

## 1. `generate_dotenv.sh`

`generate_dotenv.sh` script is used to prepare `.env` with desire environment variables depending on desirable environment app should work.

### 1.1. To execute `generate_dotenv.sh` script following steps has been done:

1.1. Create `.env` files corresponding to the environment (`.env.production`,`.env.qa`,`.env.staging`)

1.2. Each of newly created files should consist at least one variable `ENVIRONMENT`.

Accordingly to environment value should be `production`,`qa` or `staging`

### 1.2. Configuration of `.env` files

You should pass environment variables to files provided in 1.1. which follow `.env` file rules

Each `.env` file has included `ENVIRONMENT` variable to allow use proper configuration in build process.

Values of the `ENVIRONMENT` variable should always be passed to `.env` file and have following values depending of environment `production`, `qa` or `staging`.

### 1.3. Running `generate_dotenv.sh` script

This script has to be executed with environment passed as an argument

for example `./scripts/generate_dotenv.sh qa`

Environment argument could be production, qa or staging

## 2. `upload_env.sh`

`upload_env.sh` script is used to upload proper environment variables to eas tool (tool to build and submit the app).

This script should be executed after `generate_dotenv.sh` and before executing `eas build / update`.

## The above scripts are used by following scripts in `package.json` file.

```
yarn prepare:production
yarn prepare:qa
yarn prepare:staging
```
