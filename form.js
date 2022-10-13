let btn=document.querySelector("#btn").addEventListener("click",()=>{
  let  link=document.getElementById("mode")
  
 let m= link.getAttribute("href")
 if(m=="form.css"){
   link.setAttribute("href","org.css")
 }
 else{
   link.setAttribute("href","form.css")
 }
 console.log(m)
  
})
  
  