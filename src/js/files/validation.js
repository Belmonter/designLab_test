let phoneInp = document.querySelector('#phone');


phoneInp.addEventListener('input', function () {
	if (this.value.length < 17) {
		this.classList.add('_form-error');
		this.parentElement.querySelector('.menu-phone__check').style.display = 'none';
		this.parentElement.querySelector('.menu-phone__false').style.display = 'block';
	} else {
		this.classList.remove('_form-error');
		this.parentElement.querySelector('.menu-phone__check').style.display = 'block';
		this.parentElement.querySelector('.menu-phone__false').style.display = 'none';
	}
});