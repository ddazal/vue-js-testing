import { mount } from '@vue/test-utils'
import TodoInput from '@/components/TodoInput'

let wrapper, input

describe('TodoInput', () => {
  beforeEach(() => {
    wrapper = mount(TodoInput)
    input = wrapper.find('input')
  })

  describe('Input de usuario', () => {
    test('registra el input del usuario', () => {
      input.setValue('Aprender unit testing')
      expect(wrapper.vm.input).toBe('Aprender unit testing')
    })
  })

  describe('Tecla enter', () => {
    test('emite un evento cuando se presiona la tecla enter', () => {
      input.setValue('Aprender unit testing')
      input.trigger('keyup.enter')
      expect(wrapper.emitted('on-enter')).toBeTruthy()
      expect(wrapper.emitted('on-enter')[0]).toEqual(['Aprender unit testing'])
      expect(wrapper.vm.input).toBeFalsy()
    })
    test('no emite un evento si no hay input del usuario', () => {
      input.trigger('keyup.enter')
      expect(wrapper.emitted('on-enter')).toBeFalsy()
    })
  })
})
