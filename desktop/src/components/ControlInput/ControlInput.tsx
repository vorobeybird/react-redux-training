import React from 'react'

//COMPONENTS, RESOURCES, CONSTANTS
import useDebounce from '../../hooks/useDebunce'

const ControlInput = (): JSX.Element => {
  const [value, setValue] = React.useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  const changeValue = (evt: string) => {
    setValue(evt)
  }

  React.useEffect(() => {
    if (debouncedValue.length > 3) {
      // request to server
    }
  }, [debouncedValue])

  return (
    <div className="df">
      <input
        type="text"
        value={value}
        onChange={(evt) => changeValue(evt.currentTarget.value)}
      />
      <span>
        debouncedSearch:
        {debouncedValue}
      </span>
    </div>
  )
}

export default React.memo(ControlInput)
