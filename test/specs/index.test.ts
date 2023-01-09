import { describe, expect, test } from 'vitest'
import { demo } from '@/index'
describe('test', () => {
  test('demo', () => {
    expect(demo()).toBe('demo')
  })
})
