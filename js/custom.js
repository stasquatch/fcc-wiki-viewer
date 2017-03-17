var wikiSubmit = document.getElementById('wiki-submit');

$('#wiki-submit').click(function() {
  var wikiQuery = document.getElementById('wiki-input').value;

  // Error handling if left blank
  if(wikiQuery === "") {
    console.log("Left Blank");
  } else {
    fetchJSON(wikiQuery);
  };
});

function fetchJSON(wikiQuery) {
  // replace spaces with %20
  wikiQuery = wikiQuery.replace(/ /g,"%20");

  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiQuery + "&format=json&callback=?";
  var request = new XMLHttpRequest();

  $.ajax({
    type: 'GET',
    url: url,
    async: false,
    dataType: 'json',
    success: function(data) {
      console.log(data[2]);
    },
    error: function(error) {
      $('.error').html('<span class="error">Looks like there was an error contacting the server. Please let the webmaster know.</span>');
    }
  })
}

function placeResults(results) {

}
