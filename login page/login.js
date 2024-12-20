// Initialize Supabase client
const supabaseUrl = 'https://wtrxaghpwedjfmesareb.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cnhhZ2hwd2VkamZtZXNhcmViIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDI0NjY3NSwiZXhwIjoyMDQ5ODIyNjc1fQ.d1GZ11sNYbzj46NGZqg-uWhZHHC2mICEaiiOYM6TvCQ'; // Replace with your actual Supabase key
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  

  // Get form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessageDiv = document.getElementById('error-message');
  
  const { data, error } = await supabase
  .from('register')
  .select('*')
  .eq('email', email)
  .eq('password', password)
  .single();
  
  
  console.log('Full response from Supabase:', { data, error });
  console.log('Users:', data);

  // Handle errors and success
  if (error || !data) {
    errorMessageDiv.style.display = 'block';
    errorMessageDiv.textContent = 'Invalid email or password.';
    
}
else {
    console.log("Login success:", data);
   
    window.location.href = '../get-in-touch.html/demo.html';

}


});