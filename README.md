change-case-keys
================

Change the case of the keys of a javascript object.

## Example:

```
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

After the call, the keys of `obj` will be underscored case (the values will be untouched):

```
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


## Install

npm install change-case-keys

