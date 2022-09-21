let wishesInp = document.getElementById('wish-input');
let wishPreview = document.querySelector('.wishes-menu__preview');
let btnId = 0;

wishesInp.addEventListener('change', ({ target }) => {
	let value = target.value;

	if (value) {
		wishPreview.insertAdjacentHTML(
			'afterbegin',
			`
      <div class="preview-wishes__item">
        <div class="preview-wishes__text">${value}</div>
        <div id="btn-wish-${btnId}" class="preview-wishes__close _icon-x-close"></div>
      </div>
      
      `
		);

		let btn = document.querySelector(`#btn-wish-${btnId}`);

		btn.addEventListener('click', deleteWish);
		btnId++;
		wishesInp.value = '';
	}
});

function deleteWish({ target }) {
	let parent = target.closest('.preview-wishes__item');
	parent.classList.add('wish-del');
	setTimeout(() => parent.remove(), 500);
}
