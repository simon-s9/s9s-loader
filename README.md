# s9s-loader
[![Build Status](https://travis-ci.org/simon-s9/s9s-loader.svg?branch=master)](https://travis-ci.org/simon-s9/s9s-loader)

A Simple namespace loader. It loads ```.js``` files from provided path and builds a tree structure of modules and Namespaces with sub-modules.

## Installation
```bash
npm install s9s-loader
```

## Usage
```javascript
'use strict';

var NamespaceLoader = require('s9s-loader');
var Severalnines = new NamespaceLoader(__dirname + '/src/Severalnines');

var myModule = new Severalnines.ModuleName();
```

## License

Copyright (c) 2016 Severalnines AB

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
