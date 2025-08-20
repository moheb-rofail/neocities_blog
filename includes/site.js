// Get which page the user wants from the URL
var queryString = window.location.search;
var urlParams = new URLSearchParams( queryString );
var page = urlParams.get( "page" );


// Delcare some safe pages
var safePages = [
	"home", "comments", "category", "guestBook", "posts", "post", "categories", "contact"
];

// If the page the user wants isn't a safe one, just load the home page
if(page == null) page = "home";
if( safePages.indexOf( page ) == -1 )
{
	page = "not_found";
}

// Load the page and write it to the HTML
function writePageContent()
{
	// Load the page
	var request = new XMLHttpRequest();
	request.open( "GET", page + ".html", false);
	request.send( null );

	// Write the page to the HTML
	document.write( request.responseText );
}