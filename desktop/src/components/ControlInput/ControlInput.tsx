import React from 'react'

const ControlInput = (): JSX.Element => {
  const [value, setValue] = React.useState<string>('')

  const changeValue = (evt: string) => {
    setValue(evt)
  }

  console.log('ControlInput')

  return (
    <div className="df">
      <input
        type="text"
        value={value}
        onChange={(evt) => changeValue(evt.currentTarget.value)}
      />
    </div>
  )
}

export default React.memo(ControlInput)
