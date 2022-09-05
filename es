#!/bin/bash

pnpm add -D eslint eslint-plugin-react eslint-plugin-react-hooks@latest

./node_modules/.bin/eslint --init

sed -i 's/"plugin.*ded"/\"plugin:react\/recommended\",\n\t\"plugin:@typescript-eslint\/recommended\"/g' .eslintrc.json

sed -i 's/"plugins".*/\"plugins\": [\n\t\"react-hooks\"\,/g' .eslintrc.json

sed -i 's/"rul.*/\"rules\": {\n\t\"react-hooks\/rules-of-hooks\": \"error\", \/\/ Checks rules of Hooks\n\t\"react-hooks\/exhaustive-deps\": \"warn\", \/\/ Checks effect dependencies\n\t\"react\/react-in-jsx-scope\": \"off\",\n\t\"react\/jsx-filename-extension\": [1, { \"extensions\": [\".ts\", \".tsx\"] }]/g' .eslintrc.json
