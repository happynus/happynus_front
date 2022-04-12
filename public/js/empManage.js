function removeSpaces(string) {
	return string.split(' ').join('');
   }
   

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();


	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
		'<th scope="col"> '+
		'<label class="control control--checkbox">'+
		  '<input type="checkbox" class="js-check-all"/>'+
		 ' <div class="control__indicator"></div>'+
		'</label>'+
	  '</th>' +
            '<td><input type="text" class="form-control" name="empNo" id="empNo" placeholder="사번"></td>' +
            '<td><input type="text" class="form-control" name="empName" id="empName" placeholder="이름"></td> ' +
            '<td><input type="text" class="form-control" name="deptName" id="deptName" placeholder="부서명"></td>' +
			'<td><input type="text" class="form-control" name="teamName" id="teamName" placeholder="팀명"></td>' +
			'<td><input type="text" class="form-control" name="position" id="position" placeholder="직급"></td>' +
			'<td><input type="text" class="form-control" name="empEntry" id="empEntry" placeholder="입사일"></td>' +
			'<td><input type="text" class="form-control" name="phoneNum" id="phoneNum" placeholder="연락처"></td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });



	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });


	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="'+ $.trim( $(this).text() )+ '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });

    
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});

// $(this).html('<input type="text" class="form-control" value="'+ $(this).text()+ '">');
// $(this).html('<input type="text" class="form-control" value="'+ $(this).text()+ '" onchange="' + $(this).text() + '=removeSpaces(' + $(this).text() )+'"> )'
// onblur="'+ $(this).text() + ' = removeSpaces(' + $(this).text() + ');"
//			$(this).html('<input type="text" class="form-control" onblur="'+ $(this).text() + ' = removeSpaces(' + $(this).text() + ');">');
// $(this).html('<input type="text" class="form-control" onblur="'+ $(this).text() + ' = removeSpaces(' + $(this).text() + ');">');