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

var obj = {
    someProp1A: {
        anotherProp2A: {
            yetAnotherProp3A: "xxx",
            yetAnotherProp3B: "www"
        },
        anotherProp2B: "yyy",
        anotherProp2C: "zzz"
    },

    someProp1B: {
        anotherProp2D: "aaa",
        anotherProp2E: "bbb"
    }
}

var obj = [
{    someProp1A: {
        anotherProp2A: {
            yetAnotherProp3A: "xxx",
            yetAnotherProp3B: "www"
        },
        anotherProp2B: "yyy",
        anotherProp2C: "zzz"
    }
}
]

//console.log(changeCaseKeys(obj, "dasherize"));
console.log(changeCaseKeys(obj, "underscored", 1));


