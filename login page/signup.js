// Initialize Supabase client
const supabaseUrl = 'https://wtrxaghpwedjfmesareb.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cnhhZ2hwd2VkamZtZXNhcmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNDY2NzUsImV4cCI6MjA0OTgyMjY3NX0.MeJyDeSmIWkNR9JGbPUTW45HNFu42zz3xg7S90pEyvo'; // Replace with your actual Supabase key
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    // Get form data
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Full Name:", fname);
    console.log("Email:", email);
    console.log("Password:", password);
  
    // Insert data into Supabase table
    const { data, error } = await supabase
        .from('register')  // Replace with your actual table name (e.g., 'users')
        .insert([
            { name: fname, email: email, password: password }
        ]);

    // Handle errors and success
    if (error) {
        console.error("Error inserting user:", error);
        alert("Registration failed: " + error.message);
    } else {
        console.log("User registered:", data);
        alert("Registration successful!");
    }
});