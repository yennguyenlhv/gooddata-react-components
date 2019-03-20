#!/usr/bin/env bash

set -v
export HEROKU_APP_NAME="gdc-live-examples-$PULL_REQUEST_ID"

# create new app or add the missing remote
heroku create $HEROKU_APP_NAME
heroku git:remote -a $HEROKU_APP_NAME
heroku config:set DOMAIN_ADMIN_USERNAME=nthyen+2@lhv.vn DOMAIN_ADMIN_PASSWORD=changeit PROJECT_ID_TO_ASSIGN=kapunjl01o2xm7oy0xo88uagoigce6iq > /dev/null
git remote -v

# deploy
git push "https://rail%40gooddata.com:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git" HEAD:refs/heads/master --force 2>&1 | sed "s/$HEROKU_API_KEY/xxx/"
if [ $? -ne 0 ]; then
    echo "Error: Push not successful, possibly failing build. Exiting..."
    exit 1
fi;

# test
yarn -s examples-testcafe-ci \
    --url https://$HEROKU_APP_NAME.herokuapp.com \
    --username rail+testcafe@gooddata.com \
    --password $LIVE_EXAMPLES_TESTER_PASSWORD
