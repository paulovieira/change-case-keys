change-case-keys
================

Change the case of the keys of a javascript object (from underscore to came case, for instance).

## Example

```javascript
var obj = {
    firstName: "paulo",
    lastName: "vieira",
    createdAt: "2015-01-05 19:27:00",
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

changeCaseKeys(obj, "underscored");
```

After the call, the keys of `obj` will be in underscored case (the values will be untouched):

```javascript
{
    first_name: "paulo",
    last_name: "vieira",
    created_at: "2015-01-05 19:27:00",
    groups: [
        {
            id: 11,
            group_name: "x"
        },
        {
            id: 12,
            group_name: "y"
        }
    ]
}
```


## What's the point of this module?

Useful if you're acessing a Postgres database in Node. The convention in Postgres is to use underscore case for the names of the table columns. The data from a query (using the [pg](https://github.com/brianc/node-postgres) module) will be an array of objects, where each object represents a row and the keys are the column names.

This function will convert the keys to camel case (and vice-versa). This way you can peacefully have columns named "first_name", "last_name", etc, and the objects with the query data will have the keys "firstName", "lastName", etc.

## Install and usage

Install with npm. Depends on [underscore](https://github.com/jashkenas/underscore) and [underscore.string](https://github.com/epeli/underscore.string).
```
npm install change-case-keys
```

The module exports a function which accepts two parameters:
```javascript
var changeCaseKeys = require("change-case-keys");
changeCaseKeys(obj, "underscored");
```

It uses [underscore.string](https://github.com/epeli/underscore.string) to make the case conversion. The second argument should be a string value with the name of the method from underscore.string that will be used. 

Usually it should be one of these:
 - [underscored](https://github.com/epeli/underscore.string#underscoredstring--string) (change the keys to `underscore_case`)
 - [camelize](https://github.com/epeli/underscore.string#camelizestring-decapitalizefalse--string) (change the keys to `camelCase`)
 - [dasherize](https://github.com/epeli/underscore.string#dasherizestring--string) (change the keys to `dash-case`)

