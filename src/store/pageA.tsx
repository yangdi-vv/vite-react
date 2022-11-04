import { observable, makeObservable, action, computed } from 'mobx'

interface IPageA {
  name: string
  age: number
}

class PageAStore implements IPageA {
  constructor () {
    makeObservable(this)
  }

  @observable name = 'jack'
  @observable age = 18

  @action changeName (name: string): void {
    this.name = name
  }

  @action changeAge (age: string | number): void {
    this.age = Number(age)
  }

  @computed get info (): string {
    return `${this.name} ${this.age}`
  }
}

export default PageAStore
