let count=0;

const counter=document.getElementById("counter");
const btns=document.querySelectorAll(".btn");


btns.forEach(function(btn) {
    btn.addEventListener('click',function(e)
    {
     const styles=e.currentTarget.classList;
     if(styles.contains('increase'))
     {
         count++;
     }
     else if(styles.contains('decrease'))
     {
         count--;
     }
     else
     {
         count=0;
     }
     counter.innerHTML=count;
    });
    
    
});