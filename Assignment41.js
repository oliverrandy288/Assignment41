// Task 1: Implement a conditional statement to check if the user is logged in
let loggedIn = true;  // Set to false to test the 'not logged in' condition

// Task 2: Check if the user is logged in and display cart items
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];

if (loggedIn) {
  console.log("You are logged in. Here is your cart:");
  // Loop over the cart array and log the list of available products
  for (let i = 0; i < cart.length; i++) {
    console.log(`${i + 1}. ${cart[i]}`);
  }
} else {
  console.log("Please log in to view your cart.");
}

// -----------------------------------------------

// Banking System Simulation with Functions

let balance = 1000;  // Initial balance

// Task 1: Function to handle deposits into the bank account
function deposit(amount) {
  balance += amount;
  console.log(`Deposited $${amount}. Your new balance is $${balance}.`);
}

// Task 2: Function to handle withdrawals from the bank account
function withdraw(amount) {
  if (amount > balance) {
    console.log("Insufficient funds.");
  } else {
    balance -= amount;
    console.log(`Withdrew $${amount}. Your new balance is $${balance}.`);
  }
}

// Task 3: Function to check the current balance
function checkBalance() {
  console.log(`Your current balance is $${balance}.`);
}

// Test the functions
deposit(500);   // Deposit $500
withdraw(200);  // Withdraw $200
checkBalance(); // Check balance

