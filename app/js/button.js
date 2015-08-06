define(['show', 'data'], function(show, data) {

	/**
	 * 页面整体滑动
	 * @param  {Int} x x轴位移
	 * @param  {Int} y y轴位移
	 * @param  {Int} z z轴位移
	 * @return {none}  
	 */
	var containTrans = function(x, y, z) {
		$('.container')[0].style.webkitTransition = '-webkit-transform 0.3s ease-out';
		$('.container')[0].style.webkitTransform = 'translate3d(' + x + 'rem,' + y + ',' + z + ')';
	};

	/**
	 * 各个页面之间切换的动画操作
	 * @return {none} 
	 */
	var switchPage = function() {
		$('.menu-button').click(function() {
			containTrans(-32, 0, 0);
			show.showDishType();
			//显示第一个菜品类别内的菜肴
			show.showDishsFromDT(Number($('.menu-aside nav')[0].id.substr(8)));
		});
		$('.menu-return').click(function() {
			containTrans(0, 0, 0);
		});
		$('.menu-confirm').click(function() {
			containTrans(-64, 0, 0);
		});
		$('.order-return').click(function() {
			show.showDishType();
			//显示第一个菜品类别内的菜肴
			show.showDishsFromDT(Number($('.menu-aside nav')[0].id.substr(8)));
			containTrans(-32, 0, 0);
		});
	};

	var getDishByLi = function(ele) {
		var DishId = Number(ele.parents('li').attr('id').substr(4));
		var DishTypeId = Number(ele.parents('li').attr('class').substr(8));
		var Dish = data.getDishById(DishId, DishTypeId);
		return Dish;
	};

	/**
	 * 点击添加按钮，数量加一（DOM操作）
	 * @param {element} ele 触发点击事件的按钮
	 */
	var addNumView = function(ele) {
		var num = Number(ele.prev('.num').html());
		if (num < 99) {
			ele.prev('.num').html(num + 1);
		} else {
			ele.prev('.num').html(99);
		}
	};

	var addNumData = function(ele) {
		var Dish = getDishByLi(ele);
		if (Dish.num < 99) {
			Dish.num++;
		} else {
			Dish.num = 99;
		}
	};

	/**
	 * 点击添加按钮，数量减一（DOM操作）
	 * @param {element} ele 触发点击事件的按钮
	 */
	var subractNumView = function(ele) {
		var num = Number(ele.next('.num').html());
		if (num > 0) {
			ele.next('.num').html(num - 1);
		} else {
			ele.next('.num').html(0);
		}
	};

	var subractNumData = function(ele) {
		var Dish = getDishByLi(ele);
		if (Dish.num > 0) {
			Dish.num--;
		} else {
			Dish.num = 0;
		}
	};
	/**
	 * 绑定控制数量变化的按钮点击事件
	 * @return {none} 
	 */
	var numControl = function() {
		$('.menu-list ul').delegate('.add', 'click', function() {
			addNumView($(this));
			addNumData($(this));
		});
		$('.menu-list ul').delegate('.subract', 'click', function() {
			subractNumView($(this));
			subractNumData($(this));
		});
	};

	return {
		switchPage: switchPage,
		numControl: numControl,
	};
});