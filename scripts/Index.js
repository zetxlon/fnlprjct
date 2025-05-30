const button = document.querySelector('.interactive-button');
    button.addEventListener('click', () => {
      if (button.textContent === 'Узнать больше') {
        button.textContent = 'Спасибо!';
      } else {
        button.textContent = 'Узнать больше';
      }
    });


        function scrollToFeatures() {
            document.getElementById('features').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        const clickButton = document.getElementById('clickButton');
        let isClicked = false;
        
        clickButton.addEventListener('click', () => {
            clickButton.textContent = isClicked ? 'Нажми меня' : 'Спасибо!';
            isClicked = !isClicked;
        });