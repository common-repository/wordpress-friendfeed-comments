 jQuery(document).ready(function() {
     jQuery('.ff_id_editable').editable( function(value, settings) {
        jQuery.ajax(
         {  url : "admin-ajax.php",
            type : "post",
            data : {
                value : value,
                id : this.id,
                action : "wp_ff_update_friendfeed_id"
            }
        }).responseText;

        return(value);

     }, {
         indicator : 'Saving..',
         tooltip : 'Click here to edit friendfeed id',
         submit : 'Ok'
     });
 });
