import React from 'react'

type WrapperHoc = {
  children: JSX.Element
}

const WrapperHoc = ({ children }: WrapperHoc) => (
  <div style={{ backgroundColor: 'red', fontSize: 22 }}>
    {children}
  </div>
)

export default WrapperHoc
