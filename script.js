 function whatsappText() {
      const phoneNumber = "2349160262139"; //
      const message = "Hello Residence Realty, I want to buy a product."; 
      const whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
      window.open(whatsappURL, "_blank"); 
    }
//  document.getElementById('whatsapp-icon').addEventListener('click', whatsappText);