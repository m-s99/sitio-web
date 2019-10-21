$(document).ready(
    function ()
    {
              $("#fondo").fadeIn(1000);
              $("#tituloh4").bind("click", mostrarOcultarTitulo);
    }

    );

    function mostrarOcultarTitulo()
    {
        $("#TituloIndex").fadeToggle();

    }
    