import inquirer from "inquirer";

let Days = await inquirer.prompt([{
    name:"name" ,
    type:"input",
    message:"Enter Your Name "
    
},{
    name:"days",
    type:"list",
  choices:[ "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday", "Sunday" , ]
}]);


if(Days.days === "Monday"){
    console.log(Days.name + "It's Monday It Is Your Working Day")
}else if(Days.days === "Tuesday"){
        console.log(Days.name + "It's Tuesday It Is Your Working Day As Well")
}else if(Days.days === "Wednesday"){
    console.log(Days.name + "It's Wednesday It Is Your Working Day As Well")
}else if(Days.days === "Thursday"){
    console.log(Days.name + "It's Thurssday It Is Your Working Day As Well")
}else if(Days.days === "Friday"){
    console.log(Days.name + "It's Friday It Is Your Half Working Day")
}else if(Days.days === "Saturday"  || "Sunday"){
    console.log(Days.name + "It Is Your Weekend Day And You Should Enjoy With Your Family")}
else{
    console.log( "Please Select Any Day Otherwise Dont Play The Game")
}

