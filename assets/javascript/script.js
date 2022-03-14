
  var counter = 1;
  setInterval(function () {
      document.getElementById('radio' + counter).checked = true;
      counter++; 
      if (counter > 3) {
          counter = 1;
      }
  }, 5000);

// Js for open/close modal
    const buyBtns = document.querySelectorAll('.js-buy-ticket');
    const modal = document.querySelector('.js-modal');
    const modalClose = document.querySelector('.js-modal-close');
    const modalContainer = document.querySelector('.js-modal-container');
    // Show modal
        function showBuyTicket() {
            modal.classList.add('open');
        }

    // Hide modal
        function hideBuyTicket() {
            modal.classList.remove('open');
        }

    // Hear clicking event
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTicket);
        }

    // Hear clicking on close button
        modalClose.addEventListener('click', hideBuyTicket);

        modal.addEventListener('click', hideBuyTicket);

        modalContainer.addEventListener('click', function(event) {
            event.stopPropagation();
        })