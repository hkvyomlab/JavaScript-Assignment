/*
 * Filename: f:\JavaScript Assignment\Question1.js
 * Path: f:\JavaScript Assignment
 * Created Date: Tuesday, November 22nd 2022, 9:20:49 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */

var students = [['Ritik', 80], ['Vinod', 87], ['Swati', 98], ['Anil', 95], ['Sunil', 58]];

var Avgmarks = 0;
for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
        }