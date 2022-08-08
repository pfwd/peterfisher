export $(grep -v '^#' .env | xargs -0)
CURRENT_DATE=$(date "+%Y%m%d%H%M%S")

echo "Coping local slides"
cp -Rv ../src/static/slides/* ../public/slides/


echo "Attempting to deploy to ${SERVER_PATH}/${RELEASE_PATH}/${CURRENT_DATE} to $SERVER"

scp -r ${LOCAL_PATH} ${SERVER}:${SERVER_PATH}/${RELEASE_PATH}/${CURRENT_DATE}

ssh -t ${SERVER} "cd ${SERVER_PATH} && rm current && ln -s releases/${CURRENT_DATE} current"

echo "Deployed to ${SERVER_PATH}/${RELEASE_PATH}/${CURRENT_DATE}"

echo "Done"