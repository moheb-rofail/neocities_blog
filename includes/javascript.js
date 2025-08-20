// to include small pages in another page.
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("data-include");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("data-include");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
includeHTML();
function getPostUrl(url){
  return "?page=post&p=" + url;
}

function getPostTitle(url) {
  return url.replace(/_/g, " ");
}

function getString(key) {
  var strings = {
    "siteName" : "Moheb Rofail",
    "siteDescription" : "A Christian, Freelance Programmer, author, blogger and Arabic, French, English translator from Egypt.",
    "postDefaultPhoto": "images/neocitieslogo.svg"
    };
 return strings[key];  
}

// a function takes the text and returns its words count
function countWords(text) {
  // remove spaces before and after the text
  text = text.trim();
  // devide the text to portions by its spaces
  const words = text.split(/\s+/);
  // check if the text is null, if so return 0, if not return the count.
  return words[0] === "" ? 0 : words.length;
}


// a function takes the word count of any paragraph or article and returns the reading time per minute.
function calculateReadingTime(wordsCount, wordsPerMinute = 225) {
  const readingTimeMinutes = wordsCount / wordsPerMinute;
  return Math.ceil(readingTimeMinutes);
}

function getSponsors() {
  return {
    "https://www.xhjk.online/": ["Games Blog is your ultimate destination for thrilling journeys, immersive storytelling, and epic challenges.", "1 Sep 2025"]
  };
}