$(document).ready(function() {

	var fname = "";
	var lname = "";
	var age = "";
	var job = "";
	var salary = "";
	var counter = "";
	var id = 1;
  
	$(document).on("click", "section button.edit", function() {
	   $(this).parents('tr').find('.edit, .delete').css({
		display: 'none'
	  });
  
	  $(this).parents('tr').find('.hidden').css({
		display: 'table-cell'
	  });
	  var a = $(this).parents("tr").find('input').addClass('active');
	  var c = $(this).parents("tr").find('input').hasClass('active'); 
	  counter++;
  
	  if (c) {
		$(this).parents('tr').find('input').removeAttr('readonly');
		fname = $(this).parents('tr').find('#fname').val();
		lname = $(this).parents('tr').find('#lname').val();
		age = $(this).parents('tr').find('#age').val();
		job = $(this).parents('tr').find('#job').val();
		salary = $(this).parents('tr').find('#salary').val();
	  }
	  else {
		$(this).parents('tr').find('input').attr('readonly', 'true');
	  }
  
	  $(document).on("click", "section button.update", function(){
		 $(this).parents("tr").find('input').removeClass('active');
		 $(this).parents('tr').find('input').attr('readonly', 'true');
		 $(this).parents('tr').find('.u').css({
		  display: 'none'
		 });
	   });
  
	  $(document).on("click", "section button.cancel", function(){
		$(this).parents('tr').find("#fname").val(fname);
		$(this).parents('tr').find("#lname").val(lname);
		$(this).parents('tr').find("#age").val(age);
		$(this).parents('tr').find("#job").val(job);
		$(this).parents('tr').find("#salary").val(salary);
		$(this).parents('tr').find('.c').css({
		  display: 'none'
		});
  
		$(this).parents('tr').find('.edit, .delete').css({
		  display: 'table-cell'
		});
	  });
	   
	});
	
  
	$(document).on("click", "section button.create", function() {
	  id++;
	  var table = $("section table");
	  var tr = $("<tr></tr>").appendTo(table);
	  $("<td>"+id+"</td>").appendTo(tr);
	  $("<td> <input type='text' id='fname' class='active'> </td>").appendTo(tr);
	  $("<td> <input type='text' id='lname' class='active'> </td>").appendTo(tr);
	  $("<td> <input type='date' id='age' class='active'> </td>").appendTo(tr);
	  $("<td> <input type='text' id='job' class='active'> </td>").appendTo(tr);
	  $("<td> <input type='text' id='salary' class='active'> </td>").appendTo(tr);
	  $("<td> <button class='edit'> Edit </button> </td>").appendTo(tr);  
	  $("<td class='hidden u'> <button class='update'> Update </button> </td>").appendTo(tr);  
	  $("<td class='hidden c'> <button class='cancel'> Cancel </button> </td>").appendTo(tr);  
	  $("<td> <button class='delete'> Delete </button> </td>").appendTo(tr);
	});
  
	  $(document).on("click", "section button.delete", function() {
	  $(this).parents('tr').remove();
	});
	
	});