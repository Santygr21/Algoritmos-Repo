const ContainFn = require('./ejercicio5');

test('Check includes', () => {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [2, 3, 6];

    expect(Contain(arr1,arr2)).toEqual(true);
})