define([], function()
{
    'use strict';

    var formatter = {};

    /**
     * Formatter covering all possible options
     * @param str
     * @returns {*}
     */
    formatter.format = function(str)
    {
        return str.toFixed(5);
    };

    return formatter;
})
;