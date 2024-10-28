// Step 1: Initialize the Async Function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Step 4: Fetch Data Using try-catch
    try {
        // Display loading message
        dataContainer.innerHTML = 'Loading user data...';

        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert response to JSON format

        // Step 5: Clear the Loading Message
        dataContainer.innerHTML = '';

        // Step 6: Create and Append User List
        const userList = document.createElement('ul'); // Create <ul> element
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li> element
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append <li> to <ul>
        });
        dataContainer.appendChild(userList); // Append <ul> to data container

    } catch (error) {
        // Step 7: Error Handling
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error("Error fetching user data:", error);
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);