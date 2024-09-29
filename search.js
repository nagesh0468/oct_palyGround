export function searchFilter(search, arr, resultBox) {
    search.onkeyup = function () {
        let result = [];
        let input = search.value;

        // Filter the array based on the search input
        if (input.length) {
            result = arr.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        } else {
            resultBox.innerHTML = "";
        }
        display(result);
    };

    // Display the filtered results in the result box
    function display(result) {
        resultBox.innerHTML = "";  // Clear previous results

        const ul = document.createElement('ul');
        ul.classList.add('city_list', 'box');

        result.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;

            // Attach event listener to each list item
            li.addEventListener('click', function () {
                selectInput(item);  // Pass the clicked item to selectInput
            });

            ul.appendChild(li);
        });

        resultBox.appendChild(ul);
    }

    // Set the selected list item as the search input value
    function selectInput(selectedItem) {
        search.value = selectedItem;  // Set the search box value to the clicked item
        resultBox.innerHTML = '';     // Clear the result box after selection
    }
}
