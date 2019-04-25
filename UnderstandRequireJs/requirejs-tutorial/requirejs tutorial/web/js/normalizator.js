define([], function()
{
    'use strict';

    var normalizator = {};
    /**
     * Very sofisticated rates retriever
     * @param from
     * @param to
     * @returns {number}
     */
    normalizator.getRate = function(from , to)
    {
        var rate = 1;
        if("EUR" === from){
            if("USD" === to){
                rate = 1.5;
            }
            else if("GBP" === to){
                rate = 0.5;
            }
        }else if("USD" === from){
            if("EUR" === to){
                rate = 0.5;
            }
            else if("GBP" === to){
                rate = 0.25;
            }
        }
        else if("GBP" === from){
            if("EUR" === to){
                rate = 1.5;
            }
            else if("USD" === to){
                rate = 1.75;
            }
        }
        return rate;
    };
    return normalizator;
});