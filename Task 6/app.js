//            TASK : 06

//            CHAPTER # 21 - 25 ( STRING METHODS )
//                   EX # 01

var firstName = prompt('Enter your first name: ');
var lastName = prompt('Enter our last name: ');
var fullName = firstName + ' ' + lastName;
alert('Welcome To This Webpage Dear ' + fullName);

//                   EX # 02

var favoritePhone = prompt('enter your favourite phone model : ');
document.write('My favourite phone model is : ' + favoritePhone + '<br>');
document.write('Length of String is : '  + (favoritePhone.length) +  '<br>' + '<br>');

//                   EX # 03

var stp = 'Pakistan';
document.write('String : ' + stp + '<br>');
document.write("Index of 'n' : " + stp.indexOf('n') + '<br>' + '<br>');

//                   EX # 04

var stpp = 'Hello World';
document.write('String : ' + stpp + '<br>');
document.write("Last Index of 'l' : " + stpp.lastIndexOf('l') + '<br>' + '<br>');


//                   EX # 05

var stppp = 'Pakistani';
document.write('String : ' + stppp + '<br>');
document.write('Character at Index 3 is : ' + stppp.charAt(3) + '<br>' + '<br>');


//                   EX # 06

var firstName$ = prompt('Enter your first name : ');
var lastName$ = prompt('Enter our last name : ');
var fullName$ = firstName$.concat(lastName$);
alert('Welcome To This Webpage Dear ' + fullName$);


//                   EX # 07

var cityh = 'Hyderabad';
document.write('City : '+cityh + '<br>');
cityi = cityh.replace("Hyder","Islam");
document.write('After Replacement : '+cityi + '<br>' + '<br>');


//                  EX # 08

var message = 'Ali and Sami are best friends. They play cricket and football together.';
message = message.replace(/and/g,"&");
document.write(message + '<br>' + '<br>');

//                  EX # 09

var n$1 = '472';
document.write(n$1 + '<br>');
document.write('String' + '<br>');
document.write(parseInt(n$1) + '<br>');
document.write('Number' + '<br>'  +'<br>');


//                  EX # 10

var userInput = prompt('enter a word : ');
document.write('User Input : ' + userInput + '<br>');
document.write('Upper Case : ' + userInput.toUpperCase() + '<br>' + '<br>');


//                  EX # 11                                                                                          


var a = prompt("enter");
var b =  a.slice(0,1).toUpperCase()+a.slice(1,10); 
document.write("User input: ",a,"<br>");
document.write("Upper case: ",b);


//                  EX # 12

var num = 35.36;
document.write('Number : ' + num + '<br>');
num = num.toString()
nmu = num.replace('.','')
document.write('Result : ' + nmu + '<br>' + '<br>');

//                  EX # 13

var sim = prompt('Enter your username : ');
if(sim === '@' || sim === '!' ||sim === '.' ||sim === ',' ){
    alert('Please! enter a valid username');}
var sim = prompt('Enter your username : ');


//                  EX # 14

var A = ['cake','apple pie','cookie','chips','patties'];
var cafu = prompt('Enter you wanna choose : ');
cafu = cafu.toLowerCase();
for(i=0;i<A.length;i++){
    if(A[i] === cafu){
        document.write(cafu + ' is available at index ' + A.indexOf(cafu) + ' in our bakery.' + '<br>' + '<br>');
    }
else{
        document.write('we are sorry ' + cafu + 'is not available in our bakery!');
        break
    }
}


//                  EX # 15                                          

var apo = prompt("enter your password");
document.write("entered password ", apo, "<br>");

if (apo.slice(0, 1) <= 1000000) {
    document.write("Password cannot start with the numbers ", "<br>");
    document.write("plz enter a valid password" + "<br>" + "<br>");
}
else if (apo.length <= 6) {
    document.write("Password length cannot be less tha 6 character ", "<br>");
    document.write("plz enter a valid password"+ "<br>" + "<br>");
}
for (var i=0; i < apo.length; i++){
    switch(apo){
        case "!" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "@" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "#" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "$" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "%" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "^" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "&" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "*" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "=" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "+" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;
    }
}

//                 EX # 16

var university = 'University of Karachi';
university = university.split("");
// console.log(university);
for (i=0 ; i < university.length ; i++){
    document.write(university[i] + '<br>');
}


//                  EX # 17

var en$ = prompt('enter input character : ');
document.write('User Input : ' + en$ + '<br>');
document.write('Last Character of Input : ' + en$.substr(-1) + '<br>' + '<br>');