import React from 'react'
import Counter from '../../components/Counter/Counter'
import ControlInput from '../../components/ControlInput/ControlInput'

const HomePage = (): JSX.Element => {
  console.log('HomePage')

  return (
    <div>
      <ControlInput />
      <Counter />
      <Counter />
    </div>
  )
}

export default React.memo(HomePage)
