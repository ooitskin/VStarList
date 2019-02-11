$(() => {
  console.log('js connected')
  var btn = document.querySelector('button');

  $(btn).on('click', ()=> {
    alert('hi')
  })
  
})