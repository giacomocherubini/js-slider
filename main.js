$('.next').click(function() {
  // prendo l'immagine visibile corrente
  var img_corrente = $('img.visibile');

  // prendoio pallino corrente
  var pallino_corrente = $('i.corrente');

  // tolgo la classe visibile a tutte le immagini
  $('.slider img').removeClass('visibile');

  // tolgo la classe visibile a tutti i pallini
  $('.contenitore_pallini i').removeClass('corrente');

  // prendo l'immagine successiva a quella corrente
  var prossima_img = img_corrente.next('img');

  // prendo il pallino successivo
    var pallino_successivo = pallino_corrente.next('i');


  if(prossima_img.length != 0) {
    // esiste un'immagine successiva
    // aggiungo la classe visibile alla prossima immagine
    prossima_img.addClass('visibile');
    // aggiungo la classe corrente al prossimo pallino
    pallino_successivo.addClass('corrente');

  } else {
    // non c'e alcuna immagine successiva
    // recupero la prima immagine dello slider e la setto in visibile
    $('.slider img').first().addClass('visibile');
    $('contenitore_pallini i').first().addClass('corrente');
  }
});


$('.prev').click(function() {

  // prendo l'immagine visibile corrente
  var img_corrente = $('.visibile');

// prendo il pallino  corrente
  var pallino_corrente = $('i.corrente');

  // tolgo la classe visibile a tutte le immagini
  $('.slider img').removeClass('visibile');

  // tolgo la classe visibile a tutti i pallini
  $('.contenitore_pallini i').removeClass('corrente');

  // prendo l'immagine precedente a quella corrente
  var precedente_img = img_corrente.prev('img');

  // prendo il pallino precedente
  var pallino_precedente = pallino_corrente.prev('i');

  if (precedente_img.length != 0) {
    // esiste un'immagine successiva

  //   tolgo la classe visibile all'immagine corrente
  precedente_img.addClass('visibile');
  pallino_precedente.addClass('corrente');
  } else  {
  // non c'e alcuna immagine precedente
  // recupero  l ultima immagine dello slider e la setto in visibile
  $('.slider img').last().addClass('visibile');
  $('.contenitore_pallini i').last().addClass('corrente');
}
});
