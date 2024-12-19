// Initialize Supabase client
const supabaseUrl = 'https://wtrxaghpwedjfmesareb.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cnhhZ2hwd2VkamZtZXNhcmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNDY2NzUsImV4cCI6MjA0OTgyMjY3NX0.MeJyDeSmIWkNR9JGbPUTW45HNFu42zz3xg7S90pEyvo'; // Replace with your actual Supabase key
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  // Get form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase
  .from('register')
  .select('*')
  .eq('email',email)
  .eq('password',password)
  .single();

  // Handle errors and success
  if (error || !data) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Invalid email or password",
      showConfirmButton: false,
      timer: 1500
    });
    alert('Invalid email or password');
    
}else {
    console.log("Login success:", data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    window.location.href = '../get-in-touch.html/demo.html';

}

document.getElementById('loginForm').reset();
});