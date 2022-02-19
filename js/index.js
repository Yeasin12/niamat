document.getElementById('login-btn').addEventListener('click',function(){
          const emailField = document.getElementById('user-email');
          const email = emailField.value;
          console.log(email);
          //get user password
          const passField = document.getElementById('user-password');
          const pass = passField.value;
          console.log(pass);
          if(email=='yeasinalfaruk@gmail.com' && pass=='holymoly'){
                    console.log('valid profile');
          }
          else{
                    console.log('unknown profile');
          }
         window.location.href ='another.html';
})