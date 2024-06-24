$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var mensaje = $('#mensaje');
  
    // Abrir sobre y mostrar mensaje
    envelope.click(function() {
      openEnvelope();
    });
    btn_open.click(function() {
      openEnvelope();
    });
  
    // Resetear sobre y ocultar mensaje
    btn_reset.click(function() {
      closeEnvelope();
    });
  
    // Función para abrir el sobre y mostrar el mensaje
    function openEnvelope() {
      envelope.removeClass("close").addClass("open");
      mensaje.fadeIn(); // Mostrar el mensaje
    }
  
    // Función para cerrar el sobre y ocultar el mensaje
    function closeEnvelope() {
      envelope.removeClass("open").addClass("close");
      mensaje.fadeOut(); // Ocultar el mensaje
    }
  });
  