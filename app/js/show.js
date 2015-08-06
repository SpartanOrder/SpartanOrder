define(['jquery', 'data'], function($, data) {
	var DishType = data.getDishType();

	/**
	 * 展示菜单类别列表
	 * @return {none} 
	 */
	var showDishType = function() {
		$('.menu-aside').html('');
		for (var i = 0; i < DishType.length; i++) {
			$('.menu-aside').append('<nav id = "DishType' + DishType[i].id + '">' + DishType[i].name + '</nav>');
		}
	};

	/**
	 * 展示对应菜单类别的菜肴列表
	 * @param  {Int} DishTypeId 菜单类别Id
	 * @return {none}     
	 */
	var showDishsFromDT = function(DishTypeId) {
		var Dishs = data.getDishsFromDT(DishTypeId);
		$('.menu-list ul').html('');
		for (var i = 0; i < Dishs.length; i++) {
			$('.menu-list ul').append('<li id="Dish' + Dishs[i].id + '" class="DishType' + DishTypeId + '"><div class="meal-img"><img src="' + Dishs[i].img + '"></div><p class="meal-name">' + Dishs[i].name + '</p><p class="meal-price"><strong>' + Dishs[i].price + '元</strong>/例</p><p class="number"><span class="subract">-</span><span class="num">'+Dishs[i].num+'</span><span class="add">+</span></p>');
		}
	};


	return {
		showDishType: showDishType,
		showDishsFromDT: showDishsFromDT,
	};
});