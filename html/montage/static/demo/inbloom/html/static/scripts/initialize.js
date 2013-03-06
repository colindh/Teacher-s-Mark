$.apiCall = function(method, target,callback,input){
	alert('calling link ' + target);	
	$.ajax({
		url:target,
		type:method,
		data:input,
		dataType:'json',
		headers:{'Content-Type': 'application/vnd.slc+json',
			'Accept': 'application/vnd.slc+json',
			'Authorization': 'bearer '+window.oAuth["access_token"]},
		success: function(data){console.log(data)},//callback(data, textStatus, jqXHR),
		error: function(xhr, ajax, e){
			alert('Call to '+ target +' for data failed.' + xhr.responseText);
		}
	});

}
$.initialize = function() {
	
	// -------------------------------------------------------
	if(typeof window.oAuth !== 'undefined' && window.oAuth === '' && typeof window.oAuth["error"] === undefined){
		window.location = './';
	}

	$.getJSON('http://localhost:8080/students',function(studentData){
		$("#students").html('');
		_.each(studentData,function(value){
			$('#students').append('<li><button class="white"><img src="static/images/genericPic.png" width="50">'+value["name"]["firstName"]+' '+ value["name"]["lastSurname"] +'</button></li>');
		});
	});

	$.getJSON('http://localhost:8080/courses',function(classData){
		$.getJSON('http://localhost:8080/sections',function(sectionData){
			$("#classes").html('');
			_.each(classData,function(value){
		   	 	_.each(sectionData,function(section){		
					if(section['courseOfferingId'] == value["id"] !== undefined){
						$('#classes').append('<li><button class="adrift glyph write">'+value["localCourseTitle"]+' '+ section["uniqueSectionCode"] +'</button></li>');
					}
				});
			});
		});
	});

	// Update
	if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {
		// IE8 doesn't like HTML!
	} else {
		window.addEventListener("load", function (a) {
		    window.applicationCache.addEventListener("updateready", function (a) {
		        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
		            window.applicationCache.swapCache();
		            
		            $.notification( 
		            	{
		            		title: 'An update has been installed!',
		            		content: 'Click here to reload.',
		            		icon: "u",
		            		click: function() {
		            			window.location.reload();
		            		}
		            	}
		            );
		            
		        }
		    }, false);
	    
		    window.applicationCache.addEventListener("downloading", function (a) {
		        if (window.applicationCache.status == window.applicationCache.DOWNLOADING) {
		    		$.notification( 
		    			{
		    				title: 'Latest version is being cached',
		    				content: 'Only takes a few seconds.',
		    				icon: "H"
		    			}
		    		);
		    	}
		    }, false);
	
		}, false);
	



	}
	
	// --------------- Add class to body ---------------
	$("body").addClass("dashboard");
	// -------------------------------------------------------
	
	// --------------- Span image replace --------------------
	$("#header ul li > ul > li > img.avatar").each(function() {
		$(this).replaceWith( $('<span />').addClass("avatar").css("background-image", "url("+$(this).attr("src")+")") );
	});
	$("#header ul li.avatar, .comment .avatar").each(function() {
		var src = $(this).children("img").attr("src");
		$(this).children("img").remove();
		$(this).css("background-image", "url("+src+")");
	});
	// -------------------------------------------------------
	
	
	// --------------- Checkbox toggle replace ---------------
	$("input:checkbox").each(function () {
		$(this).checkbox();
	});
	
	
	
	$(".checkbox input").change(function () {
		$(this).parents("span").toggleClass("checked");
	});
	// -------------------------------------------------------
	
	
	// --------------- File input replace --------------------
	$('input[type="file"]').file();
	// -------------------------------------------------------
	

	// --------------- Select replace ------------------------
	$("select").chosen();
	// -------------------------------------------------------

	
	
	
};

// Initializing of the Pastel Dashboard!
$(document).ready(function() {
	$.initialize();
});
