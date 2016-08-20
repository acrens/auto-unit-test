/**
 * test index.js checkMap method
 * detail:
 *     parseInt(val, base), base is 2 ~ 36, otherwise value equal NaN.
 */
describe('test map and callback parseInt', function() {
    
    it('a array call map', function() {
        var nums = checkMap();
        console.log(nums);

        expect([1, NaN, NaN]).toEqual(nums);
    });
});

/**
 * test index.js typeofAndInstanceOf method
 * detail:
 *     typeof null qeual 'object', but null instanceof Object equal false, because null Constructor not Object.
 */
describe('test null is object', function() {
    
    it('null object', function() {
        var result = typeofAndInstanceOf();
        console.log(result);

        expect(['object', false]).toEqual(result);
    });
});