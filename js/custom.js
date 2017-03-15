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
  var urlBase = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=";
  var urlEnd = "&rvprop=content&format=json&callback=?";
  var request = new XMLHttpRequest();

  // replace spaces with %20
  wikiQuery = wikiQuery.replace(/ /g,"%20");

  $.getJSON(urlBase + wikiQuery + urlEnd, function(data) {
      console.log(data.query.pages);
  })
}
