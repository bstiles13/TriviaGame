$(document).ready(function() {

var questionTracker = 0;

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
	}
];

function start(input) {
	var insertQuestion = $("<div>").attr("class", "question");
	var insertOptions = $("<div>").attr("class", "choose");
	insertQuestion.append("<span>" + trivia[input].question + "</span").appendTo(".game-container");
	for (var i = 0; i < trivia[input].options.length; i++) {
		insertOptions.append("<div class='option'><span>" + trivia[input].options[i] + "</span></div>");
	}
	$(".game-container").append(insertOptions);
	console.log(trivia[input].options.length);
};

start(questionTracker);
console.log(trivia[0].options.length);

})