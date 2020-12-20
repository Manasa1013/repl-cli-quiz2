var readLineSync = require('readline-sync');
//to read from input cli
var chalk = require('chalk');

function randColor() {
	//gives random color for cli display text
	var hexCode = Math.floor(Math.random() * 16777215);
	var rand = '#fff000';
	if (hexCode > 10000000) {
		rand = '#' + hexCode.toString(16);
	}

	return rand;
}
//  function randColor(){
//    return 'hsla('+ (Math.random()*360) + ', 100% , 50%, 1)';
//  }
//console.log(chalk.bold.hex(randColor())('Hello!'));
//for coloring the text
var user = {
	name: '',
	highScore: 0
};
console.log(chalk.bold.green("Hey! While playing game\nin smartphones,click on console\t▶,\ncontinue with '↩ ' or 'enter'\n"))
user.name = readLineSync.question(
	chalk.bold.hex(randColor())('hey\nmay we know your name:)\n')
);
var myName = 'Mandalreddy  Manasa';
console.log(chalk.bold.hex(randColor())('Hi and Welcome, ' + user.name));
var element = '';
choose(element);
//here called the choose,to choose genre

function choose(element) {
	console.log(
		chalk.bold.hex(randColor())(
			'So,' + user.name + ' wanna play quiz about bts?'
		)
	);
	element = readLineSync.question(chalk.hex(randColor())('Type yes/no: \n'));
	element = element.toLowerCase(); //converting to lower case for easy comparsion down
	if (
		element === 'yes' ||
		element === 'y' ||
		element === 'no' ||
		element === 'n'
	) {
		//enter only if pressed yes or no
		if (element === 'yes' || element === 'y') {
			console.log(chalk.bold.hex(randColor())("Let's dive into quiz"));
			console.log(chalk.bgMagenta("Let's understand rules first:"));
			console.log(
				chalk.hex(randColor())(
					'1.On starting,direct questions or mcqs are to be answered.\n2.In multiple choice,you can type or choose the right answer as displayed.\n3.Type answers or options without any periods or full stops at the end\n4.Type either options or answers without spelling errors.'
				)
			);

			//here I should call the next functions,in next branch in order to continue
		}
		while (element === 'no' || element === 'n') {
			console.log(
				chalk.bold.hex(randColor())(
					'Oops!! Try out the quiz ,else you miss the fun part ,go for it!!!'
				)
			);
			choose(element); //recursive loop I created to redirect and type
			break; //it helps not to come to this loop when entered genre from 'genre' itself
		}
	} else {
		console.log(chalk.bgGrey('try typing only yes/y or no/n'));
		choose(element);
	}
}
//question bank
var chooseQuestionOne = {
	question: {
		que: chalk.hex(randColor())(
			'3)BTS is _______ ?\na)triplet with all rappers and vocalists\nb)septet with 3 main vocalists and 4 main rappers \nc)octet with 4 main rappers and 4 vocalists\nd)septet with 3  main rappers and 4 main vocalists\n'
		),
		an: 'septet with 3  main rappers and 4 main vocalists'
	},
	answer: 'd'
};

var chooseQuestionTwo = {
	question: {
		que: chalk.hex(randColor())(
			"4)what's the name of compaign launched by BTS and UNICEF?\na)Stop violence\nb)Love Myself\nc) Do before you die\nd)All by yourself\n"
		),
		an: 'Love Myself'
	},

	answer: 'b'
};

var chooseQuestionThree = {
	question: {
		que: chalk.hex(randColor())(
			'5)What famous line did BTS V coin during one of the concerts?\na)I purple you\nb)You are ours\nc)Love animals\nd)none\n'
		),
		an: 'I purple you'
	},

	answer: 'a'
};
var chooseQuestionFour = {
	question: {
		que: chalk.hex(randColor())(
			"6)Which track nominated them for prestigious Grammy's best pop/duo group performance award?\na)Boy with luv\nb)Savage love(Laxed – Siren Beat) BTS Remix\nc)Dynamite\nd)ON \n"
		),
		an: 'Dynamite'
	},
	answer: 'c'
};

//straight quesns
var questionOne = {
	question: chalk.bold.hex(randColor())(
		'1) fill the line of this bts song\nLife goes on___________________?\n'
	),
	answer: 'like this again',
	answer2: 'like an arrow in the blue sky'
};
var questionTwo = {
	question: chalk.bold.hex(randColor())('2)what bts fans or stans called ?\n'),
	answer: 'ARMY',
	answer2: 'Adorable Representative MC for Youth'
};

//storing questions in array
var questionListArray = [questionOne, questionTwo];
var chooseListArray = [
	chooseQuestionOne,
	chooseQuestionTwo,
	chooseQuestionThree,
	chooseQuestionFour
];
//calling quesns in loop
for (var i = 0; i < questionListArray.length; i++) {
	play(
		questionListArray[i].question,
		questionListArray[i].answer,
		questionListArray[i].answer2
	);
}
for (var i = 0; i < chooseListArray.length; i++) {
	mcq(chooseListArray[i].question, chooseListArray[i].answer);
}

function play(question, answer, answer2) {
	var userAnswer = readLineSync.question(question);
	if (
		userAnswer.toUpperCase() === answer.toUpperCase() ||
		userAnswer.toUpperCase() === answer2.toUpperCase()
	) {
		console.log(chalk.hex(randColor())('You are right\n:) '));
		user.highScore++;
	} else {
		console.log(chalk.red("Oops!! you didn't get it right\n"));
	}
	console.log(
		chalk.bold.green(user.name) +
			' your score now is: ' +
			chalk.bold.hex(randColor())(user.highScore)
	);
	console.log(chalk.bgCyan('---------------------'));
}

//for mcqs
function mcq(question, answer) {
	var userAnswer = readLineSync.question(question.que + '\n');
	if (
		userAnswer.toLowerCase() === answer.toLowerCase() ||
		userAnswer.toLowerCase() === question.an.toLowerCase()
	) {
		console.log('You are right\n:) ');
		user.highScore++;
	} else {
		console.log(chalk.red("Oops!! you didn't get it right"));
	}
	console.log(
		chalk.bold.green(user.name) +
			' your score now is: ' +
			chalk.bold.hex(randColor())(user.highScore)
	);
	console.log(
		chalk.bgCyan(
			'-----------------------------------------------------------------'
		)
	);
}

console.log(
	chalk.bold.hex(randColor())(user.name + ', Kudos!! on completing  the quiz')
);
if (user.highScore < 2) {
	console.log(chalk.cyan('Score well next time:)'));
}
