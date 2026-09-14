// (Optional) Change the names below to your friends.
var friend1 = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
};
var friend2 = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 31,
};
var friends = [friend1, friend2];
console.log(friends[1]);
//   -------------------
var colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
        email: "rgraham@company.com",
        extension: 121,
    },
};
var colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
        email: "pburke@company.com",
        extension: 132,
    },
};
var colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
        email: "dos@company.com",
        extension: 125,
    },
};
var colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
};
console.log(colleagues.current[0]);
