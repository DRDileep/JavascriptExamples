define([
    "jquery",//this will be used to load the script path corresponding to "jquery" in the 
                //requirejs.config in the main.js(or the script that is pointed to by the
                //data-main attribute in the script tag)
    "formatter",
    "normalizator",
    "calculator",
    'domReady!'
], function($, formatter, normalizator, calculator)
{
    'use strict';

    /**
     * Calculates from to and puts result in a label
     */
    $(".calculate").click(function(event)
    {
        var fromCur = $(".from_cur").val();
        var toCur = $(".to_cur").val();
        var amountFrom = $(".amount_from").val();
        var amountTo = formatter.format(calculator.calculate(normalizator.getRate(fromCur, toCur), amountFrom));
        $(".amount_to").html(amountTo);
        return false;
    });

});