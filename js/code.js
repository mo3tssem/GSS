$(document).ready(function(){
	$('#examples').live('change', function(e, ui) {
		// hackish way
		setTimeout(function(){window.location.href = e.currentTarget.value;},100)
	});
});