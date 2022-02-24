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