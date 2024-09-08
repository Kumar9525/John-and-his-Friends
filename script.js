function printDevelopersByMap(arr) {
    arr.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function printDevelopersByForEach(arr) {
    arr.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData(arr) {
    const newEmployee = {id: 5, name: "susan", age: 20, profession: "intern"};
    arr.push(newEmployee);
    console.log(arr);
}

function removeAdmin(arr) {
    const updatedArray = arr.filter(employee => employee.profession !== "admin");
    console.log(updatedArray);
}

function concatenateArray(arr) {
    const newEmployees = [
        {id: 5, name: "john", age: 25, profession: "designer"},
        {id: 6, name: "emma", age: 30, profession: "manager"},
        {id: 7, name: "michael", age: 35, profession: "developer"}
    ];
    const concatenatedArray = arr.concat(newEmployees);
    console.log(concatenatedArray);
}
