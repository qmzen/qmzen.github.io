
// jQuery(function($) {'use strict',
//
// 	$(document).ready( function () {
// 			// I only have one form on the page but you can be more specific if need be.
// 			var $form = $('form');
//
// 			if ( $form.length > 0 ) {
// 				$('form input[type="submit"]').bind('click', function ( event ) {
// 					if ( event ) event.preventDefault();
// 					// validate_input() is a validation function I wrote, you'll have to substitute this with your own.
// 					//alert("called");
// 					//register($form);
//
// 					if ( validateEmail() ) { }
// 					else { $("#result").hide().html("<div class='error'>官人，邮箱📮地址有误啊 ：（</div>").slideDown(200); }
//
// 				});
// 			}
// 		});
//
//   });


function validateEmail() {
  	
  $email = $("#EMAIL").val();
  if ($email==""){
	  $email = 0;
	  }
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}




function validate_input($form){
	
	
	}

function register($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
		cache       : false,
        dataType    : 'json',
        jasonp:"c",
		contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("连接到服务器出问题了，没关系，你可以加QQ群：7165533693"); },
        success: function(data){
            var resultMessage = data.msg || "<div class='error'>连接到服务器出问题了，没关系，你可以加QQ群：7165533693</div>";

            if (data.result != "success") {
                if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                    resultMessage = "<div class='success'>你已经成功订阅了</div>";
					$("#result").hide().html(resultMessage).slideDown(200);
                }
				else {					
					 resultMessage = "<div class='error'>连接到服务器出问题了，没关系，你可以加QQ群：7165533693</div>";
					$("#result").hide().html(resultMessage).slideDown(200);
					}
            } else {
                resultMessage = "<div class='success'>你已经成功订阅了</div>";
		        $("#result").hide().html(resultMessage).slideDown(200);
				$("form").hide().slideUp(200); 		
            }		
		 	
		}
    });
}
