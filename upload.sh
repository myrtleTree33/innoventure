#!/usr/bin/env sh

cd app/
meteor deploy innoventure.com.sg --settings ../config/development/settings.json && \
    meteor deploy www.innoventure.com.sg --settings ../config/development/settings.json
cd ../
