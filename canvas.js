window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }


    //C'est ici que l'on placera tout le code servant à nos dessins.
}
/*  <script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.25/paper-core.js">
  </script>*/
