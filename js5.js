/*
$(function(){
function smile() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf118;";
  setTimeout(function () {
	  a.innerHTML = "&#xf11a;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf119;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf11a;";
    }, 3000);
}
smile();
setInterval(smile, 4000);})
*/
document.getElementById("id1").addEventListener('focus',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id2").addEventListener('focus',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id3").addEventListener('focus',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id4").addEventListener('focus',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id5").addEventListener('focus',function(e){
	e.target.style.background="yellow";
});

document.getElementById("id6").addEventListener('input',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id6").addEventListener('focus',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id6").addEventListener('blur',function(e){
	e.target.style.background="lightgreen";
});
/*
document.getElementById("id8").addEventListener('input',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id8").addEventListener('focus',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id7").addEventListener('input',function(e){
	e.target.style.background="yellow";
});
document.getElementById("id7").addEventListener('focus',function(e){
	e.target.style.background="yellow";
});
*/

document.getElementById("id1").addEventListener('blur',function(e){
	document.getElementById("error").textContent="";
	e.target.style.background = 'white';
  if (e.target.value==="")
  {
	  document.getElementById("error").textContent="OOOOPS! you forgot to write your first name";
	  e.target.style.background = 'red';  
  }
  else{
	  var regex =  /^[A-Z]{1}[a-z]+$/;
	  if (!regex.test(e.target.value))
	  {
		  document.getElementById("error").textContent="enter the first letter in uppercase";
		  e.target.style.background = 'red';
	  }
	   else if (regex.test(e.target.value))
	  {
	       e.target.style.background = 'lightgreen';
	       var id1 = e.target.value;
	       document.getElementById("error").textContent="  Hello  :)     "+ id1;
	  }
  }
});

document.getElementById("id2").addEventListener('blur',function(e){
	document.getElementById("error2").textContent="";
	e.target.style.background = 'white';
  if (e.target.value==="")
  {
	  document.getElementById("error2").textContent="OOOOPS! you forgot to write your  last name";
	  e.target.style.background = 'red';  
  }
  else{
	  var regex =  /^[A-Z]{1}[a-z]+$/;
	  if (!regex.test(e.target.value))
	  {
		  document.getElementById("error2").textContent="enter  the first letter in uppercase";
		  e.target.style.background = 'red';
	  }
	  else e.target.style.background = 'lightgreen';
  }
});

document.getElementById("id3").addEventListener('blur',function(e){
	document.getElementById("error3").textContent="";
	e.target.style.background = 'white';
  if (e.target.value==="")
  {
	  document.getElementById("error3").textContent="OOOOPS! you forgot to write your email";
	  e.target.style.background = 'red';  
  }
  else{
	  var regex =  /^[a-z]+@gmail$/;
	  if (!regex.test(e.target.value))
	  {
		  document.getElementById("error3").textContent="enter your email correctly  using @gmail";
		  e.target.style.background = 'red';
	  }
	  else e.target.style.background = 'lightgreen';
  }
});

document.getElementById("id4").addEventListener('blur',function(e){
	document.getElementById("error4").textContent="";
	e.target.style.background = 'white';
  if (e.target.value==="")
  {
	  document.getElementById("error4").textContent="OOOOPS! you forgot to write your number";
	  e.target.style.background = 'red';  
  }
  else{
	  var regex =  /^[0-9]+$/;
	  if (!regex.test(e.target.value))
	  {
		  document.getElementById("error4").textContent="enter your number correctly";
		  e.target.style.background = 'red';
	  }
	  else e.target.style.background = 'lightgreen';
  }
});

document.getElementById("id5").addEventListener('blur',function(e){
	document.getElementById("error5").textContent="";
	e.target.style.background = 'white';
  if (e.target.value==="")
  {
	  document.getElementById("error5").textContent="enter your region";
	  e.target.style.background = 'red';  
  }
  else{
	  var regex =  /^[a-z]+/;
	  if (!regex.test(e.target.value))
	  {
		  document.getElementById("error5").textContent="enter your region";
		  e.target.style.background = 'red';
	  }
	  else e.target.style.background = 'lightgreen';
  }
});



