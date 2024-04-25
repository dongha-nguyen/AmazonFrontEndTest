document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach(function(star) {
      star.addEventListener('click', function() {
        const rating = parseInt(star.getAttribute('data-value'));
        setRating(rating);
      });
    });
  
    function setRating(rating) {
      stars.forEach(function(star) {
        const value = parseInt(star.getAttribute('data-value'));
        if (value <= rating) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
      document.querySelector('.star-rating').setAttribute('data-rating', rating);
    }

    /// Search Items
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    
    const items = [
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Banana', category: 'Fruit' },
        { id: 3, name: 'Carrot', category: 'Vegetable' },
        { id: 4, name: 'Orange', category: 'Fruit' },
        { id: 5, name: 'Broccoli', category: 'Vegetable' },
        { id: 6, name: 'Strawberry', category: 'Fruit' },
        { id: 7, name: 'Tomato', category: 'Vegetable' },
        { id: 8, name: 'Cucumber', category: 'Vegetable' }
    ];

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== '') {
        const filteredItems = items.filter(function(item) {
            return item.name.toLowerCase().includes(searchTerm) || item.category.toLowerCase().includes(searchTerm);
        });

        if (filteredItems.length > 0) {
            displaySearchResults(filteredItems);
        } else {
            searchResults.innerHTML = 'No results found';
        }
        } else {
        searchResults.innerHTML = 'Please enter a search term';
        }
    });

    function displaySearchResults(results) {
        searchResults.innerHTML = ''; // Clear previous search results

        results.forEach(function(item) {
        const itemElement = document.createElement('div');
        itemElement.textContent = `ID: ${item.id}, Name: ${item.name}, Category: ${item.category}`;
        searchResults.appendChild(itemElement);
        });
    }

    // Optionally, you can listen for Enter key press to trigger search
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
        searchButton.click();
        }
    });

    // Like Button
    let likeCount = 0;
    likeButton = document.getElementById('likeButton');
    likeText = document.getElementById('likeText');

    likeButton.addEventListener('click', function(event) {
        likeCount += 1;
        likeText.textContent = likeCount;
    });
  });