// Création de ma fonction qui est immédiatement exécutée.

(function() {
    // Création de mes variables pour la calculatrice
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    
    //On récupère toutes les données des boutons lors d'un clique 
    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        let value = e.target.dataset.num; 
        // e.target = l'évènement qui a été cliqué
        // .dataset.num = renvoit la valeur de mes boutons
        screen.value += value;
        console.log('Bouton cliqué')
      })
    });
    
    // Bouton '='
    equal.addEventListener('click', function(e){
      if(screen.value === ''){
        screen.value = '';
        console.log('Bouton = cliqué')
      } else {
        let answer = eval(screen.value);
        screen.value = answer;
      }
    })
    
    // Bouton 'AC'
    clear.addEventListener('click', function(e){
      screen.value = '';
      console.log('Bouton AC cliqué')
    })
   
  })();
