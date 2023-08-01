const clocks = document.getElementById('clock')
// document.querySelector('#clock')



setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clocks.innerHTML = date.toLocaleString();
},1000)