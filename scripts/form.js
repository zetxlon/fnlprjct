
        const mapContainer = document.getElementById('mapContainer');
        const mapObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2
        });

        mapObserver.observe(mapContainer);
        const contactForm = document.getElementById('contactForm');
        const formSuccess = document.querySelector('.form-success');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formGroups = document.querySelectorAll('.form-group');
            formGroups.forEach(group => group.classList.remove('error'));
            
            let isValid = true;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name.length < 2) {
                document.querySelector('.form-group:nth-child(1)').classList.add('error');
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.querySelector('.form-group:nth-child(2)').classList.add('error');
                isValid = false;
            }
            
            if (message.length < 10) {
                document.querySelector('.form-group:nth-child(3)').classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                console.log('Форма успешно отправлена!');
                console.log('Имя:', name);
                console.log('Email:', email);
                console.log('Сообщение:', message);
                
                formSuccess.style.display = 'block';
                
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
                
                contactForm.reset();
            }
            
            return false;
        });

        const emailInput = document.getElementById('email');
        emailInput.addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.closest('.form-group').classList.add('error');
            } else {
                this.closest('.form-group').classList.remove('error');
            }
        });