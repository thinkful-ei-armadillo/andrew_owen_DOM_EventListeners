/* global $ */

function getUserInput(){
	return $('#shopping-list-entry').val();
}
function getShoppingItem(event){
	return $(event.target)
		.parents('.shopping-item-controls')
		.siblings('.shopping-item');
}

function main(){
	$('#js-shopping-list-form').submit(function(event){
		event.preventDefault();
		console.log(getUserInput());
	});
	$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
		let item = getShoppingItem(event);
		item.hasClass('shopping-item__checked') === true ? item.removeClass('shopping-item__checked') : item.addClass('shopping-item__checked');
	});
}


// function checkUncheck(){
// 	$('.shopping-list').on('submit', '.shopping-item-toggle', function(event){
// 		event.target.parents('.shopping-item').addClass('.shopping-item__checked');
// 	});
// }
$(main);

