(function() {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');
        var strDoubleBR = '<br><br>';
        var strRndWord = [
          'accorded',
          'administered',
          'allowed',
          'anted up',
          'awarded',
          'bequeathed',
          'bestowed',
          'ceded',
          'commited',
          'conferred',
          'consigned',
          'contributed',
          'conveyed',
          'deeded',
          'delivered',
          'dished out',
          'dispensed',
          'doled out',
          'donated',
          'endowed',
          'entrusted',
          'forked over',
          'furnished',
          'gifted',
          'granted',
          'handed over',
          'parceled out',
          'parted with',
          'permitted',
          'ponied up',
          'presented',
          'provided',
          'relinquished',
          'shelled out',
          'transmitted',
          'turned over',
          'vouchsafed',
          'willed',
          'yielded'
        ]
        
        var strRndWord = strRndWord[Math.floor(Math.random()*strRndWord.length)];
   
        if (results.length) { // Are there any results?
            var appendString = '';

            for (var i = 0; i < results.length; i++) {  // Iterate over the results
                var item = store[results[i].ref];             

                appendString += '<div class="post-preview"><a href="' + item.url + '"><h1 class="post-title">' + item.title + '</h1>';
              
               var d = item.date;
               var s1 = d.indexOf(" ");
               var c = d.indexOf(",");
               var strMonth = d.slice(0,s1);
               var strDay = d.slice(s1,c);
               var strYear = d.slice(-4);
               var strTotal = strDay + ' ' + strMonth + ' ' + strYear              
               appendString += '<p class="post-date">' + strTotal;                           

                
                appendString += item.excerpt + '</a>';
                //appendString += '<p class="post-meta">item.author + 'on ' + item.date;
              
                appendString += '<hr>';
            }
          
        if (i == 1) { strResult = 'result'; } else { strResult = 'results'; }
          
          var strResults = searchTerm + ' ' +  strRndWord + ' ' +  i + ' ' + strResult + '.';     

            searchResults.innerHTML = '<h1>' + strResults + '</h1><hr class="small">' + appendString;
        } else {
            var str0Results = searchTerm + ' ' +  strRndWord + ' ' +  '0 results.';
            searchResults.innerHTML = '<h1>' + strResults + '</h1><hr class="small">' + appendString;
            searchResults.innerHTML = '<h1>' + str0Results + '</h1><hr class="small">';            
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('query');

    if (searchTerm) {
        //document.getElementById('search-box').setAttribute("value", searchTerm);

        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category');
            this.field('content');
        });

        for (var key in window.store) { // Add the data to lunr
            idx.add({
                'id': key,
                'title': window.store[key].title,
                'author': window.store[key].author,
                'category': window.store[key].category,
                'content': window.store[key].content
            });

            var results = idx.search(searchTerm); // Get lunr to perform a search
            displaySearchResults(results, window.store); // We'll write this in the next section
        }
    }
})();
