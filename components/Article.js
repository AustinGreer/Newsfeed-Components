// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import data from "../data/data"

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>


  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

//(1.) write component
//takes in article object and returns specified markup

function articleMaker (artObj) {
  // destructure object
  const { 
    title, 
    date, 
    firstParagraph, 
    secondParagraph, 
    thirdParagraph 
  } = artObj;

  // create elements
  const article = document.createElement("div") 
  const articleTitle = document.createElement("h2")
  const articleDate = document.createElement("p")
  const paragraphOne = document.createElement("p")
  const paragraphTwo = document.createElement("p")
  const paragraphThree = document.createElement("p")
  const expandButton = document.createElement("span")

  // structure the elements as specified
  article.append(
    articleTitle, 
    articleDate, 
    paragraphOne, 
    paragraphTwo, 
    paragraphThree, 
    expandButton
    )

  // add necessary classes
  article.classList.add("article")
  articleDate.classList.add("date")
  expandButton.classList.add("expandButton")

  // add necessary text content
  articleTitle.textContent = title
  articleDate.textContent = date
  paragraphOne.textContent = firstParagraph
  paragraphTwo.textContent = secondParagraph
  paragraphThree.textContent = thirdParagraph
  expandButton.textContent = "Expand +"

  // (2.) add event listener on the expand button. It's a click event that will toggle the class "toggle-open"
  const expandHandler = (event) => {
    article.classList.toggle("article-open")
  }
  expandButton.addEventListener('click', expandHandler)

  return article
}

// (3.) loop through the data and at each iteration, append a newsfeed object to the dom
const articleContainer = document.querySelector(".articles")

data.forEach(articleObj => {
  articleContainer.appendChild(articleMaker(articleObj))
})
