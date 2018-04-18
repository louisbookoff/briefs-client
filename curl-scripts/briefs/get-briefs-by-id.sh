#!/bin/bash

curl "http://localhost:4741/briefs"/${ID} \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
