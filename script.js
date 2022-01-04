let navBtnPopUpArr = document.querySelectorAll('.nav-btn');
let popUpCloseBtnArr = document.querySelectorAll('.pop-x-btn ');
let popUpToClose;
let currIDClicked;

//display pop up window
for (let i = 0; i < navBtnPopUpArr.length; i++) {
	navBtnPopUpArr[i].addEventListener('click', function () {
		displayPopUp(navBtnPopUpArr[i]);
	});
}
//close pop up window
for (let i = 0; i < popUpCloseBtnArr.length; i++) {
	popUpCloseBtnArr[i].addEventListener('click', function () {
		closePopUpWindFunc(popUpCloseBtnArr[i]);
	});
}

let displayPopUp = function (popUpId) {
	currIDClicked = `pop-up-${popUpId.id}`;
	popUpToClose = document.getElementById(currIDClicked);
	popUpToClose.classList.remove('hidden');

	console.log(`current id ${currIDClicked}`, popUpToClose);
};

let closePopUpWindFunc = function (popUpCloseId) {
	let btnClsdId = popUpCloseId.id;
	currIDClicked = `pop-up-${btnClsdId.slice(8)}`;
	popUpToClose = document.getElementById(currIDClicked);
	popUpToClose.classList.add('hidden');

	console.log(`current id ${currIDClicked}`, popUpToClose);
};

let closeUpOnDOM = document.addEventListener('keydown', function (e) {
	console.log(e);
});
