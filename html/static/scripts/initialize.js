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
		window.students = studentData;
		$("#students").html('');
		_.each(studentData,function(value){
			$('#students').append('<li><button class="white"><img src="static/images/genericPic.png" width="50">'+value["name"]["firstName"]+' '+ value["name"]["lastSurname"] +'</button></li>');
		});
	});

	$.getJSON('http://localhost:8080/courses',function(classData){
		$.getJSON('http://localhost:8080/sections',function(sectionData){
			window.classes = new Array();
			$("#classes").html('');
			_.each(classData,function(value){
		   	 	_.each(sectionData,function(section){		
					if(section['courseOfferingId'] === value["id"]){
						classes.push(value);
						$('#classes').append('<li><button class="adrift glyph write">'+value["localCourseTitle"]+' '+ section["uniqueSectionCode"] +'</button></li>');
					}
				});
			});
		});
	});
	
	$('#students').click(function(event){
		$(event.target).toggleClass('selected');
	});
	$('#classes').click(function(event){
		window.section = window.classes[0];
		var label = $(event.target).html();
	});

	$('#sendMark').click(function(event){
		_.each(window.students,function(current){
			if($('button:contains('+current["name"]["firstName"]+' '+ current["name"]["lastSurname"]+')').hasClass('selected')){
			var info = $('<form><input type="text" name="student_id" value="'+current["id"]+'" /><input type="text" name="school_id" value="'+window.section["schoolId"]+'" /><input name="message" value="'+current["firstName"] + ' ' + $('select[name=action]').val()+' '+$('select[name=subject]').val()+'"  </form>');
			$.ajax({url:'http://localhost:8080/attendances',
				type:'POST',
				data:info.serialize(),
				success: function(data){alert('Save successful!')},
				error: function(xhr, ajax, e){
					alert('Call to '+'http://localhost:8080/attendances' +' for data failed.' + xhr.responseText);
				}

			});
			}
		});
		//save to attendance or assignment based on flow
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
