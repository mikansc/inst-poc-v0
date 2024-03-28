import assert from 'node:assert'
import { describe, it } from 'node:test'

import calculator from './calculator.js'

describe('calculator', () => {
  describe('sum function', () => {
    it('should return 3 when adding 1 and 2', () => {
      assert.equal(calculator.sum(1, 2), 3)
    })

    it('should throw an error when a string is passed', () => {
      assert.throws(() => {
        calculator.sum('1', 2)
      }, /Invalid input/)
    })
  })

  describe('subtract function', () => {
    it('should return 1 when subtracting 2 from 3', () => {
      assert.equal(calculator.subtract(3, 2), 1)
    })

    it('should throw an error when a string is passed', () => {
      assert.throws(() => {
        calculator.subtract('1', 2)
      }, /Invalid input/)
    })
  })

  describe('multiply function', () => {
    it('should return 6 when multiplying 2 by 3', () => {
      assert.equal(calculator.multiply(2, 3), 6)
    })

    it('should throw an error when a string is passed', () => {
      assert.throws(() => {
        calculator.multiply('1', 2)
      }, /Invalid input/)
    })
  })

  describe('divide function', () => {
    it('should return 3 when dividing 6 by 2', () => {
      assert.equal(calculator.divide(6, 2), 3)
    })

    it('should throw an error when a string is passed', () => {
      assert.throws(() => {
        calculator.divide('1', 2)
      }, /Invalid input/)
    })
  })
})

