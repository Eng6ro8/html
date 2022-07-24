// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
<script>
    function ddlselect() {
            var d = document.getElementById("ddselect");
    var displaytext = d.options[d.selectedIndex].text;
    document.getElementById("txtvalue").value = displaytext;
        }
</script>
// Write your Javascript code.
