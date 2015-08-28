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
		$('.type-name').html(data.getDishTypeById(DishTypeId).name);
		for (var i = 0; i < Dishs.length; i++) {
			$('.menu-list ul').append('<li id="Dish' + Dishs[i].id + '" class="DishType' + DishTypeId + '"><div class="meal-img"><img src="' + Dishs[i].img + '"></div><p class="meal-name">' + Dishs[i].name + '</p><p class="meal-price"><strong>' + Dishs[i].price.toFixed(2) + '元</strong>/例</p><p class="number"><span class="subract">-</span><span class="num">' + Dishs[i].num + '</span><span class="add">+</span></p>');
		}
	};

	/**
	 * 在个人账单中显示已点菜式跟总价格
	 * @return {none} 
	 */
	var showDishInMenu = function() {
		var DishType = data.getDishType();
		var price = $('.menu-footer .menu-money span').html();
		$('.personal-list ul').html('');
		$('.personal .menu-money span').html(price);
		for (var i = 0; i < DishType.length; i++) {
			for (var j = 0; j < DishType[i].Dish.length; j++) {
				var DishTypeId = DishType[i].id;
				var Dish = DishType[i].Dish[j];
				if (Dish.num !== 0) {
					$('.personal-list ul').append('<li DishId = "'+Dish.id+'" DishTypeId = "'+DishTypeId+'"><span class="meallist-name">' + Dish.name + '</span><span class="meallist-price">' + Dish.price + '元/例</span><span class="meallist-num">' + Dish.num + '份</span>');
				}
			}
		}
	};

	return {
		showDishType: showDishType,
		showDishsFromDT: showDishsFromDT,
		showDishInMenu: showDishInMenu,
	};
});