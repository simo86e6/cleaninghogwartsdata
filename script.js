"use strict";



document.addEventListener("DOMContentLoaded", start);

const url = "https://petlatkea.dk/2021/hogwarts/students.json";
let content;
const studentArray = [];

const Student = {
    firstName: "",
    middleName: "",
    lastName: "",
    nickName: "",
    pictureLink: "unknown",
    gender: "",
    house: ""
    
};

async function start() {
    console.log("start");
    const getUrl = await fetch(url);
    content = await getUrl.json();
   

    content.forEach(s => {
        let fullName = s.fullname.trim();
        

        let firstName = fullName.substring(0, fullName.indexOf(" "));
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
       
        
        let middleName;
        if(fullName.split(" ").length - 1 === 2){
            let startIndex = fullName.indexOf(" ");
            let endIndex = fullName.lastIndexOf(" ");
            middleName = fullName.substring(startIndex +1 , endIndex);
            middleName = middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
           
        }
        

        let namesAsArray = fullName.split(" ");
        let amountOfNames = namesAsArray.length;
        let lastName = namesAsArray[amountOfNames-1];
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

        let studentGender = s.gender.trim();
        studentGender = studentGender.charAt(0).toUpperCase() + studentGender.slice(1).toLowerCase();

        let studentHouse = s.house.trim();
        studentHouse = studentHouse.charAt(0).toUpperCase() + studentHouse.slice(1).toLowerCase();
        debugger;
        const student = Object.create(Student);
        student.firstName = firstName;
        student.middleName = middleName;
        student.lastName = lastName;
        student.nickName = "Undefined";
        student.house = studentHouse;
        student.gender = studentGender;

        studentArray.push(student);

        console.log(studentArray);
        let sss = "";
    });
      
    


        
    
}


