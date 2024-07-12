let student1 = {
    id: 1,
    name: {
        list: [1]
    }
}

let student2 = JSON.parse(JSON.stringify(student1))

student2.id = 2
console.log(student2)