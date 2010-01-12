// Friendly login & sign up form
//
// based on http://blog.leahculver.com/2009/11/log-in-or-sign-up.html
//
// @author Rolando Espinoza La fuente
// @web http://rolandoespinoza.info
// @license MIT

// in case there isn't firebug
if (typeof console == 'undefined') {
    console = {log: function(){}};
}

jQuery(function($) {
    // form starts hidden
    $('#login_signup').show();

    // caching form node
    var $form = $('#login_signup form');
    //
    // login & sign up flow
    //
    $('input[name="action"]', $form).click(function() {
        // log action attribute
        console.log('after ' + $form.attr('action'));
        // which action user wants
        var action = $(this).val();
        // steps:
        //  - change form action
        //  - change password label
        //  - change button label
        //  - show/hide password confirmation
        //  - show/hide forgot & terms
        if (action == 'signup') {
            $form.get(0).setAttribute('action', 'signup');
            $('p.password2', $form).show();
            $('label[for="password"]', $form).html('Choose a password');
            $('input[type="submit"]', $form).attr('value', 'Sign up!');
            $('p.forgot_password', $form).hide();
            $('p.terms', $form).show();
        } else if (action == 'login') {
            $form.get(0).setAttribute('action', 'login');
            $('p.password2', $form).hide();
            $('label[for="password"]', $form).html('Password');
            $('input[type="submit"]', $form).attr('value', 'Log in');
            $('p.forgot_password', $form).show();
            $('p.terms', $form).hide();
        } else {
            console.log('unknown action: ' + action);
        }
        // log action attribute
        console.log('before ' + $form.attr('action'));
    });

    //
    // forgot password flow
    //
    $('p.forgot_password', $form).click(function() {
        // change form action
        $form.get(0).setAttribute('action', 'forgot_password');
        // hide all elements
        $('p', $form).hide();
        // only show email field
        $('p.email', $form).show();
        // display submit button
        $('p.submit', $form).show();
        // display forgot hint
        $('p.forgot_hint', $form).show();
        // update submit button label
        $('input[type="submit"]', $form).attr('value', 'Recover password');
        return false;
    });

    // back to login. Only available on forgot password 
    $('a.back_link', $form).click(function() {
        // hide container to prevent elements flickering
        $form.hide();
        // show all form
        $('p', $form).show();
        // hide hint
        $('p.forgot_hint', $form).hide();
        // restore login form state
        $('input[name="action"][value="login"]', $form).click();
        // show form
        $form.show();
        return false;
    });

    // catch form submit just for demo
    $form.submit(function(e) {
        var action = $form.attr('action');
        alert("Submit action: " + action);
        e.preventDefault();
        return false;
    });
});

