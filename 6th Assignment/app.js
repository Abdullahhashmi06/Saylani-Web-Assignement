//CHAPTER 21-25
    //TASK 1
        // var firstName = prompt("What is your first name?");
        // var lastName = prompt("What is your last name?");
        // var fullName = alert("Hello " + firstName + ' ' + lastName + " . Good Day.")

    //TASK 2
        // var favMod = prompt("Enter your favorite phone model");
        // document.write("Your favorite phone is :" + favMod + "<br>" + "Length of string: " + favMod.length);
    
    //TASK 3
        // var pak = "Pakistani";
        // document.write(pak + "<br>");
        // if ( pak.indexOf("n") > -1 ){
        //     document.write("The index of n: " + "7");  
        // }  

    //TASK 4
        // var hello = document.write("String: Hello World <br>");
        // var lastIndex = 'Hello World'.indexOf('ld')
        // var doc = document.write("Last Index of 'l: " + lastIndex);
    
    //TASK 5
        // var firstName = prompt("What is your first name?");
        // var lastName = prompt("What is your last name?");
        // var con = alert("Hello " + firstName.concat(' ' + lastName + " . Good Day."));

    //TASK 6
        // var hyder = 'Hyderabad ';
        // document.write(hyder);
        // var cit = document.write("City: " + hyder);
        // var rep = hyder.replace("Hyder", "Islam");
        // var aft = document.write("<br><br>After replacement: " + rep);

    //TASK 7
        // var mes = "Ali and Sami are best friends. They play cricket and football togethar.";
        // document.write(mes);
        // var replace = mes.replace(/and/g, "&");
        // document.write("<br><br>" + replace);        

    //TASK 8
        // var str = "472";
        // document.write("Value: " + str + "<br>");
        // var type = document.write("Type: String <br>");
        // var a = parseInt("472") + "<br>";
        // document.write("Value: " + a);
        // var type = document.write("Type: Number <br>");

    //TASK 9
        // var user = prompt("Enter some text in lower case.");
        // document.write("User input: " + user);
        // var upper = user.toUpperCase();
        // document.write("<br><br>Upper case: " + upper);
    
    //TASK 10
        // var user = prompt("Enter a word in lower case");
        // document.write("User input: " + user);
        // var fir = user..toUpperCase(charAt(0));
        // document.write("<br><br>" + "Title Case: " + fir + user);

    //TASK 11
        // var num = 35.36;
        // document.write("Number: " + num);
        // var num = 3536;
        // var str = document.write("<br><br> Result: " + num.toString());

    //TASK 12
        // var userName = prompt("Enter a username");
        // if(userName.includes("@" & "." & "," & "!")){
        //     alert("Please enter a valid username");
        //     var userName = prompt("Enter a username");
        // } 
        // else{
        //     document.write(userName);   
        // }

    //TASK 13
        // var bakAr = ["cake", "apple pie", "cookie", "chips", "patties"];
        // var order = prompt("Welcome to ABC bakery. What do you want to order?");
        // order = order.toLowerCase();
        // if(order === "cake" ||order === "apple pie" ||order === "cookie" ||order === "chips" ||order === "patties"){
        //     document.write("This item is available in our bakery :)");
        // } else if(order !== "cake" || "apple pie" || "cookie" || "chips" ||"patties"){
        //     document.write("Sorry this item is not available in our bakery :(");
        // }

    //TASK 14
    //DO WITH BABA

    //TASK 15
        // var str = "University of Karachi";
        // var res = str.split("").join("<br>");
        // document.write(res); 

    //TASK 16
        // var user = prompt("Enter any word");
        // document.write("User Input: " + user + "<br>");
        // var res = user.charAt(user.length-1);
        // document.write("Last Character of input: " + res);

    //TASK 17
        // var temp = "the quick brown fox jumped over the lazy dog.";
        // document.write("Text: " + temp);
        // var count = (temp.match(/the/g) || []).length;
        // document.write ("<br><br>There are " + count + " occurences of the word 'the'");

//CHAPTER 26-30
    //TASK 1
        // var pos = prompt("Enter a positive ");
        // document.write("Number entered by user: " + pos + "<br><br>");
        // document.write("Round off value: " + Math.round(pos) + "<br>");
        // document.write("Floor off value: " + Math.floor(pos) + "<br>");
        // document.write("Ceil off value: " + Math.ceil(pos) + "<br>");

    //TASK 2
        // var pos = prompt("Enter a negative ");
        // document.write("Number entered by user: " + pos + "<br><br>");
        // document.write("Round off value: " + Math.round(pos) + "<br>");
        // document.write("Floor off value: " + Math.floor(pos) + "<br>");
        // document.write("Ceil off value: " + Math.ceil(pos) + "<br>");

    //TASK 3
        // var absolute = prompt("Enter a number");
        // document.write("Absolute number: " + Math.abs(absolute));

    //TASK 4
        // var rand = Math.floor( Math.random() * 7 );
        // document.write("Random dice value is: " + rand);

    //TASK 5
        // var rand = Math.floor( Math.random() * 3 );
        // if(rand == 1){
        //     document.write(1 + "<br>random coin value: Heads")
        // }   else if(rand == 2){
        //     document.write(2 + "<br>random coin value: Tails")
        // }

    //TASK 6
        // var rand = Math.floor( Math.random() * 101 );
        // document.write(rand);

    //TASK 7
        // var weight = prompt("Enter your weight in kgs. Example: 20");
        // var trans = Math.round(weight);
        // document.write("The weight of the user is: " + trans + " kilograms");

    //TASK 8
        // var secret = Math.floor(Math.random() * 11 );
        // console.log(secret);
        // var askSecret = prompt("Enter a number between 1-10");
        // if(secret == askSecret) {
        //     document.write("Congratulations!!! You guessed the right number.");            
        // }
        // else if(secret !== askSecret){
        //     document.write("Sorry, your answer was wrong. Please try again.")
        // }

//CHAPTER 31-34  
    //TASK 1    
        // var d = new Date();
        // var currentMonth = d.getDay();
        // document.write(d);

    //TASK 2
        // var month = new Array();
        // month[0] = "January";
        // month[1] = "February";
        // month[2] = "March";
        // month[3] = "April";
        // month[4] = "May";
        // month[5] = "June";
        // month[6] = "July";
        // month[7] = "August";
        // month[8] = "September";
        // month[9] = "October";
        // month[10] = "November";
        // month[11] = "December";
    
        // var d = alert(new Date());

    //TASK 3
        // var d = new Date();
        // var n = d.getDay();
        // if(n == 1){
        //     n = 'Today is Mon';
        // }
        // else if(n == 2){
        //     n = 'Today is Tue';
        // }else if(n == 3){
        //     n = 'Today is Wed';
        // }
        // else if(n == 4){
        //     n = 'Today is Thu';
        // }
        // else if(n == 5){
        //     n = 'Today is Fri';
        // }
        // else if(n == 6){
        //     n = 'Today is Sat';
        // }
        // else if(n == 7){
        //     n = 'Today is Sun';
        // }
        // alert(n);

    //TASK 4
        // var d = new Date();
        // var n = d.getDay();
        // if(n == 1){
        //     n = 'Today is Mon';
        // }
        // else if(n == 2){
        //     n = 'Today is Tue';
        // }else if(n == 3){
        //     n = 'Today is Wed';
        // }
        // else if(n == 4){
        //     n = 'Today is Thu';
        // }
        // else if(n == 5){
        //     n = 'Today is Fri';
        // }
        // else if(n == 6){
        //     n = 'Sat is Fun Day !!!';
        // }
        // else if(n == 7){
        //     n = 'Sun is Fun Day !!!';
        // }
        // alert(n);

    //TASK 5
        // var d = new Date();
        // var n = d.getDate();
        // if(n < 16){
        //     document.write(n + " th of the Month. First fifteen days of the month.")
        // }   else if(n > 16){
        //     document.write(n + "th of the Month. Last days of the month.")
        // }

    //TASK 6
        // var d = new Date();
        // var n = d.getDay();
        // var m = d.getTime();
        // document.write("Current Date: " + d + "<br><br>");
        // document.write("Elapsed milliseconds since January 1, 1970: " + m);
        // document.write("<br><br> Elapsed minutes since January 1, 1970: " + Math.round(m / 60000)); 
        
    //TASK 7
        // var d = new Date();
        // var n = d.getHours();
        // document.write(n);
        // if(n == 12){
        //     document.write("<br><br> It is pm")
        // } else {
        //     document.write("<br><br> It is am")
        // }

    //TASK 9
        // var y = y.setFullYear(2015);
        // var m = m.setMonth(5);
        // document.write(y + ' ' + m);

    //TASK 13
        // function getAge(){
        //     var h = parseInt(prompt("What is your age?"));
        //     var d = new Date();
        //     var n = d.getFullYear();
        //     alert(n - h + " is your birth year");
        // }

        // getAge();

    //TASK 14
        // function bill() {
        //     var name = prompt("What's your name?");
        //     var month = prompt("What's the current month?");
        //     var units = parseInt(prompt("What's the number of units?"));
        //     var charges = parseInt(prompt("What's the charges per unit?"));
        //     var late = parseInt(prompt("What's the late payment surcharge?"));
        //     var net = "<br><br>Net Amount Payable (within due date): " + units * charges;
        //     document.write("K-Electric Bill<br><br>");
        //     document.write("Customer Name: " + name);
        //     document.write("<br>Month: " + month);
        //     document.write("<br>Number of units: " + units);
        //     document.write("<br>Charges per unit: " + charges);
        //     document.write(net);
        //     document.write("<br>Late payment surcharge " + late);
        //     document.write("<br>Gross Amount Payable (after due date): " + parseFloat(net + late));
        // }

        // bill();


    //CHAPTER 35-38
        //TASK 1
            // function currentTime() {
            //     var d = new Date();
            //     var currentMonth = d.getDay();
            //     document.write(d);
            // }

            // currentTime();

        //TASK 2
            // function firstLast() {
            //     var first = prompt("Enter your first name");
            //     var last = prompt("Enter your last name");
            //     alert("Hello " + first + " " + last + " . Good Day :)");
            //     document.write("Hello " + first + " " + last + " . Good Day :)");
            // }

            // firstLast();

        //TASK 3
            // function sum() {
            //     var firstNum = parseInt(prompt("Enter a number"));
            //     var secNum = parseInt(prompt("Enter another number"));
            //     alert(firstNum + secNum);
            //     document.write(firstNum + secNum);
            // }

            // sum();
    
        //TASK 4
            // function sum() {
            //     var firstNum = parseInt(prompt("Enter a number"));
            //     var secNum = parseInt(prompt("Enter another number"));
            //     var operate = prompt("Write plus, minus, multiply or divide.");
            //     if(operate === "plus") {
            //         alert(firstNum + secNum);
            //         document.write(firstNum + secNum);
            //     }   else if (operate === "minus") {
            //         alert(firstNum - secNum);
            //         document.write(firstNum - secNum);
            //     }   else if (operate === "multiply") {
            //         alert(firstNum * secNum);
            //         document.write(firstNum * secNum);
            //     }   else if (operate === "divide") {
            //         alert(firstNum / secNum);
            //         document.write(firstNum / secNum);
            //     }
            // }

            // sum();

        //TASK 5
            // function sum() {
            //     var firstNum = parseInt(prompt("Enter a number"));
            //     var operate = prompt("Enter 'square' or 'cube'")
            //     if(operate === "square"){
            //         alert(firstNum * firstNum);
            //         document.write(firstNum * firstNum);
            //     }   else if(operate === "cube"){
            //         alert(firstNum * firstNum * firstNum);
            //         document.write(firstNum * firstNum * firstNum);
            //     }
            // }

            // sum();
        
        //TASK 6
            // function factorial(n){
            //     let answer = 1;
            //     if (n == 0 || n == 1){
            //     return answer;
            //     }else{
            //     for(var i = n; i >= 1; i--){
            //         answer = answer * i;
            //     }
            //     return answer;
            //     }  
            // }
            // let n = prompt("Enter a number to know it's factorial");
            // answer = factorial(n)
            // console.log("The factorial of " + n + " is " + answer);

        //TASK 7
            // function sum() {
            //     var FirstNumber = prompt("Enter a number");
            //     var SecondNumber = prompt("Enter another number");
            //     var result = "";
            //     for (var i = FirstNumber; i <= SecondNumber; i++) {
            //     result += i;  
            //     }
            
            //     alert(result);
            //     document.write(result);
            // }

            // sum();

        //TASK 8

            //IT IS VERY EASY. CAN BE DONE WITH ONE FUNCTION TOO.
            // function tri() {
            //     var base = parseInt(prompt("What's the base?"));
            //     var perp = parseInt(prompt("What's the perpendicular?"));
            //     alert(base * base + perp * perp + " is the hypotenuse");
            //     document.write(base * base + perp * perp + " is the hypotenuse");
            // }

            // tri();
        
        //TASK 9
            // function rect() {
            //     var width = parseInt(prompt("What's the width of the rectangle?"));
            //     var height = parseInt(prompt("What's the height of the rectangle?"));
            //     alert(width * height + " is area");
            //     document.write(width * height + " is area");
            // }

            // rect();

        //TASK 10
            // function palindrome(str) {
            //     var re = " ";
            //     str = str.toLowerCase().replace(re, '');
            //     var len = str.length;
            //     for (var i = 0; i < len/122; i++) {
            //         if (str[i] !== str[len - 1 - i]) {
            //             alert("false");
            //         }   else {
            //                 alert("True");
            //             }
            //     }
            // }
            // palindrome(prompt("Enter some text"));

        //TASK 11
            // function uppercase(str)
            // {
            // var array1 = str.split(' ');
            // var newarray1 = [];
                
            // for(var x = 0; x < array1.length; x++){
            //     newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
            // }
            // return newarray1.join(' ');
            // }
            // alert(uppercase("the quick brown fox"));

        //TASK 12
            // function find_longest_word(str)
            // {
            // var array1 = str.match(/\w[a-z]{0,}/gi);
            // var result = array1[0];
            
            // for(var x = 1 ; x < array1.length ; x++)
            // {
            //     if(result.length < array1[x].length)
            //     {
            //     result = array1[x];
            //     } 
            // }
            // return result;
            // }
            // console.log(find_longest_word('Abdullah Hashmi'));

        //TASK 13
            // function char_count(str, letter) 
            // {
            // var letter_Count = 0;
            // for (var position = 0; position < str.length; position++) 
            // {
            //     if (str.charAt(position) == letter) 
            //     {
            //     letter_Count += 1;
            //     }
            // }
            // return letter_Count;
            // }
            
            // alert(char_count('Hello World', 'l'));

        //TASK 14
            // function calCircumference() {
            //     var rad = parseInt(prompt("Enter the radius"));
            //     var circ = alert(Math.round(2 * 3.14159 * rad) + " is the estimated circumference.");
            //     document.write(Math.round(2 * 3.14159 * rad) + " is the estimated circumference.");
            // }

            // calCircumference();

            // function calcArea() {
            //     var rad = parseInt(prompt("Enter the radius"));
            //     var circ = alert(Math.round(3.14159 * rad * rad) + " is the estimated area.");
            //     document.write(Math.round(3.14159 * rad * rad) + " is the estimated area.");
            // }

            // calcArea();
            

        