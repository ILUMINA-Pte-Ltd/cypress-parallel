## [1.0.2](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/compare/v1.0.1...v1.0.2) (2025-10-09)

### Bug Fixes

* add default values for command line options in settings ([dd7cebd](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/dd7cebd9c94d9424c296a5fd1144f60cd3d8b67f))
* correct spelling of getMaxPathLengthFrom function in test-suites.js and cli.js ([7ada522](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/7ada522f75f1ee8dbd618f733533c80a6cc8e0c8))
* support backward compability when still pass array and new comma seperated string ([22ee5e1](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/22ee5e1eb9ca984c887cd69b8232f488caf27957))
* update test suite path handling to enforce glob patterns and deprecate directory paths and spec split by comma seperated ([a02c6d9](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/a02c6d9910881cbfa3642bf2d1da92d7c98f54bd))
* update yargs initialization to use hideBin for improved argument parsing ([5be5ab5](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/5be5ab5b2ff0c17c93289cbd815fddacb8cf2cca))

## [1.0.1](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/compare/v1.0.0...v1.0.1) (2025-10-08)

### Bug Fixes

* update package.json bin path and enhance release workflow [ci skip] ([569a361](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/569a361fcab8daf4de9163bc1bfe8d9bd12a2f43))

## 1.0.0 (2025-10-08)

### ⚠ BREAKING CHANGES

* new package fork from original

* Merge pull request [#1](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/issues/1) from ILUMINA-Pte-Ltd/chore/fork-package ([1df406d](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/1df406d1b0173cd60199506322d0ca1ed0880dfc))

### Features

* Add GitHub Actions workflow for releasing lib package ([bbb72c5](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/bbb72c5f9d1afae407840ce05bb0ddcae9dba412))
* add mono-repo support under alias n ([5a0fff5](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/5a0fff593968e0e50be54934d89cfba494a8354b))
* add mono-repo support with reporterModulePath ([d34e186](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/d34e1860b1c027476cfba1e25d70a79d7c84d736))
* add reporter option ([49ea835](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/49ea83579d67b2b6a1a338565f31ac50528b778e))
* adding strict mode ([512738a](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/512738a793d57151907dfd7b2095b4d4565f2306))
* exit process when a test fails ([794fa90](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/794fa906e293dab681dd9301f467f9655e1573f6))

### Bug Fixes

* force the files to have unix eols ([4520c97](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/4520c975a7f26e748f08dee946eaca9171803528))
* handle forward and backward slash in path for filename ([26f5077](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/26f50771835be041b4c511c57e24bd5bdf682e86))
* miss dep semantic-release [ci skip] ([3fdb7c6](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/3fdb7c6a1f3e203d1b1ee348912d8f7bdddeef51))
* package-lock sync ([0b6bea9](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/0b6bea9cf9744d214f3d162e1140182e301c5cb7))
* reading settings from reporter throwed error ([0043dda](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/0043dda0618cd619c6db65ff2dabcadcbb55dbf5))
* use cross-spawn to fix windows issues ([68ab529](https://github.com/ILUMINA-Pte-Ltd/cypress-parallel/commit/68ab5290a0e7ba29ee1958ff5e3849b9ebdc8d26))
