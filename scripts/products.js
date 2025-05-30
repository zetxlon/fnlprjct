        const modal = document.getElementById("requestModal");

        function openModal() {
            modal.style.display = "block";
        }

        function closeModal() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        function submitForm(event) {
            event.preventDefault();
            alert("Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.");
            modal.style.display = "none";
            event.target.reset();
        }