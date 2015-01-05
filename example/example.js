var changeCaseKeys = require("../");

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
            id: 12,
            groupName: "y"
        }
    ]
}

//changeCaseKeys(obj, "dasherize");
changeCaseKeys(obj, "underscored");

console.log(obj);
