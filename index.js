const newQuotes= [
    {
        id: 1,
       quote: `When we have respect for ourselves and others,
        we gravitate towards connections that encourage that.` ,
       author:" Simeon Lindstrom ",
    },
    {
        id: 2,
        quote: "A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful ",
        author:"L. R. Ellert",
     },
     {
        id: 3,
        quote: "The charcoal that is black does not disguise to be green because it likes yam ",
        author:"Anonymous",
     },
     {
        id: 4,
        quote: "None of this is real, none of us is real. We are all a figment of a greater beings imagination ",
        author:"Sammy Crima",
     },
     {
        id: 5,
        quote: "There's a way to catch your dreams without falling asleep ",
        author:"DJ M.O.D",
     },
     {
        id: 6,
        quote: "Hocus pokus you're losing focus",
        author:"Mikun Mykun",
     },
     {
        id: 7,
        quote: "Focus, learn, and make good use of every opportunity",
        author:"Eniola Lucas",
     },
     {
     id: 8,
     quote: "It's not that deep",
     author:"Adenike Adewusi",
  },
  {
    id: 9,
    quote: "When I grow up i want to be like Tumininu",
    author:"Oyetayo Oluwatomiloba",
 },
 {
    id: 10,
    quote: "And we know that all things work together for good to them that love God, to them who are called according to his purpose.",
    author:"Roman 8:28",
 },
]
const newColors = [
    {
        background: "#f1e6f5",
        button: "#511C6A",
        title: "#511C6A",
        text:"#683580",
        author : "purple",
    },
    {
        background: "#E6F5F5",
        button: "#476761",
        text:"#476761",
        title: "#476761",
        author: "#6EB1A5",
    },
    {
        background: "#F6E1E1",
        button: "#A71B1B",
        text:"#A71B1B",
        title: "#A71B1B",
        author: "#8F1616"
    }
]
const title = document.getElementById("title")
const quote =  document.getElementById("quote")
const author =  document.querySelector(".author")
const generateBtn = document.querySelector(".generate-btn")
const content = document.querySelector(".content")


let currentQuote = 0


// load initial quote
window.addEventListener("DOMContentLoaded", function(){
    generateQuote(currentQuote)
 
   })


//    generate random quote AND COLOR
   generateBtn.addEventListener("click", function(){
           for (let i = 0; i < newQuotes.length; i++){
     generateQuote(randomQuote())
    
           }
        for (let i = 0; i < newColors.length; i++){
            generateColor(getRandomNumber())
        }
     


     










    })  
    


// GETTING RANDOM QUOTE 
     function randomQuote(){
       
        return   Math.floor(Math.random()* newQuotes.length)
        
     
   }



  
// GENERATING QUOTE 
function generateQuote(text){
    const content = newQuotes[text] 
    quote.textContent = content.quote
    author.textContent = content.author
 }


//  getting colour 
function generateColor(color){
    const randomColor =  newColors[color] 
    title.style.color = randomColor.title
    generateBtn.style.backgroundColor = randomColor.button
    quote.style.color = randomColor.text
    author.style.color = randomColor.author
   document.body.style.backgroundColor = randomColor.background
}

//  generate random color 

function getRandomNumber(){
  
    return randomcolour = Math.floor(Math.random() * newColors.length)
   
}

