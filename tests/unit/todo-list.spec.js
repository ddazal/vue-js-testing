import { mount } from '@vue/test-utils'
import TodoList from '@/components/TodoList'

const propsData = {
  todos: [
    {
      name: 'Leer los docs de vue-test-utils',
      completed: false
    },
    {
      name: 'Leer los docs de Jest',
      completed: false
    }
  ]
}

let wrapper, todos

describe('TodoList', () => {
  beforeEach(() => {
    wrapper = mount(TodoList, { propsData })
    todos = wrapper.findAll('.todo')
  })

  test('render de cada todo', () => {
    wrapper.props().todos.forEach((todo, index) => {
      const span = todos.at(index).find('span')
      expect(span.text()).toBe(todo.name)
    })
    expect(todos.length).toBe(wrapper.props().todos.length)
  })

  test('emite un evento cuando se actualiza el estado de un todo', () => {
    wrapper.props().todos.forEach((todo, index) => {
      const checkbox = todos.at(index).find('input[type="checkbox"]')
      checkbox.setChecked()
      expect(wrapper.emitted('on-checked')).toBeTruthy()
      expect(wrapper.emitted('on-checked')[index]).toEqual([index])
    })
  })
})
