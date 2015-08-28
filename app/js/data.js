define(['jquery'], function($) {
	var DishType;
	var Table;

	/**
	 * 向后台发送请求获得菜单相关数据
	 * @param  {url} 后台相关数据地址
	 * @return {none}    
	 */
	$.ajax({
		url: 'http://spartanorder.github.io/app/data/data.json',
		async: false,
		dataType: 'json',
		success: function(data) {
			DishType = data.DishType;
		}
	});

	/**
	 * 获取菜单对象
	 * @return {Object} 菜单对象
	 */
	var getDishType = function() {
		return DishType;
	};

	/**
	 * 根据菜单类别ID获取对应种类的菜单对象
	 * @param  {Int} DishTypeId 菜单类别ID
	 * @return {Object}    对应菜单类别对象
	 */
	var getDishTypeById = function(DishTypeId) {
		for (var i = 0; i < DishType.length; i++) {
			if (DishType[i].id === DishTypeId) {
				return DishType[i];
			}
		}
		return null;
	};

	/**
	 * 获取对应类别ID下的菜肴数组对象
	 * @param  {Int} DishTypeId  菜单类别ID
	 * @return {Object}          菜肴数组对象
	 */
	var getDishsFromDT = function(DishTypeId) {
		if (getDishTypeById(DishTypeId)) {
			return getDishTypeById(DishTypeId).Dish;
		}
		return null;
	};

	/**
	 * 根据菜肴ID获取对应菜肴对象
	 * @param  {Int} DishId    菜肴ID
	 * @param  {Int} DishTypeId 菜肴类别ID
	 * @return {Object}         菜肴对象
	 */
	var getDishById = function(DishId, DishTypeId) {
		var Dishs = getDishsFromDT(DishTypeId);
		for (var i = 0; i < Dishs.length; i++) {
			if (Dishs[i].id === DishId) {
				return Dishs[i];
			}
		}
		return null;
	};

	return {
		getDishType: getDishType,
		getDishTypeById: getDishTypeById,

		getDishsFromDT: getDishsFromDT,
		getDishById: getDishById,
	};
});
