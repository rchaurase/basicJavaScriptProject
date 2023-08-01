const forms = document.querySelector('form')
forms.addEventListener('submit',function(eventObj){
  eventObj.preventDefault()
  const heights = parseInt(document.querySelector('#height').value)
  const weights = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(heights === '' || heights < 0 || isNaN(heights)){
     result.innerHTML = `please give a valid height ${heights}`
  }else if(weights === '' || weights < 0 || isNaN(weights)){
     result.innerHTML = `please give a valid height ${weights}`
  }else{
    const BMI = (weights/((heights*heights)/1000)).toFixed(2)
  if(BMI<18.6){
    result.innerHTML = `<span> result is Under Weight ${BMI}</span>`
  }else if(BMI>18.6 && BMI <24.9){
    result.innerHTML = `<span> result is Normal Weight ${BMI}</span>`
  }else if(BMI > 24.9){
    result.innerHTML = `<span> result is  OverWeight ${BMI}</span>`
  }
  }
})
