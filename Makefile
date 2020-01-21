.PHONY: install clean build dev test test/ci test/pretty test/proxy test/local-proxy lint pretty deploy

install:
	yarn install

clean:
	rm -rf node_modules;
	ls;

build:
	yarn build

dev:
	yarn dev

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
