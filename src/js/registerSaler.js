const showpassword = document.getElementById('passIcon') ;
const inputpassword = document.getElementById('userpassword');



//toggle format of input password part 
showpassword.addEventListener('click', function(){
let state = inputpassword.getAttribute('type');
if(state == 'password')
inputpassword.setAttribute('type', 'text')
else
inputpassword.setAttribute('type', 'password')   
})

//--------------------------------------



