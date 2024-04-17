install:
		npm ci

lint:
		npx eslint .

lint-fix:
		npx eslint . --fix

test:
	node __tests__/index.js
.PHONY: install lint lint-fix test