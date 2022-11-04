import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('PageAStore')
@observer
class PageA extends React.Component<any, any> {
  render (): JSX.Element {
    return (
        <>
            name：<input onChange={(e) => { this.props.PageAStore.changeName(e.target.value) }}/>{' '}
            age：<input onChange={(e) => { this.props.PageAStore.changeAge(e.target.value) }}/>
            <h1>
                name: {this.props.PageAStore.info}
            </h1>
        </>
    )
  }
}

export default PageA
