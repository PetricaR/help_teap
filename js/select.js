// Functie Javascript de exportat tabel in Excel, CSV, PDF:

$(document).ready(function() {
	$('#example').DataTable( {
		dom: 'Bfrtip',
		buttons: [
			'copyHtml5',
			'excelHtml5',
			'csvHtml5',
			'pdfHtml5'
		]
	} );
} );




// Functie Javascript de exportat tabel in Excel, CSV, PDF:
function selectRow(){
  
    var radios = document.getElementsByName("radios");
    for( var i = 0; i < radios.length; i++ )
    {
        radios[i].onclick = function()
        {
            // remove class from the other rows
            
            var el = document.getElementById("first-tr");
            
            // go to the nex sibing
            while(el = el.nextSibling)
            {
                if(el.tagName === "TR")
                {
                    // remove the selected class
                    el.classList.remove("radios");
                }
            }
            
         // radio  -      td      -          tr 
            this.parentElement.parentElement.classList.toggle("radios");
        };
    }

}
selectRow();