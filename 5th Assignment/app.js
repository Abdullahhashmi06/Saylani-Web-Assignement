// CHAPTER ONE PROBLEMS

//TASK 1
/*var name = prompt("What is your name?");
        alert("Welcome " + name);

    //TASK 2
        alert("Error! Please enter a valid password");

    //TASK 3
        alert("Welcome to JS land... \r\n Happy Coding");
        console.log(alert("Hello... I can run JS through my web browsers console"));*/

//CHAPTER TWO PROBLEMS

//TASK 1
/*var userName;
    
    //TASK 2
        var myName = "Abdullah Hashmi";
    //TASK 3
        var message = alert("Hello World");
    //TASK 4
        var studentName = "John Doe";
        var studentAge = 15;    
        var studentCertificate = "Certified Mobile Application Developer";
        alert(studentName + " is a boy of " + studentAge + " and is a " + studentCertificate); 
    //TASK 5
        var pizza = "PIZZA \r\n PIZZ \r\n PIZ \r\n PI \r\n P";
        alert(pizza);
    //TASK 6
        var mail = "My email address is abdullahhashmi06@gmail.com";
        alert(mail);
    //TASK 7
        var book = "I am trying to learn Javascript from the book A smarter \r\n way to learn JavaScript";
        alert(book); 
    //TASK 8
        var symb = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
        alert(symb);*/

//CHAPTER THREE PROBLEMS

//TASK 1
//var age = 13; 
//var str = "I am "+age+" years old";
//alert(age);
//TASK 2

//TASK 3
// var birthDate = 2006;
// var birthMessage = document.write("My birth year is " + birthDate + " and the datatype of the birth date variable is a number");

//TASK 4
// var buyerName = prompt("Please write your full name");
// var productTitle = prompt("Please tell the product name you intend to buy");
// var productQuantity = prompt("How many products you wish to buy");
// document.write(buyerName + " intends to buy " + productQuantity  + productTitle);

//CHAPTER 4 

//TASK 1
// var b, c, d;

//TASK 2
//legal variable names
//var market, legal, index, car;
//illegal variable names
//var 3cats, dog's, dog species, whyProduct?, return; 
//      IMPORTANT: THE ABOVE ILLEGAL VARIABLE NAMES ARE COMMENTED TO AVOID THE ANY POSSIBLE ERRORS
//TASK 3
/*document.write("Rules for naming JS variables.<br>");
document.write("Variable names can only contain letter, an underscore (_) or a dollar sign $. For example $my_1stVariable <br>");
document.write("Variable names are case sensitive <br>");
document.write("Variable names should not javascript keywords <br>")*/

//CHAPTER 5
    //TASK 1
    //ADD
    // document.write("Add <br>");
    // var numberOne = parseInt(prompt("Enter a number"));
    // var numberTwo = parseInt(prompt("Enter a number"));
    // document.write(numberOne + numberTwo);

    //MULTIPLY
    // document.write("Multiply <br>");
    // var numberOne = parseInt(prompt("Enter a number"));
    // var numberTwo = parseInt(prompt("Enter a number"));
    // document.write(numberOne * numberTwo);

    //SUBTRACT
    // document.write("Subtract <br>");
    // var numberOne = parseInt(prompt("Enter a number"));
    // var numberTwo = parseInt(prompt("Enter a number"));
    // document.write(numberOne - numberTwo);

    //DIVISION
    // document.write("Divide <br>");
    // var numberOne = parseInt(prompt("Enter a number"));
    // var numberTwo = parseInt(prompt("Enter a number"));
    // document.write(numberOne / numberTwo);

    //MODULUS
    // document.write("Modulus <br>");
    // var numberOne = parseInt(prompt("Enter a number"));
    // var numberTwo = parseInt(prompt("Enter a number"));
    // document.write(numberOne % numberTwo);

    //TASK 2
    // var undefined = document.write("Value after variable declaration is undefiend <br>");
    // var initial = document.write("Initial value 11 <br>");
    // var increase = document.write("Value after increament is 12 <br>");
    // var additionOfValue = document.write("Value after addition is 19 <br>");
    // var decrease = document.write("Value after decrement is 18 <br>");
    // var remainder = document.write("Remainder value after dividing by 3 is 6");

    //TASK 3
    // var oneFilm = document.write("Cost of one movie ticket is RS 600 <br>");  
    // var calculateFiveTickets = document.write("Cost of five tickets is RS " + 600 * 5);

    //TASK 4
    // var tableOfFour = document.write("Table of 4 <br>");
    // document.write("4 * 1 = 4 <br>");
    // document.write("4 * 2 = 8 <br>");
    // document.write("4 * 3 = 12 <br>");
    // document.write("4 * 4 = 16 <br>");
    // document.write("4 * 5 = 20 <br>");
    // document.write("4 * 6 = 24 <br>");
    // document.write("4 * 7 = 28 <br>");
    // document.write("4 * 8 = 32 <br>");
    // document.write("4 * 9 = 36 <br>");
    // document.write("4 * 10 = 40 <br>");

    //TASK 5
    // function tempFunction(){
    //     var askUnit = prompt("What do you want to calculate, f or c");
    //     if(askUnit === "f"){
    //         var enterCelsius = prompt("Enter temperature in celsius");
    //         document.write(Math.round((enterCelsius * 1.8) + 32) + " f");
    //     }
    //     else if(askUnit === "c"){
    //         var enterFahrenheit = prompt("Enter temperature in fahrenheit");
    //         document.write(Math.round((enterFahrenheit - 32) * 0.55) + " c");
    //     }
    // }

    // tempFunction();

    //TASK 6
    // function checkOut(){
    //     var itemOnePrice = prompt("What is the price of item one?");
    //     var itemTwoPrice = prompt("What is the price of item two?");
    //     var itemOneQuant = prompt("What is the quantity item one?");
    //     var itemTwoQuant = prompt("What is the quantity item two?");
    //     var checkOutOne = Math.round((itemOnePrice * itemOneQuant));
    //     var checkOutTwo = Math.round((itemTwoPrice * itemTwoQuant));
    //     document.write("RS " + parseInt(checkOutOne + checkOutTwo));
    // }

    // checkOut();

    //TASK 7
    // function percent(){
    //     var totalMarks = prompt("What are the total obtainable marks of this exam?");
    //     var obtainedMarks = prompt("How many marks have you gained");
    //     if (!totalMarks < obtainedMarks) {
    //         var solution = obtainedMarks / totalMarks;
    //         document.write("Your total percentage for this exam is " + solution * 100 + "%");
    //     } if(totalMarks < obtainedMarks){
    //         alert("ERROR!!! It is impossible to obtain more marks than the total marks. <br> Please refresh the page");
    //     }
    // }

    // percent();

    //TASK 8
    // function currency(){
    //     document.write("THE EXCHANGE RATE IS OF 5th JUNE, 2020. <br>")
    //     usd  = 10;
    //     usdRate = 104.80;
    //     sar  = 25;
    //     sarRate =  28;
    //     var backToRupee = document.write(Math.round(parseInt((usd * usdRate)  + (sar * sarRate))));
    // }

    // currency();

    //TASK 9
    // function arithmetic(){
    //     var askForNumber = parseInt(prompt("Enter any number"));
    //     var add = document.write(Math.round(parseInt(((askForNumber + 5) * 10) / 2)));
    // }

    // arithmetic();

    //TASK 10
    // function ageCalc(){
    //     var currentYear = parseInt(prompt("What is the current year?"));
    //     var birthYear = parseInt(prompt("What is your birth year?"));
    //     if(currentYear < birthYear){
    //         document.write("YOU DONOT EXIST RIGHT NOW!!!");
    //     } else{
    //         var ageInYear = document.write("Your are " + parseInt(currentYear - birthYear) + " years old!");
    //     }
    // }

    // ageCalc();

    //TASK 11
    // function geometry(){
    //     var radius = prompt("Enter the radius");
    //     var circumOrArea = prompt("What do you want to calculate with the radius. Circumference or Area");
    //     if(circumOrArea === "circumference"){
    //         var circum = document.write(Math.round(parseInt(2 * 3.142 * radius)) + " is the circumference");
    //     }
    //     else if(circumOrArea === "area"){
    //         var area = document.write(Math.round(parseInt(3.142 * (radius * radius))) + "  is the area");
    //     }
    // }

    // geometry();

    //TASK 12
    // function lifeTimeSupply(){
    //     var favorite = "mars";
    //     var currentAge = 15;
    //     var averageAge =  65;
    //     var amount = 3;
    //     var rest = document.write("<h1>The lifetime supply of mars for you is </h1>" + Math.round((averageAge - currentAge) * 3));
    // }

// lifeTimeSupply();

//CHAPTER 6 TO 9 

    //TASK 1
        // var result = document.write("Result <br>");
        // var a = 10;
        // var val = document.write("Value of a is: " + a + "<br>");
        // var plus = document.write("The value of ++a is " + ++a + "<br>");
        // var now = document.write("Now the value of a is: " + a + "<br>");
        // var plus = document.write("The value of a++ is " + a++ + "<br>");
        // var twelve = document.write("Now the value of a is " + +a + "<br>");
        // var subtract = document.write("The value of --a is " + --a + "<br>");
        // var nowPartTwo = document.write("Now the value of a is: " + a + "<br>");
        // var subtractTwo = document.write("The value of a-- is " + a-- + "<br>");
        // var nowPartThree = document.write("Now the value of a is: " + a + "<br>");

    //TASK 3
        // var a = "2"; 
        // var b  = "1";
        // var aTwo = document.write("a is: " + a + "<br>");
        // var bTwo = document.write("b is: " + b + "<br>");
        // var result = document.write("Result is: " + parseInt(--a - --b + ++b + b--));

    //TASK 4
        // var askUserName = prompt("What is your full name");
        // var  greet = document.write("Hello " + askUserName + ". Good Day.");

    //TASK 5
        // function table(){
        //     var askNum = parseInt(prompt("Enter a number. I will tell you it's multiplication table."));
        //     if(askNum == undefined ||  isNaN(askNum) || askNum == "" || askNum == 0){
        //         askNum = 5;
        //     }
        //     document.write(`<h1>Table of ${askNum}</h1>`);

        //     cnt = 0;
        //     while(cnt < 10)
        //     {
        //         cnt++;
        //         document.write(`${askNum} x ${cnt} = ${askNum*cnt} <br>`);    
        //     }
        // }


        // table();

    //TASK 6
        // var subjectOne = prompt("Write a subject name.");
        // var subjectTwo = prompt("Write another subject name.");
        // var subjectThree = prompt("Write the last subject name.");
        // var gainedOne = prompt("What are your marks in " + subjectOne);
        // var gainedTwo = prompt("What are your marks in " + subjectTwo);
        // var gainedThree = prompt("What are your marks in " + subjectThree);
        // var gainedTtl = parseInt(gainedOne + gainedTwo + gainedThree);
        // var totalMarksSub = 100;
        // document.write(`<table>
        //     <thead>
        //         <tr>
        //             <th>Subject</th>
        //             <th>Total Marks</th>
        //             <th>Obtained Marks</th>
        //             <th>Percentage</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr><td>${subjectOne}</td><td>${totalMarksSub}</td><td>${gainedOne}</td><td>${Math.round(parseFloat((gainedOne / totalMarksSub)) * 100,2)}</td></tr>
        //         <tr><td>${subjectTwo}</td><td>${totalMarksSub}</td><td>${gainedTwo}</td><td>${Math.round(parseFloat((gainedTwo / totalMarksSub)) * 100,2)}</td></tr>
        //         <tr><td>${subjectThree}</td><td>${totalMarksSub}</td><td>${gainedThree}</td><td>${Math.round(parseFloat((gainedThree / totalMarksSub)) * 100,2)}</td></tr>
        //     </tbody>
        //     <tfoot>
        //         <tr>
        //             <th></th>
        //             <th>${totalMarksSub * ttlSub}</th>
        //             <th>${gainedTtl / (totalMarksSub * 3) * 100}</th>
        //         </tr>
        //     </tfoot>
        // </table>`);

//CHAPTER 9-11
    //TASK 1
        // var city = prompt("Where do you live?");
        // if(city === "karachi" || city === "Karachi"){
        //     document.write("WELCOME TO THE CITY OF LIGHTS!!!");
        //     alert("WELCOME TO THE CITY OF LIGHTS!!!");
        // }

    //TASK 2
        // var gender = prompt('What is your gender?');
        // if(gender === "male" || gender === "Male"){
        //     document.write("Hello Sir. Good Day");
        //     alert("Hello Sir. Good Day");
        // } else if(gender === "female" || gender === "female"){
        //     document.write("Hello Mam. Good Day");
        //     alert("Hello Mam. Good Day");
        // }

    //TASK 3
        // var traffic = prompt('What traffic light it is?');
        // if(traffic === "red" || traffic === "Red"){
        //     document.write("MUST STOP!!!");
        // }   else if(traffic === "yellow" || traffic  === "Yellow"){
        //     document.write("Ready To Move");
        // }    else if(traffic === "green" || traffic  === "Green"){
        //     document.write("Move Now");
        // }

    //TASK 4
        // var fuel = prompt("How much fuel does your vehicle have? (IN LITRES)");
        // if(fuel === "0.25"){
        //     document.write("Please refuel your car!");
        // }

    //TASK 5
        // (a) The alert box comes in and the message is shown to the user
        // (b) The condition of b remains false, so the alert box doesnt comes up.
        // (c) Conditions 1 and 3 are false and so the alert box doesnt comes up. The conditions 2 and 4 are true and the alert box also shows the message
        // (d) The condition for d are true and so the message comes up to the user in the alert box.
        // (e) The first condition is true and the second condition is false. Therefore, we will witness only "True" in the alert box
        // (f) The condition was true so the message was shown in the alert.

    //TASK 6
        // var oMarkOne = prompt("Enter marks of one subject");
        // var oMarkTwo = prompt("Enter marks of second subject");
        // var oMarkThree = prompt("Enter marks of third subject");
        // var totalSubMarks = 300;
        // var ttlObt = parseInt(oMarkOne + oMarkTwo + oMarkTwo);
        // var percentage = parseInt(Math.round((ttlObt / totalSubMarks) * 100));
        // var heading = document.write(`<h1>Marks Sheet</h1>`);
        // var ttlMarHead = document.write("Total Marks: " + totalSubMarks + "<br>");
        // var per = parseInt(document.write("Percentage: " + ttlObt + "<br>"));
        // if(ttlObt >= 80){
        //     document.write("Grade: A+ <br>");
        //     document.write("Remarks: EXCELLENT! :D" + "<br>");
        // } 
        // else if(ttlObt >= 70){
        //     document.write("A <br>");
        //     document.write("Remarks: Good Performance :)" + "<br>");
        // }
        // else if(ttlObt >= 60){
        //     document.write("B <br>");
        //     document.write("You need to improve:|" + "<br>");
        // }
        // else if(ttlObt < 60){
        //     document.write("Fail <br>" + "<br>");
        //     document.write("Sorry :(")+ "<br>";
        // }



    //TASK 7
        // var secret = parseInt(4);
        // var askSecret = parseInt(prompt("Guess a number between 1 - 10"));
        // if(askSecret === secret){
        //     document.write("BINGO, YOU GUSSED THE RIGHT NUMBER");
        // }   else if(askSecret - secret === 1 || secret - askSecret === 10){
        //         document.write("Your answer is very close. Refresh and try again");
        //     }

    //TASK 8
        // var givenThree  = parseInt(prompt("Enter a number"));
        // if(givenThree % 3 === 0){
        //     document.write("The number you gave is divisible by 3");
        // }

    //TASK 9
        // var enterNum = parseInt(prompt("Enter any number you wish"));
        // if(enterNum % 2 === 0){
        //     document.write("The number you provided was an even number");
        // } else{
        //     document.write("The number you gave was an odd number");
        // }

    //TASK 10
        // var enterTemp = parseInt(prompt("Enter the current temperature, in celsius"));
        // if(enterTemp >= 40){
        //     document.write("It is too hot outside");
        // }   else if(enterTemp >= 30){
        //         document.write("The weather today is normal");
        //     } 
        //     else if(enterTemp >= 20){
        //         document.write("Todays weather is cool");
        //     } 
        //     else if(enterTemp >= 10){
        //         document.write("OMG! TODAYS WEATHER IS SO COOL!");
        //     } 
        
    //TASK 11
        // var firstNum = parseInt(prompt("Enter a number"));
        // var secondNum = parseInt(prompt("Enter another number"));
        // var operate = parseInt(prompt("Enter the operation you want to apply on the numbers +, -, /, %"));
        // if(operate === "Plus" || operate === "plus"){
        //     document.write(parseInt(Math.round(firstNum + secondNum)));
        // }

//CHAPTER 12-13
    //TASK 1

    //TASK 2
        // var firstNumber = prompt("Enter an integer.");
        // var secondNumber = prompt("Enter another integer");
        // if(firstNumber < secondNumber){
        //     document.write("Second Number is the larger integer.")
    //     }   else if(firstNumber > secondNumber){
    //             document.write("First Number is the larger integer");
    //         } 
    //         else if(firstNumber === secondNumber){
    //             document.write("Both the integers are equal");
    //         }

    // TASK 3
    //     var numeral = prompt("Write a number.");
    //     var zero = "0";
    //     if(numeral > 0){
    //         document.write("Number is positive");
    //     }   else if(numeral < 0){
    //         document.write("Number is negative");
    //     }   else if(numeral === zero){
    //         document.write("Number is ZERO");
    //     }

    // TASK 4
    //     var single = prompt('Enter a letter. ONE LETTER. In lower case');
    //     if(single === "a" || single === "e" || single === "i" || single === "o" || single === "u"){
    //         document.write("TRUE");
    //     } else {
    //         document.write("FALSE")
    //     }

    // TASK 5
    //     function passwordChecker(){
    //         var pass = "Pakistan";
    //         var input = prompt("Enter your password");
    //         if(input == ''){
    //             alert('Please enter your password!');
    //             passwordChecker();
    //         }
    //         else if(pass == input){
    //             document.write("Correct! The password you entered matches the original password");
    //         } 
    //         else if(input != pass){
    //             document.write("Incorrect password");
    //         }
    //     }
    //     passwordChecker();

    // TASK 6
    //     var greeting;
    //     var hour = 13;
    //     if (hour < 18) {
    //         greeting = "Good day";
    //     }
    //     else{
    //         greeting = "Good evening";
    //     }

    // TASK 7
    //     var time = prompt("Enter the hour in 24 hour clock.");
    //     if(time >= 0000 && time < 1200){
    //         document.write("Good Morning!");
    //     }
    //     else if(time >= 1200 && time < 1700){
    //         document.write("Good Afternoon");
    //     }
    //     else if(time >= 1700 && time < 2100){
    //         document.write('Good Evening');
    //     }
    //     else if(time >= 2100 && time <= 2359){
    //         document.write("Good Night");
    //     }

//CHAPTER 14-16

       // var futureStudent = [];

    //TASK 2
        // var futurePupils = {};

    //TASK 3
        // var continents = ["Asia", "North America", "South America", "Oceania", "Europe", "Africa", "Antarctica"];

    //TASK 4
        // var nums = [1, 2, 2, 4];

    //TASK 5
    //     var bool = [false, true,  5 == 6];

    // //TASK 6   
    //     var mix = [true, 1, "Karachi"];

    //TASK 7
        // var qualf = document.write(["SSC", "HSC", "BCS", "BS", "BCOM", "MS","M.Phil", "PhD"]);

    //TASK 8
        // var names = ["Michael", "John", "Tony"];
        // var mar = [320, 230, 480];
        // var mic = document.write("Score of " + names[0] + " is " + mar[0] + ". Percentage: " + ((mar[0] / 500) * 100) + "%" + "<br>");
        // var jon = document.write("Score of " + names[1] + " is " + mar[1] + ". Percentage: " + ((mar[1] / 500) * 100) + "%" + "<br>");
        // var ton = document.write("Score of " + names[2] + " is " + mar[2] + ". Percentage: " + ((mar[2] / 500) * 100) + "%");

    //TASK 9
        // var colors = ["red", "blue", "green", "yellow"];
        // document.write("Colors Array initialized <br>");
        // document.write(colors.join(', '));

        // var askCol = prompt("Enter a color that you would like to add to the starting of the list");
        // colors.unshift(askCol);

        // document.write("<br> <br> New color added to start <br>");
        // document.write(colors.join(', '));

        // var askCol = prompt("Enter a color that you would like to add to the end of the list");
        // colors.push(askCol);
        // document.write("<br> <br> New color added to end <br>");
        // document.write(colors.join(', '));
        
        // colors.shift(askCol);   
        // document.write("<br> <br> Removed one element from start <br>");
        // document.write(colors.join(', '));

        // colors.pop(askCol);   
        // document.write("<br> <br>Removed one element from end <br>");
        // document.write(colors.join(', '));
        

        // var askCol = prompt("Enter a color that you would like to add to the list");
        // var indexNum = prompt("Insert an index number");
        // colors.splice(indexNum, 0, askCol);
        // document.write("<br> <br>" + colors.join(', ') + "<br><br>");

        // var askCol = prompt("Enter the index of the color you want to delete");
        // var endDel = prompt("Enter the index of the color you want to stop deleting");
        // colors.splice(askCol, endDel);
        // document.write(colors.join(', ') + "<br><br>");

    //TASK 10
        // var oldScores = ["320", "230", "480", "120"];
        // document.write("Old Scores: " + oldScores.join(', ') + "<br><br>");

        // oldScores.sort();
        // document.write("New Scores " + oldScores.join(', ') + "<br><br>");

    //TASK 11
        // var citNam = document.write("Cities List <br>")
        // var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
        // document.write(cities.join(' , ') + "<br><br>");
        // var selectedCit = document.write("Selected cities list <br>");
        // var selected = document.write(cities.slice(2, 4));
        
    //TASK 12   
        // var arr = ["This ", "is ", "my ", "cat"];
        // document.write('Array <br>');
        // document.write(arr.join());

        // document.write('<br><br>String');
        // document.write('Array <br>');
        // document.write(arr.join(' '));

    //TASK 13
        // var dev = ['keyboard', "mouse", "printer", "moniter"];
        // var devices = document.write("Devices: <br>" + dev);

        // var out = document.write("<br><br>Out: ")
        // document.write(dev.splice(0,1));

        // var out = document.write("<br><br>Out: ")
        // document.write(dev.splice(0,1));

        // var out = document.write("<br><br>Out: ")
        // document.write(dev.splice(0,1));

        // var out = document.write("<br><br>Out: ")
        // document.write(dev.splice(0,1));

    //TASK 14
        // var dev = ['keyboard', "mouse", "printer", "moniter"];
        // var devices = document.write("Devices: <br>" + dev);

        // var out = document.write("<br><br>Out: ")
        // document.write(dev.splice(3, 3));

        // var out = document.write("<br><br>Out: ")
        // document.write(dev.splice(2, 2));

        // var out = document.write("<br><br>Out: ")
        // document.write(dev.splice(1, 1));

        // var out = document.write("<br><br>Out: ")
        // document.write(dev.splice(0, 1));

    //TASK 15
        // var mobile = ['Apple', 'Nokia', 'Samsung', 'Motorola', 'Haier'];
        // var options = mobile.map(function(val, index){ 
        //     return `<option>${val}</option>`;
        // }); 
        // document.write(`<select>${options}</select>`);

//CHAPTER 17-20
    //TASK 1
        // var milti = [[], [], []];

    //TASK 2
        // var multi = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
        // console.log(multi);

    //TASK 3
        // for (i = 0; i < 11; i++) {
        //     document.write(i + "<br>");
        // }

    //TASK 4
        // var mult = prompt("Enter a number to show it's multiplication table");
        // var length = prompt("Enter the length of the table");
        // document.write('Multiplication table of ' + mult + "<br> Length " + length  + " <br>");
        // for(i = 1; i <= length; i++){
        //     document.write(`${mult} x ${i} = ${mult * i}<br>`);
        //    }

    //TASK 5
        var fru = ["Apple ", "Banana ", "Mango ", "Orange ", "Strawberry"];
        for(i=0; i< fru.length; i++){
            document.write(fru[i]+'<br>');
        }
        // document.write(fruits + "<br>")
        for (i = 0; i < 6; i++) {
             document.write("Element at index " + i + " is <br>" + fru[i]);
         }

        