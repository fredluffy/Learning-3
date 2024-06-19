                                                // How to use JQuery
// $(document).ready(function () {

// })
// $(function () {

// })

// ----------------------------------------------------------------------------------------------------------
                                                // jQuery Selectors
// $("*")	Selects all elements
// $(this)	Selects the current HTML element
// $("p.intro")	Selects all <p> elements with class="intro"
// $("p:first")	Selects the first <p> element
// $("ul li:first")	Selects the first <li> element of the first <ul>
// $("ul li:first-child")	Selects the first <li> element of every <ul>
// $("[href]")	Selects all elements with an href attribute
// $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
// $("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"
// $(":button")	Selects all <button> elements and <input> elements of type="button"
// $("tr:even")	Selects all even <tr> elements
// $("tr:odd")	Selects all odd <tr> elements
// -----------------------------------------------------------------------------------------------------------
                                                // Event Methods
// .click(function(){}
// .dblclick(function(){}
// .mouseenter(function(){}
// .mouseleave(function(){}
// .mousedown(function(){}
// .mouseup(function(){}
// .hover(function(){},{}
// .focus(function(){}
// .blur(function(){}
// .on("Event Method",function(){},"Event Method",function(){})
// -----------------------------------------------------------------------------------------------------------
                                                // jQuery Effects
// $(selector).hide(speed,callback)
// $(selector).show(speed,callback)
// $(selector).toggle(speed,callback);
// $(selector).fadeIn(speed,callback);
// $(selector).fadeOut(speed,callback);
// $(selector).fadeToggle(speed,callback);
// $(selector).fadeTo(speed,opacity,callback);
// $(selector).slideDown(speed,callback);
// $(selector).slideUp(speed,callback);
// $(selector).slideToggle(speed,callback);
// $(selector).animate({params},speed,callback);

//     #Example
// $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({
//         left: '250px',
//         top: '500px'},
//         height: '+=150px',
//         width: '+=150px',
//         9000);
//     });
//     $("div").animate({height: 'toggle'}, "slow");
// });

// $(selector).stop(stopAll,goToEnd);

//     #Example with Callback
// $("button").click(function(){
//     $("p").hide("slow", function(){
//       alert("The paragraph is now hidden");
//     });
//   });
//     #Example without Callback
// $("button").click(function(){
//     $("p").hide(1000);
//     alert("The paragraph is now hidden");
//   });
//     #Example of Chaining
// $("#p1").css("color", "red").slideUp(2000).slideDown(2000);

// #we can even specify a propertys animation value as "show","hide"and"toggle"
// ##as speed can i use slow.
// -----------------------------------------------------------------------------------------------------------
                                                // Get and Set Content and Attributes
// jQuery methods for DOM manipulation
// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields
// attr() this method is used to get attribute values

//         #ٍExample to Get
// $("#btn1").click(function(){
//     alert("Value: " + $("#test").val());
//   });   
//         #Example
// $("button").click(function(){
//     alert($("#w3s").attr("href"));
//   });
//         #Example to Set
// $("#btn3").click(function(){
//     $("#test3").val("Dolly Duck");
//   });
// $("button").click(function(){
//   $("#w3s").attr({
//     "href" : "https://www.w3schools.com/jquery/",
//     "title" : "W3Schools jQuery Tutorial"
//   });
// });
//         #Example for a Callback Function for text(), html(), and val()
// $("#btn1").click(function(){
//     $("#test1").text(function(i, origText){
//       return "Old text: " + origText + " New text: Hello world!
//       (index: " + i + ")";
//     });
//   });
//         #Example for a Callback Function for attr()
// $("button").click(function(){
//   $("#w3s").attr("href", function(i, origValue){
//     return origValue + "/jquery/";
//   });
// });

// append() - Inserts content at the end of the selected elements
// prepend() - Inserts content at the beginning of the selected elements
// after() - Inserts content after the selected elements
// before() - Inserts content before the selected elements
//         #Example
// $("p").append("Some appended text.");

// Add Several New Elements With append(), prepend(), after(), before()
// function appendText() {
//     var txt1 = "<p>Text.</p>";               // Create element with HTML 
//     var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
//     var txt3 = document.createElement("p");  // Create with DOM
//     txt3.innerHTML = "Text.";
//     $("body").append(txt1, txt2, txt3);      // Append the new elements
//   }

// remove() - Removes the selected element (and its child elements)
// empty() - Removes the child elements from the selected element
//         #Example
// $("p").remove(".test, .demo");
//         #Example
// $("p").remove("");

// addClass() - Adds one or more classes to the selected elements
// removeClass() - Removes one or more classes from the selected elements
// toggleClass() - Toggles between adding/removing classes from the selected elements
// css() - Sets or returns the style attribute
// css("propertyname");    returns the style attribute
// css("propertyname","value");    Sets the style attribute
//         #Example
// $("p").css({"background-color": "yellow", "font-size": "200%"});
//         #Example
// $("button").click(function(){
//     $("#div1").addClass("important blue");
//   });

//     jQuery Dimensions
// width()
// height()
// innerWidth()
// innerHeight()
// outerWidth()
// outerHeight()
//         #Example
// $("button").click(function(){
//     var txt = "";
//     txt += "Width: " + $("#div1").width() + "</br>";
//     txt += "Height: " + $("#div1").height();
//     $("#div1").html(txt);
//   });
//         #Example
// $("button").click(function(){
//     $("#div1").width(500).height(500);
//   });
//-----------------------------------------------------------------------------------------------------------
                                        // jQuery Traversing
// parent()            returns the direct parent element of the selected element
// parents()           returns all ancestor elements of the selected element
// parentsUntil()      returns all ancestor elements between two given arguments
//         #Example
// $(document).ready(function(){
//   $("span").parent().css({"color": "red", "border": "2px solid red"});
// });
//         #Example
// $(document).ready(function(){
//   $("span").parents("ul").css({"color": "red", "border": "2px solid red"});
// });
//         #Example
// $(document).ready(function(){
//   $("span").parentsUntil("div").css({"color": "red", "border": "2px solid red"});
// });
// children()          returns all direct children of the selected element
// find()              returns descendant elements of the selected element, all the way down to the last descendant
//         #Example
// $(document).ready(function(){
//   $("div").children("p.first").css({"color": "red", "border": "2px solid red"});
// });
//         #Example
// $(document).ready(function(){
//   $("div").find("span").css({"color": "red", "border": "2px solid red"});
// });
//         #Example
// $(document).ready(function(){
//   $("div").find("*").css({"color": "red", "border": "2px solid red"});
// });
// siblings()          returns all sibling elements of the selected element
// next()              returns the next sibling element of the selected element
// nextAll()           returns all next sibling elements of the selected element
// nextUntil()         returns all next sibling elements between two given arguments
// prev()              returns the prev sibling element of the selected element
// prevAll()           returns all prev sibling elements between two given arguments
// prevUntil()         returns all prev sibling elements between two given arguments
//         #Example
// $(document).ready(function(){
//   $("h2").siblings().css({"color": "red", "border": "2px solid red"});
// });
//         #Example
// $(document).ready(function(){
//   $("h2").siblings("p").css({"color": "red", "border": "2px solid red"});
// });
//         #Example
// $(document).ready(function(){
//   $("h2").nextUntil("h6").css({"color": "red", "border": "2px solid red"});
// });
// first()             returns the first element of the specified elements
// last()              returns the last element of the specified elements
// eq()                returns an element with a specific index number of the selected elements
// filter()            lets you specify a criteria
// not()               returns all elements that do not match the criteria.
//         #Example
// $(document).ready(function(){
//   $("div").first().css("background-color", "yellow");
// });
//         #Example
// $(document).ready(function(){
//   $("p").eq(1).css("background-color", "yellow");
// });
//         #Example
// $(document).ready(function(){
//   $("p").filter(".intro").css("background-color", "yellow");
// });
//         #Example
// $(document).ready(function(){
//   $("p").not(".intro").css("background-color", "yellow");
// });
//-----------------------------------------------------------------------------------------------------------
