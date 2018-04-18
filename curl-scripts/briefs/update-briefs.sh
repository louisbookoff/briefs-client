#!/bin/bash

curl "http://localhost:4741/briefs/${ID}" \
  --include \
  --request PATCH \
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
