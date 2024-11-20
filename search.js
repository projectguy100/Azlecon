document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    let files = [];

    fetch('search.json')
        .then(response => response.json())
        .then(data => {
            files = data;
        })
        .catch(error => console.error('Error loading search.json:', error));

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFiles = files.filter(file => 
            file.name.toLowerCase().includes(searchTerm)
        );

        displayResults(filteredFiles);
    });

    function displayResults(results) {
        searchResults.innerHTML = '';
        results.forEach(file => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = file.name;
            resultItem.addEventListener('click', () => downloadFile(file.path));
            searchResults.appendChild(resultItem);
        });
    }

    function downloadFile(filePath) {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filePath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
