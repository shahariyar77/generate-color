function randomColorFunction(){
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomColorCode = '#' + randomNumber.toString(16)
    document.body.style.backgroundColor = randomColorCode
    document.getElementById('color-code').innerText = randomColorCode
  
    navigator.clipboard.writeText(randomColorCode)

    
}

document.getElementById('btn').addEventListener('click',randomColorFunction

)

randomColorFunction()


// function randomColorFunction(){
//  const random =  Math.floor(Math.random() * 16777215)
//  const randomcode = '#' +  random.toString(16)
//  document.body.style.backgroundColor = randomcode
//  document.getElementById('color-code').innerText = randomcode

//  navigator.clipboard.writeText(randomcode)

//  alert('color copiend successfull')

  
 
// }

// document.getElementById("btn").addEventListener('click',randomColorFunction
// )

// randomColorFunction()