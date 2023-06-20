const squares = document.getElementsByClassName("square")
const reset = document.getElementById("reset")
const modes = document.getElementsByClassName("mode")
const colorDisplay = document.getElementById("colorDisplay")

let colors = []
let pickedColor

function randomColor(){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

// First load
for(let square of squares){
    square.style.background = randomColor()
}

// New colors
reset.addEventListener("click", function(){
    colors = []
    for(let square of squares){
         // Kvadratėlių spalvinimas
         const color = randomColor()
         square.style.background = color
 
         // Spalvų išsaugojimas
         colors.push(color)
    }

    // Colors picker
    colorPicker()
})

// Game modes
function createSquares(squaresNumber, event){
    const squaresPlace = document.getElementById("squares")
    squaresPlace.innerHTML = ""

    // Kvadratėlių kūrimas
    colors = []
    for(let i = 0; i < squaresNumber; i++){
        const newSquare = document.createElement("div")
        newSquare.classList.add("square")
        squaresPlace.append(newSquare)

        // Kvadratėlių spalvinimas
        const color = randomColor()
        newSquare.style.background = color

        // Spalvų išsaugojimas
        colors.push(color)
    }

    

    
    
    // Color picker
    colorPicker()

    //Check squares color
    checkSquaresColor()

    if(!event) return
    for(const mode of modes){
        mode.classList.remove("selected")

    }

    event.currentTarget.classList.add("selected")
}

function colorPicker(){
    const random = Math.floor(Math.random() * colors.length)
    colorDisplay.innerText = colors[random]
    pickedColor = colors[random]
    // return colors[random]

}

// Easy mode
modes[0].addEventListener("click", function(){
    createSquares(3, event)
    checkSquaresColor()
    
})

// Hard mode
modes[1].addEventListener("click", function(){
    createSquares(6, event)
    checkSquaresColor()
})

// Fist load
createSquares(6)

// Check the colors of squares
function checkSquaresColor(){

    for(const square of squares){
        square.addEventListener("click", function(){
            if(this.style.background == pickedColor){
                
                for(const x of squares) {
                    x.style.visibility = "visible"
                    x.style.background = pickedColor
                }

            } else{
                this.style.visibility = "hidden"
            }
           
        })
    }
    
}