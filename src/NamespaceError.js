'use strict';

exports = module.exports = NamespaceError;

/**
 * @param message
 * @param id
 * @constructor
 * @extends {Error}
 */
function NamespaceError(message, id) {
    this.message = message;
    this.id = id;
}

/**
 * @type {Error}
 */
NamespaceError.prototype = new Error();