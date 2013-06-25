 jQuery(document).ready(function($){
     $(document.body).on('change', 'input[name="payment_method"]', function() {
        $('body').trigger('update_checkout');
    });
 });