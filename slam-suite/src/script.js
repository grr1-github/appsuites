$(function() { // On DOM content ready...
    var hrefs = [];

    $('.links a').each(function() {
        hrefs.push(this.href); // Store the URLs from the links...
    });
    
    $('#open-all').click(function() {
        for (var i in hrefs) {
            window.open(hrefs[i]); // ...that opens each stored link in its own window when clicked...
        }
    });
});