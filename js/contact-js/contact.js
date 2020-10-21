// js for contact part 
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
       if (name === "") {
      alert("please fill in your name");
      return false;
    } else if (email === "") {
      alert("Please fill in your name and email");
      return false;
    } else {
      alert(
        name + ", We have received your message. Thank you for reaching out to us."
      );
    }
    event.preventDefault();
  }
  // jquery for feedback form
  $(function()
  {
      function after_form_submitted(data) 
      {
          if(data.result == 'success')
          {
              $('form#reused_form').hide();
              $('#success_message').show();
          }
          else
          {
              $('#success_message').hide();
              $('button[type="button"]', $form).each(function()
              {
                  $btn = $(this);
                  label = $btn.prop('orig_label');
                  if(label)
                  {
                      $btn.prop('type','submit' ); 
                      $btn.text(label);
                      $btn.prop('orig_label','');
                  }
              });
              
          }
      }
  
    $('#reused_form').submit(function(e)
        {
          e.preventDefault();
  
          $form = $(this);
          $('button[type="submit"]', $form).each(function()
          {
              $btn = $(this);
              $btn.prop('type','button' ); 
              $btn.prop('orig_label',$btn.text());
              $btn.text('Sent');
          });
          
    
          
        });	
  });
  