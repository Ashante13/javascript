let course = ["React ", "Angular  2 ", "Javascript ", "HTML"];


console.log(course); ['React', 'Angular 2', 'Javascript','HTML' ]

let learners = new Array(3);


learners[0]=1;
learners[1]=2;
learners[2]=3;
//learner[3]=4;


console.log("No 0f learners: " + learners);


let items = "";

for (let i = 0;  i < course.length; i++) {
    items += course[i]
}

console.log(items)