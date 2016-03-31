'use strict';

const assert = require('assert');
const NamespaceError = require('../src/NamespaceError');

describe('NamespaceError', function () {
    var error = new NamespaceError('error_message', 1);

    it('Should be an instance of Error', function () {
        assert.strictEqual(new NamespaceError instanceof Error, true);
    });

    it('Should throw a NamespaceError', function () {
        assert.throws(
            function () {
                throw error;
            },
            NamespaceError
        );
    });

    it('Should have a message', function () {
        assert.strictEqual(error.message, 'error_message');
    });

    it('Should have an id', function () {
        assert.strictEqual(error.id, 1);
    });
});
