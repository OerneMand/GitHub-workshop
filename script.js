$(function() {
    $('.content' ).on( 'click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('input#term_input').trigger("focus");
    });
    $( ".window" ).resizable({
        minHeight: 250,
        minWidth: 500,
        disable: true
    }).draggable();
<<<<<<< HEAD
});
=======
});

import http from 'https://unpkg.com/isomorphic-git@beta/http/web/index.js'
const fs = new LightningFS('fs')

const dir = '/test-clone'
git.clone({ fs, http, dir, url: 'https://github.com/isomorphic-git/lightning-fs', corsProxy: 'https://cors.isomorphic-git.org' }).then(console.log)
>>>>>>> e9b6755 (First edition of the website, just a bare layout with a draggable window)
