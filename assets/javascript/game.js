$(document).ready(function() {

var questionTracker = 0;
var time = 0;
var go;
var correctGuesses = 0;
var wrongGuesses = 0;

var trivia = [
	{
		question: "What is the tallest mountain from base to peak?",
		options: ["Mount Everest", "Mauna Kea", "Chimborazo", "Mount Kilimanjaro"],
		answer: "Mauna Kea",
		image: "http://4.bp.blogspot.com/_Uh-8dgzI1Fs/R7CsO10mCuI/AAAAAAAAC4M/uDd9dr7kb6A/s320/sunset4.gif"
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
	}
];

function start() {
	time = 10;
	$(".question").empty();
	$(".choose").empty();
	timer();
	addTrivia(questionTracker);
};

start(questionTracker);


function addTrivia(input) {
	if (questionTracker < trivia.length) {
	$(".question").append("<span>" + trivia[input].question + "</span");
	for (var i = 0; i < trivia[input].options.length; i++) {
		$(".choose").append("<div class='option'><span>" + trivia[input].options[i] + "</span></div>");
	}
	$(".trivia").append($(".choose"));
	} else {
		results();
	}
};

function timer() {
$(".timer").html("Seconds " + time);
go = setInterval(function() {
		time--;
		$(".timer").html("Seconds " + time);
		if (time < 1) {
			clearInterval(go);
			wrongGuesses++;
			console.log(questionTracker);
			questionTracker++;
			if (questionTracker < trivia.length) {
				start();
			} else {
				results();
			};
		};
	}, 1000);
};

$(document).delegate('.option', 'click', function(){
	clearInterval(go);
	if ($(this).text() === trivia[questionTracker].answer) {
		correctGuesses++;
	} else {
		wrongGuesses++
	};
	questionTracker++;
	if (questionTracker < trivia.length) {
	start();
	} else {
		results();
	};
});

function answerGif() {
	$(".timer").empty();
	$(".question").empty();
	$(".choose").empty();
	setTimeout(function() {
		var addImage = $("<img>");
		console.log(questionTracker);
		addImage.attr("src", trivia[questionTracker - 1].image).appendTo(".trivia");
	}, 5000);
}

function results() {
	$(".trivia").empty();
	$(".trivia").append("<div>Correct Guesses: " + correctGuesses + "</div>");
	$(".trivia").append("<div>Wrong Guesses: " + wrongGuesses + "</div");
}

console.log(trivia[0].options.length);

$("#button").on("click", function() {
	clearInterval(go);
})

});