const courseList = [
    {
        code: "ACIT 1420",
        name: "Systems Admin",
    },

    {
        code: "ACIT 1620",
        name: "Fundamental Web Tech",
    },

    {
        code: "ACIT 1630",
        name: "Database Management"
    }

]

let course = (prompt("Enter a course number"));

while (isNaN (course) == true || course.length != 4) {
    course = prompt("Enter a valid course number");
}

for (let i = 0; i < courseList.length; i++){
    if (course == courseList[i].code.split(" ")[1]){
        console.log("Yes, I am taking", courseList[i].code, "-", courseList[i].name);
    }
    else{
        console.log("I am not takin");
    }
}

