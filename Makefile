.DEFAULT_GOAL := help
.PHONY: help setup dev build preview lint typecheck check ci clean

help: ## Show available targets
	@grep -E '^[a-z]+:.*## ' $(MAKEFILE_LIST) | awk -F':.*## ' '{printf "  %-10s %s\n", $$1, $$2}'

setup: ## Install dependencies from the lockfile
	npm ci

dev: ## Start the local dev server (http://localhost:4321)
	npm run dev

build: ## Build the static site into dist/
	npm run build

preview: build ## Build, then serve dist/ locally
	npm run preview

lint: ## Run ESLint
	npm run lint

typecheck: ## Run astro check
	npm run typecheck

check: lint typecheck ## Run lint and type checks

ci: setup check build ## Run what CI runs: install, lint, typecheck, build

clean: ## Remove build output, caches and node_modules
	rm -rf dist .astro node_modules
