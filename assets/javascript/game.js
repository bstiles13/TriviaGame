$(document).ready(function() {

var index = 0;
var time = 0;
var timeout = 0;
var countdown;
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

start(index);


function addTrivia(input) {
	$(".question").append("<span>" + trivia[input].question + "</span");
	for (var i = 0; i < trivia[input].options.length; i++) {
		$(".choose").append("<div class='option'><span>" + trivia[input].options[i] + "</span></div>");
	}
	$(".trivia").append($(".choose"));
};

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

$(document).delegate('.option', 'click', function(){
	if ($(this).text() === trivia[index].answer) {
		correctGuesses++;
	} else {
		wrongGuesses++;
	};
	clearInterval(countdown);
	transition();
});

function results() {
	$(".trivia").empty();
	$(".trivia").append("<br><div><u>Game Results:</u></div><br><br>");
	$(".trivia").append("<div>Correct Guesses: " + correctGuesses + "</div>");
	$(".trivia").append("<div>Wrong Guesses: " + wrongGuesses + "</div");
}

console.log(trivia[0].options.length);

$("#button").on("click", function() {
	clearInterval(countdown);
})

});