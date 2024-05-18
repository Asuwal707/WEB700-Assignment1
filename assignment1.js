/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: aashish suwal Student ID: 161760236 Date: 5/17/2024
*
********************************************************************************/
// creating gllobal variabls 
serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
serverPaths = ["/", "/about", "/contacts", "/login", "/panel", "/logout"];
serverResponse = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by aashish suwal", "Student Name: Aashish suwal Student Email: asuwal@myseneca.ca", "User Logged in", "Main panel", "Logout Complete"];

// creating our http request as an arrow function :) (tried smth else lol)

// using const coz we wont be reassigning them. httpverb and path are just parameters for serververbs and serverpaths.
const httpRequest = (httpverb, path) => {
    for (let i = 0; i < serverpaths.length; i++) {
        if(serverVerbs[i] === httpverb && serverPaths[i] === paths ) {
            return `200: ${serverResponse[i]}`;
        }
    }

    return `404: unable to process ${httpverb} request for ${path}`; // ` is a template literal allowing us to embed expression inside ${} string
}

// testing our function 



