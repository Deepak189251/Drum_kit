function clicker(key){
 //   var audio = new Audio("sounds/tom-1.mp3");
  //  audio.play();
    
    switch (key){

        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;
            
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
    }

}
var n = document.querySelectorAll(".drum").length;
for(var i = 0; i < n; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    clicker(this.innerHTML);
    animatedButtons(this.innerHTML);
});
}
    
document.addEventListener("keydown", function(event){
    clicker(event.key);
    animatedButtons(event.key);
})

function animatedButtons (key){
    var buttonStyle = document.querySelector("."+key)
     buttonStyle.classList.add("pressed");
     setTimeout(function(){
        buttonStyle.classList.remove("pressed");
     }, 100);
}