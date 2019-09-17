$(document).ready(
    function ()
    {
              $("#fondo").fadeIn(3000);
              $("#tituloh4").bind("click", mostrarOcultarTitulo);
    }

    );

    function mostrarOcultarTitulo()
    {
        $("#TituloIndex").fadeToggle();

    }
    