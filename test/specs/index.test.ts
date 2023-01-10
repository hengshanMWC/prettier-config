import { describe, expect, test } from 'vitest'
import { demo } from '../../src/index'
describe('test', () => {
  test('demo', () => {
    expect(demo()).toBe('demo')
  })
})
