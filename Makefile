help: ## Show this help
	@echo "\nUsage:\n\n  make [target]\n\nTargets:\n"
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/\(.*\):.*##[ \t]*/  \1 ## /' | column -t -s '##'
	@echo

build: ## Build container
	docker build -t balintsoos/node-lotto:latest .

start: ## Start container
	docker run --rm balintsoos/node-lotto:latest input.txt
