# Peter Fisher

## Deployment
1. Clean the local build `gatsby clean`
2. Build the site locally `gatsby build`
3. Create a `.env` file in `/bin/` with the following variables
```bash
SERVER=<SERVER_HOST_FROM_SSH_CONFIG>
SERVER_PATH="/absolute/path/to/website/on/remote/host"
RELEASE_PATH=/releases
CURRENT_PATH=/current
SLIDE_PATH=/slides
LOCAL_TALK_PATH=/local/path/to/slides.html
LOCAL_PATH=/local/path/to/build
```

2. Change to bin folder `cd bin`
3. Export env variables `export $(grep -v '^#' .env | xargs -0)`
4. Run deployment script `./deploy.sh`

gatsby clean && gatsby build && ./bin/deploy.sh

## Commands

### Run prettier

Runs prettier using the `.prettierrc` config.  It will output all the errors that need to be fixed.

```bash
npm run prettier
```

### Fix prettier errors

Attempts to fix issues found by prettier using the `.prettierrc` config.

```bash
npm run fix-prettier
```

### Run ESLint

Runs ESLint using the `.eslint.json` config. It will output all the errors that need to be fixed.

```bash
npm run lint
```

### Run all test commands

Runs TypeScript checks, prettier and ESLint.

```bash
npm run test
```