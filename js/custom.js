var wikiSubmit = document.getElementById('wiki-submit');

wikiSubmit.addEventListener("click", function() {
  var wikiQuery = document.getElementById('wiki-input').value;

  // Error handling if left blank
  if(wikiQuery === "") {
    console.log("Left Blank");
  } else {
    fetchJSON(wikiQuery);
  };
});

function fetchJSON(wikiQuery) {
  var urlBase = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=";
  var urlEnd = "&rvprop=content";
  var request = new XMLHttpRequest();

  // replace spaces with %20
  wikiQuery = wikiQuery.replace(/ /g,"%20");

  $.getJSON('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json', function(data) {
      console.log(data);
  })
}
