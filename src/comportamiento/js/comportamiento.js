$(document).ready(function(){


// Seteo Default
	$("#mostrarForm").hide();
	$("#certiLeng2").hide();
	$("#certiLeng3").hide();
	$("#certiOffi").hide();
	$("#certiProg").hide();
	$("#formP2").hide();
	$("#formP3").hide();
	$("#aFormP1").hide();
	$("#aFormP2a").hide();
	$("#aFormP3").hide();
	$("#aceptar").hide();
	$(".container").customScrollbar();

// Activamos los Tooltips de Bootstrap
	 $('[data-toggle="tooltip"]').tooltip(); 

	
// Cambia Color del Encabezado
	$("#color").change(function(){
    $("#encabezado").css("background-color",$("#color").val());

  });
// Notificación de Bienvenida

	$.notify({
	title: '<strong>¡Bienvenido!</strong>',
	message: '<p>Con esta aplicación podras tener un CV listo para imprimir, ¡Solo tienes que llenar el formulario!.</p>'
},{
	type: 'info noPrint'
});


  $("#aFormP2b").click(function(){
  		$("#formP1").hide();
  		$("#formP3").hide();
  		$("#formP2").fadeToggle(500);
  		$("#aFormP3").show();
  		$("#aFormP1").show();
  		$("#aFormP2b").hide();
	});

  	    $("#aFormP1").click(function(){
  		$("#formP2").hide();
  		$("#formP3").hide();
  		$("#aFormP3").hide();
  		$("#formP1").fadeToggle(500);
  		$("#aFormP2b").show();
  		$("#aFormP1").hide();
	});

  	     $("#aFormP3").click(function(){
  		$("#formP2").hide();
  		$("#formP1").hide();
  		$("#aFormP2b").hide();
  		$("#aFormP1").hide();
  		$("#formP3").fadeToggle(500);
  		$("#aceptar").show();
  		$("#aFormP2a").show();
  		$("#aFormP3").hide();
	});

  	  $("#aFormP2a").click(function(){
  		$("#formP3").hide();
  		$("#formP1").hide();
  		$("#formP2").fadeToggle(500);
  		$("#aFormP3").fadeToggle(500);
  		$("#aFormP1").fadeToggle(500);
  		$("#aFormP2a").hide();
	});

   





// Toggler 
  $("#ocultarForm").click(function(){
  		$(".cierre").slideToggle(1000);
  		$("#mostrarForm").show();
  		$("#ocultarForm").hide();
	});

    $("#mostrarForm").click(function(){
  		$(".cierre").slideToggle(1000);
  		$("#mostrarForm").hide();
  		$("#ocultarForm").show();

	});


// Modo Vista previa - Modo Formulario
	  $("#ocultarCV").click(function(){
  		$("#CV").fadeToggle(500);
  		$("page").fadeToggle(500);
  		$("#formulario").delay(500).toggleClass("form-horizontal");
  		$("#formulario").delay(500).toggleClass("form-inline");
  			$.notify({
	title: '<strong>Modo chequeo de datos</strong>',
	message: '<p>Haz ingresado al modo chequeo de datos. Aquí podras visualizar más comodamente tu carga de datos, para volver al modo vista previa haz click en "On".</p>'
},{
	type: 'info noPrint'
});

	});

    $("#mostrarCV").click(function(){
  		$("#CV").fadeToggle(500);
  		$("#formulario").delay(500).toggleClass("form-inline");
  		$("#formulario").delay(500).toggleClass("form-horizontal");
  		  			$.notify({
	title: '<strong>Modo Vista Previa</strong>',
	message: '<p>Haz ingresado al modo vista previa. Aquí podras visualizar dinámica tu Curriculum, para volver al modo de chequeo desactiva la vista previa.</p>'
},{
	type: 'info noPrint'
});
	});

	  $("#certiLeng2CheckSi").click(function(){
  		$("#certiLeng2").show();
	});
	  	  $("#certiLeng2CheckNo").click(function(){
  		$("#certiLeng2").hide();
	});

		  $("#certiLeng3CheckSi").click(function(){
  		$("#certiLeng3").show();
	});
	  	  $("#certiLeng3CheckNo").click(function(){
  		$("#certiLeng3").hide();
	});

	  	 $("#certiOfficeCheckSi").click(function(){
  		$("#certiOffi").show();
	});
	  	  $("#certiOfficeCheckNo").click(function(){
  		$("#certiOffi").hide();
	});

	  	 $("#certiProgCheckSi").click(function(){
  		$("#certiProg").show();
	});
	  	  $("#certiProgCheckNo").click(function(){
  		$("#certiProg").hide();
	});

	$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});

	  $("#aceptar").click(function(){
  		$("#formulario").hide;
  		$("footer").hide();
  		$("#barraHerramientas").hide();
  			$.notify({
	title: '<strong>¡Carga Completa!</strong>',
	message: 'Tu Curriculum esta listo para ser impreso'
},{
	type: 'success'
});
	});


	  		//	<!-- After Form Submitted Validation-->
			$("#aceptar2222222222222222222222222222222").click(function(event){
				var form_data=$("#formulario").serializeArray();
				var error_free=true;
				for (var input in form_data){
					var element=$("#formulario_"+form_data[input]['name']);
					var valid=element.hasClass("valid");
					var error_element=$("span", element.parent());
					if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
					else{error_element.removeClass("error_show").addClass("error");}
				}
				if (!error_free){
					event.preventDefault();
						$.notify({
	title: '<strong>¡Error!</strong>',
	message: 'Deb'
},{
	type: 'error'
}); 
				}
				else{
					 $("#formulario").hide;
  					$("footer").hide();
  					$("#barraHerramientas").hide();
						$.notify({
	title: '<strong>¡Carga Completa!</strong>',
	message: 'Tu Curriculum esta listo para ser impreso'
},{
	type: 'success'
});
				}
			});

  });