'use strict';

const assert = require('assert');
const NamespaceError = require('../src/NamespaceError');
const NamespaceLoader = require('../src/NamespaceLoader');

describe('NamespaceLoader', function () {
    /**
     * @type {{}|Namespace}
     * @property {Function} Module
     * @property {Namespace} ModuleNamespace
     */
    var s9s = new NamespaceLoader(__dirname + '/src/s9s');

    it('Should be a Function', function () {
        assert.strictEqual(typeof(NamespaceLoader), 'function');
    });

    it('Should implement "load" method', function () {
        assert.strictEqual(typeof(NamespaceLoader.prototype.load), 'function');
        assert.strictEqual(typeof((new NamespaceLoader()).load), 'function');
    });

    it('Should implement "hasModule" method', function () {
        assert.strictEqual(typeof(NamespaceLoader.prototype.hasModule), 'function');
        assert.strictEqual(typeof((new NamespaceLoader()).hasModule), 'function');
        assert.strictEqual(s9s.hasModule('Module'), true);
        assert.strictEqual(s9s.hasModule('NotExistingModule'), false);
    });

    it('Should implement "getModule" method', function () {
        assert.strictEqual(typeof(NamespaceLoader.prototype.getModule), 'function');
        assert.strictEqual(typeof((new NamespaceLoader()).getModule), 'function');
        assert.strictEqual(typeof(s9s.getModule('Module')), 'function');
        assert.strictEqual(s9s.getModule('Module')(), true);
        assert.strictEqual(s9s.Module(), true);
    });

    it('Should load modules from constructor', function () {
        /**
         * @type {{}|Namespace}
         * @property {Function} Module
         * @property {Namespace} ModuleNamespace
         */
        var modules = new NamespaceLoader(__dirname + '/src/s9s');

        assert.strictEqual(typeof(modules.Module), 'function');
        assert.strictEqual(typeof(modules.ModuleNamespace), 'object');
        assert.strictEqual(modules.ModuleNamespace instanceof NamespaceLoader, true);
        assert.strictEqual(typeof(modules.ModuleNamespace.SubModule), 'function');
    });

    it('Should load modules using "load" method', function () {
        /**
         * @type {{}|Namespace}
         * @property {Function} Module
         * @property {Namespace} ModuleNamespace
         */
        var modules = new NamespaceLoader();
        modules.load(__dirname + '/src/s9s');

        assert.strictEqual(typeof(modules.Module), 'function');
        assert.strictEqual(typeof(modules.ModuleNamespace), 'object');
        assert.strictEqual(modules.ModuleNamespace instanceof NamespaceLoader, true);
        assert.strictEqual(typeof(modules.ModuleNamespace.SubModule), 'function');
    });

    it('Should throw a NamespaceError if fails to load files', function () {
        assert.throws(
            function () {
                (new NamespaceLoader()).load();
            },
            NamespaceError
        );
    });

    it('Should throw a NamespaceError if module is not loaded', function () {
        assert.throws(
            function () {
                var modules = new NamespaceLoader();
                modules.getModule('some_module');
            },
            NamespaceError
        );
    });

    it('Should return TRUE from Module', function () {
        assert.strictEqual(s9s.Module(), true);
        assert.strictEqual(s9s.getModule('Module')(), true);
    });

    it('Should return FALSE from SubModule', function () {
        assert.strictEqual(s9s.ModuleNamespace.SubModule(), false);
        assert.strictEqual(s9s.getModule('ModuleNamespace').SubModule(), false);
        assert.strictEqual(s9s.getModule('ModuleNamespace').getModule('SubModule')(), false);
    });
});