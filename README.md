<p align="center">
  <a href="https://climeinvest.co/" target="blank"><img src="https://i.postimg.cc/Pxn1BCXF/Isotype-rounded.png" width="200" alt="Climeinvest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Climevest - First class climate assets investments.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Climevest LP repository.

## Prerequisites

- Node.js (v14 or higher).
- Typescript (v4 or higher)
- Browser to run the app.

## Installation

1. Clone the repository on your machine:

```bash
git clone https://github.com/Climevest/lp.git
```

2. Change to the project directory:

```bash
cd website
```

3. Install the dependencies:

```bash
yarn install
```

## Setup

Create the `.env` file with the required environment variables from the `.env.example` file by running:

```bash
cp .env.example .env
```

Remember to replace the dummy values with real values for each variable.

## Running the app

### Development

Run the development environment using Docker Compose:

```bash
yarn start
```

The app will be accessible at http://localhost:3000.

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Managing releases

Each new release of major, minor or patches versions of Climeinvest follow a release procedure summarized as follows:

1. Update repository docs with the new release details:

   1.1. Update the `package.json` with the new release version. We follow the [Semantic Versioning](https://semver.org/) standard for defining each version of the app.

   1.2. Update the `CHANGELOG.md` file with the additions and changes of the release.

2. Tag and push the new release (use the prefix `v` before the version number):

   ```bash
   git tag v[major.minor.patch]
   git push origin v[major.minor.patch]
   ```

   An example for `v[major.minor.patch]` could be: `v1.0.2`.

3. Create the release on Github repository and specify the title and content. Follow Github's [Managing releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository?tool=webui) docs for guidance on this.

4. Proceed to deploy on our cloud providers.

## Stay in touch

- Author - [Clemente Sutil](https://github.com/ClementeSerrano)
- Website - [https://climeinvest.co](https://climeinvest.co)
- Twitter - [@Climevest](https://twitter.com/Climevest)

## License

Climeinvest is [MIT licensed](LICENSE).
