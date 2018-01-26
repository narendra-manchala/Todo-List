1.

//checkoff specific todos by clicking
$("li").on("click",function(){
	//if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		// turn it black
		$(this).css({
			color: "black",
			textDecoration: "none"
		})
	}
		//else
	else{
		//turn it gray
		$(this).css({
			"color": "gray",
			textDecoration: "line-through",
		})
	}
	
})

2.

//checkoff specific todos by clicking
$("li").on("click",function(){
	$(this).toggleClass("completed");
})

3.

//checkoff specific todos by clicking
$("li").on("click",function(){
	$(this).toggleClass("completed");
})

//remove the task on clicking delete

$("span").on('click', function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
})


//add new todo

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span><i class='fa fa-trash' aria-hidden='true'></i> </span>"+todoText+"</li>");
	}
})


4.

//checkoff specific todos by clicking
$("ul").on("click","li",function(){			//here we changed code - ul is clicked but li is listened
	$(this).toggleClass("completed");
})

//remove the task on clicking delete

$("ul").on('click',"span", function(event){		//here we changed code - ul is clicked but li is listened
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
})

//add new todo

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span>X </span>"+todoText+"</li>");
	}
})
