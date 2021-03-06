#!/bin/bash

curl "https://briefs-server.herokuapp.com/briefs" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "brief": {
      "title": "'"${TITLE}"'",
      "subject": "'"${SUBJECT}"'",
      "body_text": "'"${BODY_TEXT}"'",
      "created_at": "'"${CREATED_AT}"'",
      "updated_at": "'"${UPDATED_AT}"'"
    }
  }'

echo
