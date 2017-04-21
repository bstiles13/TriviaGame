$(document).ready(function() {

var index = 0;
var time = 0;
var timeout = 0;
var countdown;
var correctGuesses = 0;
var wrongGuesses = 0;
var pause = false;

//All trivia questions and associated items are stored in objects within an array
var trivia = [
	{
		question: "What is the tallest mountain from base to peak?",
		options: ["Mount Everest", "Mauna Kea", "Chimborazo", "Mount Kilimanjaro"],
		answer: "Mauna Kea",
		image: "http://geology.com/records/mauna-kea-snow.gif"
	},
	{
		question: "What animal has the greatest bite force?",
		options: ["Crocodile", "Hippo", "Jaguar", "Bull Shark"],
		answer: "Crocodile",
		image: "http://i.imgur.com/Jrh84fh.gif"
	},
	{
		question: "What animal sleeps the longest in an average day?",
		options: ["Squirrel", "Koala", "Brown Bat", "Possum"],
		answer: "Koala",
		image: "https://media.giphy.com/media/aWpSIlUoSvcNa/giphy-downsized-large.gif"
	},
	{
		question: "In the TV series Friends, what type of monkey does Ross have as a pet?",
		options: ["Tamarin", "Capuchin", "Squirrel Monkey", "Bonobo"],
		answer: "Capuchin",
		image: "http://static.fjcdn.com/gifs/Monkey_16b83c_507120.gif"
	},
	{
		question: "With approximately 700 species worldwide, what kind of insect is a 'whirligig'?",
		options: ["Spider", "Dragonfly", "Ant", "Beetle"],
		answer: "Beetle",
		image: "https://media.giphy.com/media/GnAXkKXa4hHJS/giphy.gif"
	},
	{
		question: "Which of these animals has the longest lifespan?",
		options: ["Asian Elephant", "Greenland Shark", "Macaw Parrot", "Galapagos Tortoise"],
		answer: "Greenland Shark", 
		image: "http://68.media.tumblr.com/54bf19378a5f262725c9eb680427de04/tumblr_nnsehvu9rW1th8gyeo1_r1_500.gif"
	}
];

//Begins game by calling first trivia question and beginning timer
function start() {
	if (index < trivia.length) {
	$(".timer").show().empty();
	$(".question").show().empty();
	$(".choose").show().empty();
	$(".gif").hide();
	addTrivia(index);
	setTimer();
	} else {
		results();
	}
};

//Game begins on page load
start(index);

//Calls trivia question based on input (index of trivia array) variable
function addTrivia(input) {
	$(".question").append("<span>" + trivia[input].question + "</span");
	for (var i = 0; i < trivia[input].options.length; i++) {
		$(".choose").append("<div class='option'><span>" + trivia[input].options[i] + "</span></div>");
	}
	$(".trivia").append($(".choose"));
};

//Defines 15 second timer that starts at the beginning of each trivia question
function setTimer() {
	time = 15;
	timeout = time;
	$(".timer").html("Seconds Remaining: " + time);
	countdown = setInterval(function() {
		time--;
		$(".timer").html("Seconds Remaining: " + time);
		if (time === -1) {
			wrongGuesses++;
			clearInterval(countdown);
			transition();
		}
	}, 1000);
};

//Reveals gif associated with question and represents the correct answer
//Gif lasts for 5 seconds and then Start function is called, restarting the timer and triggering next question (or end results)
function transition() {
	$(".timer").hide();
	$(".question").hide();
	$(".choose").hide();
	$(".gif").html("<img id='pic' src='" + trivia[index].image + "'</img>").show();
	setTimeout(function() {
		index++;
		start(index);
	}, 5000);

};

//When the player makes a choice, the result is tallied and the Transition function is called, restarting timer and triggering next question
$(document).delegate('.option', 'click', function(){
	if ($(this).text() === trivia[index].answer) {
		correctGuesses++;
	} else {
		wrongGuesses++;
	};
	clearInterval(countdown);
	transition();
});

//Function that displays correct and wrong guesses, as well as a reset button to restart the game
function results() {
	$(".timer").hide();
	$(".question").hide();
	$(".choose").hide();
	$(".gif").hide();
	$(".trivia").append("<div class='results'></div>")
	$(".results").append("<br><div><u>Game Results:</u></div><br><br>");
	$(".results").append("<div>Correct Guesses: " + correctGuesses + "</div>");
	$(".results").append("<div>Wrong Guesses: " + wrongGuesses + "</div");
	$(".results").append("<br><br><input class='reset btn btn-default' type='button' value='reset'>");
}

console.log(trivia[0].options.length);

//Resets the game and variables back to original state
function reset() {
	$(".results").remove();
	index = 0;
	time = 0;
	timeout = 0;
	countdown;
	correctGuesses = 0;
	wrongGuesses = 0;
	start(index);
};

//Clicking the globe gif pauses the timer; clicking again resets the timer
$("#globe").on("click", function() {
	if (pause === false) {
		pause = true;
		clearInterval(countdown);
	} else {
		pause = false;
		start(countdown);
	}
})

//Calls Reset function when reset button is clicked
$(document).delegate('.reset', 'click', function(){
	reset();
})

});