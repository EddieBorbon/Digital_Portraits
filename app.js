const container = document.querySelector('.container'); 
const btn1 = document.querySelector('#forward');
const btn2 = document.querySelector('#backward'); 
let current_index = 1;
let image_length = 4;


btn1.addEventListener('click', () => {
	let i = current_index + 1;
	if (i > image_length) return; 
	container.children[current_index].classList.remove('active__image'); 
	container.children[current_index].children[0].removeAttribute('id'); 
	container.children[current_index].classList.add('container__image');
	container.children[i].classList.remove('container__image');
	container.children[i].classList.add('active__image'); 
	container.children[i].children[0].id = 'active-image';
	current_index++;
})	



btn2.addEventListener('click', () => {
	let i = current_index - 1; 
	if (i < 1) return;
	container.children[current_index].classList.remove('active__image'); 
	container.children[current_index].children[0].removeAttribute('id'); 
	container.children[current_index].classList.add('container__image');
	container.children[i].classList.remove('container__image');
	container.children[i].classList.add('active__image'); 
	container.children[i].children[0].id = 'active-image';
	current_index--;
})	



