		//Genarate a random integer between 1 and 100
		let randomNumber = Math.floor(Math.random() * 100) + 1;

		const button = document.getElementById("button");
		const result = document.getElementById("result");
		let inputs = [];
		let missed = true; 
		const guessTimesLable = document.getElementById("guessTimes");
		let chance = 8;
		guessTimesLable.innerHTML = chance;



		button.addEventListener("click", function(){

			console.log("randomNumber is " + randomNumber);

			var inputNumber = document.getElementById("filledNumber").value;

			chance --;
			guessTimesLable.innerHTML = chance;

			if ( chance === 1) {
				guessTimesLable.parentNode.lastChild.innerHTML = "time";
			}

			
			inputs.push(inputNumber);

			if ( inputNumber <= 0 || inputNumber > 100 ) {
				var span = document.createElement("span");
				var textnode = document.createTextNode("You just input " + inputNumber + ". Please give me a interger number between 1 and 100");
				span.appendChild(textnode);
				result.appendChild(span);
			} else if (inputNumber > randomNumber) {
				var span = document.createElement("span");
				var textnode = document.createTextNode("Wrong, " + inputNumber + " is too big");
				span.appendChild(textnode);
				result.appendChild(span);
			} else if (inputNumber < randomNumber) {
				var span = document.createElement("span");
				var textnode = document.createTextNode("Wrong, " + inputNumber + " is too small");
				span.appendChild(textnode);
				result.appendChild(span);
			} else {
				guessTimesLable.parentNode.remove();
				document.getElementById("filledNumber").remove();
				button.remove();
				result.style.color="green";
				missed = false;
				result.innerHTML = "Congratulation, " + inputNumber + " is correct";				
			}

			if ( missed && chance < 1) {
				guessTimesLable.parentNode.remove();
				document.getElementById("filledNumber").remove();
				button.remove();
				result.innerHTML = "You've tried too many times. Take a break :) <br><br>All the number you guessed are " + inputs + "<br>The correct number was " + randomNumber;
			}
        })