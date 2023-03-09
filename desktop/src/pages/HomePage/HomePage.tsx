import React from 'react'

//COMPONENTS, RESOURCES, CONSTANTS
import WrapperHoc from '../../components/WrapperHoc'
import { ControlInput, Counter } from '../../components'
import { UsersPageContainer } from '../../containers'

const HomePage = (): JSX.Element => (
  <div>
    <ControlInput />
    <WrapperHoc>
      <Counter />
    </WrapperHoc>
    <Counter />
    <UsersPageContainer />
  </div>
)

export default React.memo(HomePage)
