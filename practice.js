let ab = document.querySelector("#ab");
 ab.addEventListener("mouseover", function(){
      ab.style.backgroundColor ="yellow";
    });
     ab.addEventListener("mouseout", function(){
      ab.style.backgroundColor ="aqua";
    });
     window.addEventListener("mousemove", function(dets){
      ab.style.top= dets.clientY + "px";
       ab.style.left= dets.clientX + "px";
    });
let ul = document.querySelector("ul");
ul.addEventListener("click" , function(dets){
    dets.target.classList.toggle("lt");
});