<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ET712-Midterm Exam-2021F</title>
  </head>
  <body>

    <h2 style="text-align:center">ET712-Midterm Exam <br>
      </h2>

      <h3><br>Multiple Choice Questions (30 points)</h3>
    <h4>1. Does a hyperlink apply to text only? Does title attribute apply to text only?</h4>
    <p>A.  YES, NO</p>
<p>B.  NO, YES</p>
<p>C.  YES, YES</p>
<p>D.  NO, NO</p>

<h4>2. How many different ways to insert CSS to HTML, and how many different ways to link to JavaScript to HTML
</h4>

<p>A.  3, 3</p><p>B.  2, 3</p><p>C.  3, 2</p><p>D.  2, 2</p><p>E.   2, 1</p>




<h4>3. What HTML tags MUST be included in order to create an HTML file
</h4>

<textarea name="name" rows="8" cols="80">

A.  <!DOCTYPE html>,<body>,<head>
B.  <title>,<div>,<html>,<body>
C.  <html>,<body>,<!DOCTYPE html>
D.  <html>,<body>,<head>
E.  <html>,<body>,<head>,<!DOCTYPE html>
</textarea>
<h4>
4.	Which of below HTML code is written properly?
</h4>

<textarea name="name" rows="8" cols="80">

  A <div><div><img src=”image.jpg”><hr><p><b>some text<b></p></div></div>
  B <div><img src=”image.jpg”><hr><p><b>some text</p></b></div>
  C <div><img src=”image.jpg”><hr><b><p>some text</b></p></div>
  D <div><img src=”image.jpg”><hr><p><b>some text</b></p></div>

</textarea>


<h4>5.Which of the following is NOT a valid CSS property (select all that applies)?</h4>
<p>A.  color</p>
<p>B. title</p><p>C. src</p>
 <p>D. font-family</p>
<p>E.  id</p><p>F.  border</p><p>G.   class</p>

<h4>6. Which of the following CSS properties DOES NOT influence the box model
</h4>

<p>A.  padding</p>
<p>B. margin</p><p>C. outline</p>
 <p>D. border</p>
<p>E.  float</p><p>F.  content</p><p>G.   width</p>
<p>H.  height</p>


<h4>7. Which of the following CSS properties DOES influence the position of a <div> block
</h4>


<p>A.  padding</p>
<p>B. margin</p><p>C. outline</p>
 <p>D. border</p>
<p>E.  float</p><p>F.  content</p><p>G.   width</p>
<p>H.  height</p>

<h4>8. What are the most important primitive data types in JavaScript</h4>
<p>A. string, float,integer, boolean</p>
<p>B. boolean, number, object</p>
<p>C. string, number, null,undfined</p>
 <p>D. string, number, boolean</p>
<p>E.  object, string, undfined, null</p>

<h4>9. Which below JavaScript control flow syntax is written properly</h4>

<textarea name="name" rows="11" cols="80">
  A.
  const inputValue;
  inputValue=8;
  if (inputValue>=0){
    console.log("Your number is received")
  }
  else {
      console.log("We didn't get your number")
  };
</textarea>

<textarea name="name" rows="11" cols="80">
  B.
  let inputValue =8;
  if (inputValue>=0){
    console.log("Your number is received")
  }
  else if (inputValue<1){
      console.log("We didn't get your number")
  };
</textarea>

<textarea name="name" rows="11" cols="80">
  C.
  const inputValue =8;
  if (inputValue>=0){
    console.log("Your number is received")
  }
  else if (inputValue<0){
      console.log("We didn't get your number")
  };
  else {console.log("Please enter a number!")}
</textarea>


<textarea name="name" rows="13" cols="80">
  D.
  let inputValue;
  inputValue=8;

  if (inputValue>=0){
    console.log("Your number is received")
  }
  else if (inputValue<0 && inputValue>1){
      console.log("We didn't get your number")
  };
  else {console.log("Please enter a number!")}

</textarea>

<h4>10. How many different ways to delare a function in JavaScript?
  Do array and object have different datatypes? </h4>

  <p>A.  4, yes</p>
  <p>B. 3, Yes</p>
  <p>C. 4. No</p>
   <p>D. 3, No</p>

<hr>
<h3>Write JavaScript code for below questions (70 points)</h3>


<h4 class="q11">11. Write a control follow statement to perform the given task below <br></h4>
<p>Let the user type a number from the web page (hint: use prompt function),
<br>If there is no input or the input value is not a number, display "Please enter a number" on the page (use prompt function to display the message):
<br>If the number is one of the four numbers: 3,8,101,108, let the user know "Congrats! You win the game!"
<br>Otherwise, display "Sorry, game is over!" <b>(8 points)</b></p>

<hr>
<h4>12. Write a function to caculate monthly payment for a mortgage </h4>
  Note:
Fixed Monthly Mortgage Repayment Calculation = P * r * (1 + r)<sup>n</sup> / [(1 + r)<sup>n</sup> – 1]
<br>where P = Outstanding loan amount, r = Effective monthly interest rate, n = Total number of periods / months
<br>Hint: parameters of the function are loan amount, monthly interest rate, and loan term
<br>Testing data:  Loan amount:$1,000,000, loan term:10 years, monthly interst rate: 1%
<b>(10 points)</b>
<hr>

<h4>13. Use function expression only to write a function for calulating the total balance in a saving account.
</h4>

<p>Note: Interest = P x R x N.
<br>P = Principal amount (the beginning balance).
<br>R = Interest rate (usually per year, expressed as a decimal).
<br>N = Number of time periods (generally one-year time periods).
<br>Total Balance= P+Interest

<br> Testing data: Principal amount $10,000, interest rate per year:0.01, periods: 10 years
<b>(10 points)</b></p>

<hr>


<h4>14. Create an empty array called stateUS, then add 10 states name (from testing data) to the array. 
  <br>
</h4>
<p>log the first 4 array values and the datatype to the console;
<br>Remove New Jersey, New York, and Washington from the array, and replace 102 with 'Alaska'
<br><br>Display how many sates left in the array and the new first 4 values along with the datatype; </p>
Testing data:
'Alabama',
102,
'New Jersey',
'Arizona',
'New York',
'Arkansas',
'California',
'Colorado',
'Washington'

<b>(12 points)</b>


<hr>
<h4>15. Create an object for Mark, the object should have firstName, lastName, birthYear, address, and one function to check which century was Mark born in;
  After the object is created, update the property address with a new address value and then log the address and the centruy value to console (15 points)</h4>
<hr>


<h4>16.Create one function that can conver Fahrenheit  temperature to Celsius; use array to store the testing temperature data and converted temperature data.</h4>
<p>If user put a temperature below -126℉  or abover 136℉ , let the user know "Invalid temperature!"
<br>If user put nothing or not a number value, let the user know "Please enter a number!"
<br>Otherwise cover the temperature and display a message "? 76℉ is equiavlant to ? ℃"
<br>Covert 10 temperatures and display 10 messages at one time
<br>
<br> Testing data: 32℉  36℉ 46℉ 60℉ 72℉  76℉ 88℉  90℉  100℉  102℉
<b>(15 points)</b></p>


  </body>
</html>
