.PHONY: docs

docs:
	jsdoc2md index.js > docs/index.md
	jsdoc2md Matrix3.js > docs/Matrix3.md
	jsdoc2md Random.js > docs/Random.md
