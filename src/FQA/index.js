/**
 * test map method callback and parseInt param use
 * @return {[Array]} [Array]
 */
function checkMap() {
	var nums = ['1', '2', '3'];

	return nums.map(parseInt);
}

/**
 * test null is Object，and common object is same
 * @return {[Array]} [Array]
 */
function typeofAndInstanceOf() {
	var result = [];
	result.push(typeof null);
	result.push(null instanceof Object);

	return result;
}