let formFile = document.getElementById('form_file');
let dragZone = document.querySelector('.files-menu__wrapper');
let preview = document.querySelector('.files-menu__preview');


formFile.addEventListener('input', function (e) {
	uploadFiles(Array.from(formFile.files));
});

function uploadFiles(files) {
	files.forEach((file, i) => {
		if (checkFile(file)) {
			let value = 0;
			preview.insertAdjacentHTML(
				'afterbegin',
				`
        <div class="file__item">
          <div class="file__info info-file">
            <div id="del-file" class="info-file__btn _icon-x-close"></div>
            <div class="info-file__name">${file.name}</div>
          </div>
          <progress id="progress-${i}" value="0" max="100"></progress>
        </div>
      `
			);
			let btn = document.querySelector(`#del-file`);

			btn.addEventListener('click', deleteFile);
			progress(value, i);
		}
	});
}

function progress(value, id) {
	let time = Math.floor(Math.random() * 30);
	let fill = setInterval(fillProgress, time);
	let bar = document.getElementById(`progress-${id}`);
	function fillProgress() {
		if (value >= 101) {
			clearInterval(fill);
			bar.style.display = 'none';
		} else {
			bar.value = ++value;
		}
	}
}

dragZone.addEventListener('dragenter', dragenter, false);
dragZone.addEventListener('dragover', dragover, false);
dragZone.addEventListener('drop', drop, false);

function checkFile(file) {
	if (!['image/jpeg'].includes(file.type)) {
		alert('Для загрузки доступен только формат jpeg');
		return false;
	} else if (file.size > 1 * 1024 * 1024) {
		alert('Файл должен быть не больше 1 МБ');
		return false;
	} else {
		return true;
	}
}

function deleteFile({ target }) {
	target.closest('.file__item').classList.add('file-del');
	setTimeout(() => target.closest('.file__item').remove(), 300);
}

function dragenter(e) {
	e.stopPropagation();
	e.preventDefault();
}

function dragover(e) {
	e.stopPropagation();
	e.preventDefault();
}

function drop(e) {
	e.stopPropagation();
	e.preventDefault();

	var dt = e.dataTransfer;
	var files = Array.from(dt.files);

	uploadFiles(files);
}