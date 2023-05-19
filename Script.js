// Function to handle search button click
function handleSearchButton() {
  handleSearch();
}

// Event listener for search button click
document.getElementById('search-button').addEventListener('click', handleSearchButton);

// Function to handle search functionality
function handleSearch() {
  // Get the search input value
  var searchValue = document.getElementById('search').value.toLowerCase();

  // Get the cards
  var cards = document.getElementsByClassName('card');

  // Loop through all cards
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var name = card.querySelector('.name').innerText.toLowerCase();

    // Check if the search value matches the name
    if (name.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
}