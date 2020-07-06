    
        const menu = document.querySelector('.menu');
        const hero = document.querySelector('.hero');
        const video = document.querySelector('.flexible-video');
        const ipad = window.matchMedia('screen and (max-width: 767px)');
        


        const burgerButton = document.querySelector('#burger-menu');


        ipad.addListener(validation);

        function validation(event){
            if(event.matches)
            {
                burgerButton.addEventListener('click', hideShow); /* Cuando el boton recibe un click, se activa hideshow*/
            }
            else{
                burgerButton.removeEventListener('click', hideShow);
            }
        }
        
        validation(ipad);

        function hideShow(){
        if(menu.classList.contains('is-active')) /*Pregunta si esta activado el menu, esto se da al recibir un click en el button*/
        {
            menu.classList.remove('is-active'); /* Si esta activa y recibe un click, se cierra */
            hero.classList.remove('desaparece');
            video.classList.remove('desaparece');
            
        } 
        else{
        menu.classList.add('is-active'); /* Si esta cerrado y recibe un click, se abre*/
        hero.classList.add('desaparece');
        video.classList.add('desaparece');
        }   
        }