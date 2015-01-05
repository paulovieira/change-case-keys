change-case-keys
================

Change the case of the keys of a javascript object.

## Example

```javascript
var obj = {
    firstName: "paulo"
    lastName: "vieira"
    groups: [
        {
            id: 11,
            groupName: "x"
        },
        {
            id: 11,
            groupName: "y"
        }
    ]
}

obj = changeCaseKeys(obj, "underscored");
```

After the call, the keys of `obj` will be in underscored case (the values will be untouched):

```javascript
{
    first_name: "paulo"
    last_name: "vieira"
    groups: [
        {
            id: 11,
            group_name: "x"
        },
        {
            id: 11,
            group_name: "y"
        }
    ]
}
```


## What's the point of this module?

Useful if you're acessing a Postgres database in Node. The convention in Postgres is to use underscore case for the names of the columns. The data from a query (using the [pg](https://github.com/brianc/node-postgres) module) will be an array of objects, where each object is a row and the keys are the column names.

This function will convert the keys to camel case (and vice-versa). So you can have columns named "first_name", "last_name", etc, and the object with the query data will have the keys "firstName", "lastName", etc.

## Install and usage

Install with npm: 
```
npm install change-case-keys
```

The module exports a function which accepts two parameters:
```javascript
var changeCaseKeys = require("change-case-keys");
var obj = changeCaseKeys(obj, "underscored");
```

It uses [underscore.string](https://github.com/epeli/underscore.string) to make the case conversion. The second argument should be a string value with the name of the method from underscore.string that will be used. 

Usually it should be one of these:
    - [underscored](https://github.com/epeli/underscore.string#underscoredstring--string) (change the keys to `underscore_case`)
    - [camelize](https://github.com/epeli/underscore.string#camelizestring-decapitalizefalse--string) (change the keys to `camelCase`)
    - [dasherize](https://github.com/epeli/underscore.string#dasherizestring--string) (change the keys to `dash-case`)

