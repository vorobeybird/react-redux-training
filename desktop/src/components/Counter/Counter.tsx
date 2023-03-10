import React from 'react'

const Counter = (): JSX.Element => {
  const [counter, setCounter] = React.useState<number>(0)

  const changeCounterValue = React.useCallback((increase: boolean) => () => {
    setCounter(increase ? counter + 1 : counter - 1)
  }, [counter])

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={changeCounterValue(true)}>increase</button>
      <button type="button" onClick={changeCounterValue(false)}>decrease</button>
    </div>
  )
}

export default React.memo(Counter)
