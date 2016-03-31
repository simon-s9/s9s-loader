'use strict';

exports = module.exports = Namespace;

const fs = require('fs');
const NamespaceError = require(__dirname + '/NamespaceError');

/**
 * @param {String} [path]
 * @constructor
 * @extends {Object}
 * @exports
 */
function Namespace(path) {
    if (path !== undefined) {
        this.load(path);
    }
}

/**
 * @type {Object}
 */
Namespace.prototype = {};

/**
 * Load files from path
 * @param {String} path
 * @trows NamespaceError
 */
Namespace.prototype.load = function (path) {
    try {
        var files = fs.readdirSync(path);
    } catch (error) {
        throw new NamespaceError('Failed to load files from ' + path);
    }
    var $this = this;
    files.forEach(function (file) {
        var stat = fs.statSync(path + '/' + file);
        if (stat.isDirectory()) {
            $this[file] = new Namespace(path + '/' + file);
        } else if (stat.isFile()) {
            $this.__defineGetter__(file.replace('.js', ''), function () {
                return require(path + '/' + file);
            });
        } else {
            throw new NamespaceError('Unrecognized type: ' + file);
        }
    });
};

/**
 * @param name
 * @returns {boolean}
 */
Namespace.prototype.hasModule = function (name) {
    return name in this;
};

/**
 * @param name
 * @returns {*}
 * @throws NamespaceError
 */
Namespace.prototype.getModule = function (name) {
    if (this.hasModule(name)) {
        return this[name];
    }
    throw new NamespaceError('Module not found');
};
