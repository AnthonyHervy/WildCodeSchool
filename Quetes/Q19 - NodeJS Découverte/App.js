process.stdin.resume() 
process.stdin.setEncoding('utf8') 

var age = console.log("quel age as-tu ?")

process.stdin.on('data', (age) => {

   var annee = 2017-age;
   if (isNaN(age)){
        console.log("il fallait entrer un nombre... merci de recharger la page");
    }
    else {
        if (age > 100 || age < 1){
            console.log("Valeur detectée < 1 ou > 100 :");
        }
        else {
            console.log("tu es né(e) en " + annee);
        }
    }   
       process.exit()
})