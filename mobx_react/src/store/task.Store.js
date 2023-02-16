
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: true
    }, {
      id: 3,
      name: '不想学习第一天',
      isDone: false
    },
    {
      id: 4,
      name: '无奈学习第二天',
      isDone: false
    },
    {
      id: 5,
      name: '焦虑睡觉第三天',
      isDone: false
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }

  singlechange (id) {
    const item = this.list.find(item => item.id === id)
    item.isDone = !item.isDone
  }

  allChange (vaule) {
    this.list.forEach(item => item.isDone = vaule)
  }
  // 计算属性
  get isAll () {
    return this.list.every(item => item.isDone)
  }
  //删除
  delete = (id) => {
    console.log('删除了' + id)
    this.list = this.list.filter(item => item.id !== id)
  }
  //新增
  addDate = (data) => {
    this.list.push(data)
  }

  //计数
  get listFinish () {
    return this.list.filter(item => item.isDone).length
  }
}
export default TaskStore
