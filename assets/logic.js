//Here is an 
var animals = ['Tiger', 'Lion', 'Monkey', 'Racoon','Elephant','leopard','Zebra','Horse','Dog','Cat',];
	
	//Here is the code to create buttons
	function appendNewButton(animal){ 
	    var a = $('<button>')
	    a.addClass('animal');
	    a.attr('data-name', animal);
	    a.text(animal);
	    $('#buttonsView').append(a);
	}
	
	//Here is the code that will add names to the buttons based upon what is within the array
	function renderButtons(){ 
		for (var i = 0; i < animals.length; i++){
		    appendNewButton(animals[i])
		}
	}
	renderButtons();

	//Here is the Javascript code to add new buttons

	$('#addAnimal').on('click', function(){

		var animal = $('#animal-input').val().trim();

		animals.push(animal);
		
		appendNewButton(animal);
		$('#animal-input').val("");

		return false;
		$('#addAnimal').val();
	});

	
	//Here is the code for the search click function- it is intended to send an AJAX request to API
	//in order to get the requested data based upon search parameters
	$('.animal').on('click',function(){
		
		var animal = $(this).data('name');
		
		console.log(animal);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
                url: queryURL,
                method: 'GET'
        })

    	.done(function(response) {
            console.log(queryURL);
            console.log(response);
            
            //Here is the result that occurs once communication between program and API is complete
            var results = response.data;
            
            for (var i = 0; i < results.length; i++) {
                
                var animalDiv = $('<div>');
                var p = $('<p>').text("Rating: " + results[i].rating);
                var animalImage = $('<img>');
                animalImage.attr('src', results[i].images.fixed_height.url);
                
               
                animalDiv.append(p);

                animalDiv.append(animalImage);
                
                $('#animalsView').prepend(animalDiv);

           	}
        });
    });
	

	