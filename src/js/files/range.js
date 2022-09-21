import noUiSlider from 'nouislider';
import '@scss/libs/nouislider.min.css';

let rangeSlider = document.getElementById('range');
let inputRange = document.getElementById('range-input');

noUiSlider.create(rangeSlider, {
	range: {
		min: 9,
		max: 41,
	},
	format: wNumb({
		decimals: 0,
		thousand: '',
		suffix: ' 000 000 ₽',
	}),
	connect: [true, false],
	padding: [1, 1],
	start: [10],
	pips: { mode: 'values', values: [10, 20, 30, 40] },
});

let pips = rangeSlider.querySelectorAll('.noUi-value');

function clickOnPip() {
	let value = Number(this.getAttribute('data-value'));
	rangeSlider.noUiSlider.set(value);
}

for (let i = 0; i < pips.length; i++) {
	pips[i].style.cursor = 'pointer';
	pips[i].addEventListener('click', clickOnPip);
}

rangeSlider.noUiSlider.on('update', function (values, handle) {
	inputRange.value = values[handle];
});

rangeSlider.addEventListener('change', function () {
	rangeSlider.noUiSlider.set(this.value);
});

document.querySelectorAll('.noUi-value').forEach(el => {
	if (el.textContent === '40') {
		el.textContent = '40+';
	}
});

inputRange.addEventListener('change', function () {
	rangeSlider.noUiSlider.set(this.value / 1000000);
});
