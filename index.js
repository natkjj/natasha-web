

let today = new Date();

let hours = today.getHours();

if (hours > 12 || hours < 6) {
document.body.className = "night";
} else {
document.body.className = "day";
}

    
// document.querySelectorAll('.gallery__img').className = "night"; 
// document.querySelectorAll('.gallery__img').forEach = "night"; 



