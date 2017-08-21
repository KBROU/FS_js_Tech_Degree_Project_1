//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Project 1 Random Quote Generator 
// 8/12/2017
// By: Kody Broussard

//Project Definition: Create an application that displays 5 random quotes each time a button is clicked. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Global Variables

// quotes array containing 5 objects with all the quotes properties. 

var quotes = [
  {  
    quote:'Success is the progressive realization of a worthy goal or ideal.',  
    source:'Earl Nightingale',
    tags:'#Success' + ' #Goals'
  },
  {  
    quote:'The man who renounces himself, comes to himself.',  
    source:'Ralph Waldo Emerson',
    citation:'The Divinity College Address',
    year:'1838', 
    tags:'#College' + ' #Cambridge' + ' #Emerson'
      
  },
  {  
    quote:'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',  
    source:'Albert Einstein',
    tags:'#Science' + ' #Universe' + ' #Einstein'
      
  },
  {  
    quote:'A room without books is like a body without a soul.',  
    source:'Marcus Tullius Cicero',
    tags: '#Books ' + ' #Knowledge'  
  },
  {  
    quote:'If you tell the truth, you don\'t have to remember anything.',  
    source:'Mark Twain',
    tags:'#Truth' + ' #Honesty' + ' #Twain'
      
  }
];

// Variable that stores all the already viewd quotes into an array. This variable is used in conjuction with the getRandomQuote function to      make sure that all 5 quotes are displayed before repeating a single quote. 

var seenQuotes = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Functions

//Function randomNumber creates a random number up to what ever is defined as the upper parameter.

function randomNumber(upper) {
  return Math.floor( Math.random() * upper);
}

//Funtion colorChange generates random colors for the background each time it is executed. This is used to gernerate a new background color     every time a new quote is displayed

function colorChange (){
    var color1 = Math.floor( Math.random() * 256)
    var color2 = Math.floor( Math.random() * 256)
    var color3 = Math.floor( Math.random() * 256)
    document.body.style.backgroundColor = "rgb(" + color3 + "," +color2 + "," + color1 + ")";
}

//Funciton getRandomQuote uses the randomNumber function to generate a random number based on the the length of the quotes array. The random number is then added into the the quote.splice method. The quote.splice method creates a new array based on the object number from the randomQuote variable and it also removes that same object number from the quotes array. Then the productQuote array is pushed into the seenQuotes. seenQuotes keeps track of all the quotes objects being used in the global scope. The if conditional statment resets the seenQuotes array once all the objects in the quotes array have been cycled through. Also in the function the productQuote is logged to the console and returned. 

function getRandomQuote() {
    var randomQuote = (randomNumber(quotes.length));
    var productQuote = quotes.splice(randomQuote, 1) [0] ;   //theQuote=2 quotes.splice(2,1)
     seenQuotes.push(productQuote);
    if (quotes.length === 0) {
      quotes = seenQuotes;
      seenQuotes = [];
    }
    console.log(productQuote);
    return productQuote;
}  

//Function quoteColor combines the printQuote functions and the colorChange function to both be executed when quoteColor is called

function quoteColor (){
    printQuote();
    colorChange();
}

// PrintQuote calls the getRandomQuote function and stores the returned quote object in the displayQuote variable. The displayQuote Varibale contains styling of how the quote and other properties will look once the quote is displayed on the web page. Conditionla statements were used to make sure only the properties contained in the quote object were displayed. 


function printQuote() {
    printedQuote = getRandomQuote();
    
       var displayQuote = '<p class="quote"> ' + printedQuote.quote + ' </p>';
                displayQuote += '<p class="source">' + printedQuote.source;
                if (printedQuote.citation) {
                    displayQuote += '<span class="citation">' + printedQuote.citation + '</span>';
                }
                if(printedQuote.year) {
                    displayQuote += '<span class="year">' + printedQuote.year + '</span>';
                }
                displayQuote += '<br><span class="tags">' + printedQuote.tags + '</span></p>';



    // Displays the displayQuote Variable on the web page.    
    document.getElementById('quote-box').innerHTML = displayQuote;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Application Executions

//Calling the printQuote function to execute it. 

printQuote();

//Enabling the a new quote to be displayed on the webpage after the user clicks the loadQuote button. 

document.getElementById('loadQuote').addEventListener("click", quoteColor, false);  
    
//Changes a new quote every 30 seconds

var intervalID = window.setInterval(quoteColor, 30000);  


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





