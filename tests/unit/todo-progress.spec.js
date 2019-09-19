import { mount } from '@vue/test-utils'
import TodoProgress from '@/components/TodoProgress'

const propsData = {
  todos: [
    {
      name: 'Leer los docs de vue-test-utils',
      completed: true
    },
    {
      name: 'Leer los docs de Jest',
      completed: false
    }
  ]
}

describe('TodoProgress', () => {
  test('muestra la barra de progreso', () => {
    const wrapper = mount(TodoProgress, { propsData })
    const bar = wrapper.find('.progress-bar')
    const completed = propsData.todos.filter(todo => todo.completed).length
    expect(bar.attributes().style).toBe(`width: ${100 * completed / propsData.todos.length}%;`)
  })
  test('muestra la barra de progreso en cero si no hay todos', () => {
    const wrapper = mount(TodoProgress, { propsData: { todos: [] } })
    const bar = wrapper.find('.progress-bar')
    expect(bar.attributes().style).toBe(`width: 0%;`)
  })
})
