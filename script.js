const days = document.getElementById('days-numbers');
const monthAndYear = document.getElementById('month-year');

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const daysOfWeek = [];
daysOfWeek.push(document.getElementById('monday'));
daysOfWeek.push(document.getElementById('tuesday'));
daysOfWeek.push(document.getElementById('wednesday'));
daysOfWeek.push(document.getElementById('thursday'));
daysOfWeek.push(document.getElementById('friday'));
daysOfWeek.push(document.getElementById('saturday'));
daysOfWeek.push(document.getElementById('sunday'));

const tip = document.getElementsByClassName('tip')[0];
const daysOfMonth = [];

const getCurrentMonth = () => {
	const date = new Date();
	date.setDate(1);

	monthAndYear.textContent = `${
		months[date.getMonth()]
	} ${date.getFullYear()}`;
	document.title = monthAndYear.textContent;

	let i = date.getDay() - 1;
	if (i === -1) i = 6;
	while (i > 0) {
		daysOfMonth.push(
			new Date(date.getFullYear(), date.getMonth(), date.getDate() - i)
		);
		--i;
	}

	const month = date.getMonth();
	while (date.getMonth() === month) {
		daysOfMonth.push(new Date(date));
		date.setDate(date.getDate() + 1);
	}
	if (date.getDay() != 1) {
		let k = date.getDay();
		while (true) {
			console.log(k);
			daysOfMonth.push(
				new Date(
					date.getFullYear(),
					date.getMonth(),
					date.getDate() + (6 - k + 1)
				)
			);
			k = theMostImportantFunctionInThisCodeWhichTurns7Into0AndGivesLifeToThisProgram(
				k
			);
			if (k === 0) break;
			k++;
		}
	}
};

const theMostImportantFunctionInThisCodeWhichTurns7Into0AndGivesLifeToThisProgram = (
	num
) => {
	return num === 7 ? 0 : num;
};

getCurrentMonth();

for (let i of daysOfMonth) {
	const day = document.createElement('div');
	const content = document.createElement('div');
	content.contentEditable = true;
	day.textContent = `${i.getDate()} `;

	const now = new Date();
	if (i.getMonth() === now.getMonth()) {
		day.setAttribute('data-content', '');
		day.classList.add('current-month');
		day.append(content);
	}

	switch (i.getDay()) {
		case 0:
			daysOfWeek[6].append(day);
			break;
		case 1:
			daysOfWeek[0].append(day);
			break;
		case 2:
			daysOfWeek[1].append(day);
			break;
		case 3:
			daysOfWeek[2].append(day);
			break;
		case 4:
			daysOfWeek[3].append(day);
			break;
		case 5:
			daysOfWeek[4].append(day);
			break;
		case 6:
			daysOfWeek[5].append(day);
			break;
	}
}

days.oninput = (event) => {
	event.target.dataset['content'] = event.target.textContent;
	event.target.classList.add('event');
};

days.onmouseover = (event) => {
	tip.textContent = event.target.dataset['content'];
};

let sum = 0;
document.addEventListener('keydown', (event) => {
	if (event.code === 'KeyT') {
		const val = document.getElementsByClassName('event');
		for (let i of val) {
			sum += +i.textContent;
		}
		alert(`Сумма ваших значений равна ${sum}`);
		sum = 0;
	}
});
