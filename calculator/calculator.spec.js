const { add } = require('./calculator.js');

// test('that truth is truth', () => {
//     expect(true).toBe(true);

// });

// it('should test that true is true', () => {
//     expect(true).toBe(true);
// })
describe('calculator.js', () => {

        describe('add()', () => {
            it('should return the sum of numbers passed', () => {
                expect(add (2,2)).toBe(4);
                expect(add(2,3)).toBe(5);
            })

        })
})
