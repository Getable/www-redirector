# www-redirector  [![Build Status][travis-image]][travis-url]

Redirect to www.getable.com

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
- [Events](#events)
- [Tests](#tests)
- [Developing](#developing)
  - [Requirements](#requirements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S @getable/www-redirector
```


## Usage

```js
import getable-wwwRedirector from '@getable/www-redirector'

getable-wwwRedirector('Rainbow')
```

## Methods
### get `(<String> string)`
Returns the string passed to it.

## Events
### myEvent `(<String> myString)`
Emitted when x happens. Passes `myString` which is a y.

## Tests
Tests are in [tape](https://github.com/substack/tape).


* `npm test` will run the tests
* `npm run tdd` will run the tests on every file change.

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Joey Baker](http://byjoeybaker.com) and contributors. A copy of the license can be found in the file `LICENSE`.


[npm-url]: https://npmjs.org/package/@getable/www-redirector
[npm-image]: https://badge.fury.io/js/%40getable%2Fwww-redirector.svg
[travis-url]: https://travis-ci.org/Getable/www-redirector
[travis-image]: https://travis-ci.org/Getable/www-redirector.svg?branch=master
[daviddm-url]: https://david-dm.org/Getable/www-redirector.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/Getable/www-redirector
