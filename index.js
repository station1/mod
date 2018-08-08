'use strict';

module.exports = function() {

    return new Promise(function(resolve, reject) {

        // if(1 > 2) {
        //     console.log('this will never be executed');
        // }
        
        return resolve('okay');
    });
}