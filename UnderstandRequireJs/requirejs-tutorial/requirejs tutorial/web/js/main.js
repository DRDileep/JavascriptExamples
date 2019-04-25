/**
 * Here come all the config for requireJS including shim, params, conflicts, mappings, etc.
 */
requirejs.config({
    baseUrl: "js",
    waitSeconds: 20,
    paths: {
        jquery: 'jqueryScript'
    },
    deps: ['app']
});