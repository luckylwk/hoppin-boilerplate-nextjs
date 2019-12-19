.PHONY: install build dev start test test/ci test/pretty test/proxy test/local-proxy lint pretty deploy

install:
	yarn install

build:
	yarn build

dev:
	yarn dev

start:
	make dev

test:
	make lint
	yarn test

test/ci:
	make lint
	yarn test/ci

test/pretty:
	yarn pretty/test

test/proxy:
	now dev

test/local-proxy:
	node build.local.now.js
	now dev --local-config now.dev.json

lint:
	yarn lint

pretty:
	yarn pretty

deploy:
	now switch hoppin
	now --prod
