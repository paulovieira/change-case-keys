var _ = require('underscore');
var _s = require('underscore.string');


function changeCaseKeys(obj, methodName){
    var method = _s[methodName], 
        originalKeys = Object.keys(obj), 
        targetKeys;

    if(!method){ throw new Error("The method " + methodName + " doesn't exist in underscore.string"); };

    // if obj is a function, regular expression or date, Object.keys will return an empty array
    if(originalKeys.length === 0){ return; }

    targetKeys = originalKeys.map(method);
    for(var i=0, l=originalKeys.length; i<l; i++){
        if(originalKeys[i]!=targetKeys[i]){
            obj[targetKeys[i]] = obj[originalKeys[i]];
            delete obj[originalKeys[i]];
        }
    }
}

function changeCase(obj, methodName){

    if(_.isObject(obj)){
        // first check the common case: arrays
        if(_.isArray(obj)){
            for(var i=0, l=obj.length; i<l; i++){
                changeCase(obj[i], methodName);
            }
        }
        // if it's not array nor a "normal" object, exit early
        else if(obj instanceof Date ||
                obj instanceof Error ||
                obj instanceof RegExp ){
                    return; 
                }
        // we have a "normal" object - change the case of the keys and 
        // make a recursive call for each value in the object
        else{
            changeCaseKeys(obj, methodName);
            Object.keys(obj).forEach(function(key){
                changeCase(obj[key], methodName);
            });
        }
    }
}

// NOTE: the idea is the same for objects and arrays; if we look at arrays as 
// objects whose keys are "1", "2", etc, we conclude that there's no need to 
// call changeCaseKeys for array; so for arrays we simply do the recursive call; 
// as for objects, since the key can be anything, we have to call changeCaseKeys
// before the recursive call

module.exports = changeCase;
