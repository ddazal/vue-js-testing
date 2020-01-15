import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'
import TodoProgress from '@/components/TodoProgress'

describe('Todo', () => {
  test('el estado se actualiza cuando TodoInput emite un evento', () => {
    const wrapper = shallowMount(Todo)
    const todoInput = wrapper.find(TodoInput)
    todoInput.vm.$emit('on-enter', 'Acoplar todos los componentes')
    expect(wrapper.vm.todos).toEqual([
      {
        name: 'Acoplar todos los componentes',
        completed: false
      }
    ])
  })

  test('TodoList recibe el estado de Todo como props', () => {
    const wrapper = shallowMount(Todo)
    wrapper.setData({
      todos: [
        {
          name: 'Acoplar todos los componentes',
          completed: false
        }
      ]
    })
    const todoList = wrapper.find(TodoList)
    expect(todoList.props().todos).toBe(wrapper.vm.todos)
  })

  test('el estado se actualiza cuando TodoList emite un vento', () => {
    const wrapper = shallowMount(Todo)
    wrapper.setData({
      todos: [
        {
          name: 'Acoplar todos los componentes',
          completed: false
        }
      ]
    })
    const todoList = wrapper.find(TodoList)
    todoList.vm.$emit('on-checked', 0)
    expect(wrapper.vm.todos[0].completed).toBe(true)
  })

  test('TodoProgress recibe el estado de Todo como props', () => {
    const wrapper = shallowMount(Todo)
    wrapper.setData({
      todos: [
        {
          name: 'Acoplar todos los componentes',
          completed: false
        }
      ]
    })
    const todoProgress = wrapper.find(TodoProgress)
    expect(todoProgress.props().todos).toBe(wrapper.vm.todos)
  })
})
