const board=[
    {name:'a1',diagonals:['a1-h8']},
    {name:'a2',diagonals:['a2-g8','a2-b1']},
    {name:'a3',diagonals:['a3-f8','a3-c1']},
    {name:'a4',diagonals:['a4-e8','a4-d1']},
    {name:'a5',diagonals:['a5-d8','a5-e1']},
    {name:'a6',diagonals:['a6-c8','a6-f1']},
    {name:'a7',diagonals:['a7-b8','a7-g1']},
    {name:'a8',diagonals:['a8-h1']},
    {name:'b1',diagonals:['a2-b1','b1-h7']},
    {name:'b2',diagonals:['a1-h8','a3-c1']},
    {name:'b3',diagonals:['a4-d1','a2-g8']},
    {name:'b4',diagonals:['a5-e1','a3-f8']},
    {name:'b5',diagonals:['a6-f1','a4-e8']},
    {name:'b6',diagonals:['a7-g1','a5-d8']},
    {name:'b7',diagonals:['a8-h1','a6-c8']},
    {name:'b8',diagonals:['a7-b8','b8-h2']},
    {name:'c1',diagonals:['a3-c1','c1-h6']},
    {name:'c2',diagonals:['a4-d1','b1-h7']},
    {name:'c3',diagonals:['a5-e1','a1-h8']},
    {name:'c4',diagonals:['a6-f1','a2-g8']},
    {name:'c5',diagonals:['a7-g1','a3-f8']},
    {name:'c6',diagonals:['a8-h1','a4-e8']},
    {name:'c7',diagonals:['b8-h2','a5-d8']},
    {name:'c8',diagonals:['a6-c8','c8-h3']},
    {name:'d1',diagonals:['a4-d1','d1-h5']},
    {name:'d2',diagonals:['a5-e1','c1-h6']},
    {name:'d3',diagonals:['a6-f1','b1-h7']},
    {name:'d4',diagonals:['a1-h8','a7-g1']},
    {name:'d5',diagonals:['a8-h1','a2-g8']},
    {name:'d6',diagonals:['b8-h2','a3-f8']},
    {name:'d7',diagonals:['c8-h3','a4-e8']},
    {name:'d8',diagonals:['a5-d8','d8-h4']},
    {name:'e1',diagonals:['a5-e1','e1-h4']},
    {name:'e2',diagonals:['a6-f1','d1-h5']},
    {name:'e3',diagonals:['a7-g1','c1-h6']},
    {name:'e4',diagonals:['a8-h1','b1-h7']},
    {name:'e5',diagonals:['b8-h2','a1-h8']},
    {name:'e6',diagonals:['c8-h3','a2-g8']},
    {name:'e7',diagonals:['d8-h4','a3-f8']},
    {name:'e8',diagonals:['e8-h5','a4-e8']},
    {name:'f1',diagonals:['a6-f1','f1-h3']},
    {name:'f2',diagonals:['a7-g1','e1-h4']},
    {name:'f3',diagonals:['a8-h1','d1-h5']},
    {name:'f4',diagonals:['b8-h2','c1-h6']},
    {name:'f5',diagonals:['c8-h3','b1-h7']},
    {name:'f6',diagonals:['d8-h4','a1-h8']},
    {name:'f7',diagonals:['e8-h5','a2-g8']},
    {name:'f8',diagonals:['f8-h6','a3-f8']},
    {name:'g1',diagonals:['a7-g1','g1-h2']},
    {name:'g2',diagonals:['a8-h1','f1-h3']},
    {name:'g3',diagonals:['b8-h2','e1-h4']},
    {name:'g4',diagonals:['c8-h3','d1-h5']},
    {name:'g5',diagonals:['d8-h4','c1-h6']},
    {name:'g6',diagonals:['e8-h5','b1-h7']},
    {name:'g7',diagonals:['f8-h6','a1-h8']},
    {name:'g8',diagonals:['g8-h7','a2-g8']},
    {name:'h1',diagonals:['a8-h1']},
    {name:'h2',diagonals:['b8-h2','g1-h2']},
    {name:'h3',diagonals:['c8-h3','f1-h3']},
    {name:'h4',diagonals:['d8-h4','e1-h4']},
    {name:'h5',diagonals:['e8-h5','d1-h5']},
    {name:'h6',diagonals:['f8-h6','c1-h6']},
    {name:'h7',diagonals:['g8-h7','b1-h7']},
    {name:'h8',diagonals:['a1-h8']}
]

let textBox = document.getElementById("textBox");
let output = document.querySelector('#output');
let nextBtn = document.querySelector('#next');
let submitBtn = document.querySelector('#submit');
let randomIndex 
let randomNumber = board[randomIndex];
let currentSelectedName
let answerHtmlElement = document.getElementById('answer');
let cCounter = 0;


document.getElementById('textBox').placeholder = 'Please click the "Next" button to continue'

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
//debugger
nextBtn.addEventListener('click', () => {
    //seteando efectos de ui 
    document.getElementById('textBox').disabled = false
    document.getElementById('textBox').placeholder = 'x1,y2,z3'
    document.getElementById('submit').disabled = false



    if(board.length == 0){
        output.innerText = 'Completed';
        return;
    }
    formulario.reset();
    answerHtmlElement.innerText ="--------"
     randomIndex = getRandomNumber(0, board.length-1);
     output.innerText = board[randomIndex].name
    currentSelectedName = board.splice(randomIndex, 1)
   
    
});


submitBtn.addEventListener('click', ()=>{
   
    //aqui convierto en un arreglo.
    debugger

    const questionObject = currentSelectedName[0]
    

    const inputValue = textBox.value
   

    
    // valido que el input no este vacio
    if (inputValue) {
        myAnswersArray = inputValue.split(',') //tomar lo que el usuario ingreso y convertilo en un arreglo
        // validar que lo que introduje es la respuesta correcta

        // utilize un foreach o un for regular o un reduce
        let isTheRightAnswer 
       // dry: Don't repeat yourself 

         if (myAnswersArray.length != questionObject.diagonals.length) {
            return sendResponse(answerHtmlElement, myAnswersArray.length != questionObject.diagonals.length ? false: true)
        } 
        
        // 
        
        // compara cada uno de los valores de respuesta con los posibles diagonals que tiene esta casilla.
        for (let index = 0; index < questionObject.diagonals.length; index++) {
            isTheRightAnswer = myAnswersArray.indexOf(questionObject.diagonals[index]) != -1
            
        } 
        
        // envia la respuesta al UI basado en su valor boleano 
        return sendResponse(answerHtmlElement, isTheRightAnswer)
        
        
        
        
        
    }

    function sendResponse(node, isCorrect) {
        //node.innerText = "Sorry try again!"
        node.innerText = isCorrect ? "Correct!" : "Incorret"
        if (isCorrect) {
            cCounter++;
            document.getElementById("correct-score").innerHTML=cCounter;
        }
        

    }

})


     
        
        
        
  

