const data = [
    { name: "jane", age: 27, profession: "admin" },
    { name: "john", age: 24, profession: "developer" },
];

// 1. Print Developers
function printDeveloper() {
    const result = data.filter((item)=>{
        return item.profession === "developer";
    })
    console.log(result);
}

// 2. Add Data
function addData() {
    let name = prompt("Enter name : ");
    let age = prompt("Enter age : ");
    let profession = prompt("Enter profession : ");
    let onObject = ({ name, age, profession });
    data.push(onObject);
    console.log(onObject);
}

// 3. Remove Admins
function removeAdmin() {
    const removeAdm = data.filter((values)=>{
        return values.profession !== "admin";
    })
    console.log(removeAdm);
}

// 4. Concatenate Array
function concatenateArray() {
    const demoArray = [{ name: "john", age: 24, profession: "developer" },
                        { name: "jane", age: 27, profession: "admin" }];

    let concatArray = data.concat(demoArray);
    console.log(concatArray);
}

// 5. Average Age
function averageAge() {
    let total = data.reduce((total, item) => total + item.age, 0);
    console.log(total / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
    const aboveAge = data.filter((item)=>{
        return item.age > 25;
    })
    console.log(aboveAge);
}

// 7. Unique Professions - Unique Professions (`uniqueProfessions` function): Log all distinct professions present in the array.
function uniqueProfessions() {

}

// 8. Sort by Age
function sortByAge() {
    const sortAge = data.sort((max,min)=>{
        return max.age - min.age;
    })
    console.log(sortAge);
}

// 9. Update Profession
function updateJohnsProfession() {
    const updateProfession = data.map((item)=>{
        return item.name === "john" ? {...item, profession: "manager"} : item;
    })
    console.log(updateProfession)
}

// 10. Profession Count
function getTotalProfessions() {

}
