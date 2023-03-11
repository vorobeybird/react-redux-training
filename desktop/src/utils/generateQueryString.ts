type PropsType = {
  [key: string]: string
}

export const generateQueryString = (props: PropsType): string => {
  let queryString = '?'
  const keysArray = Object.keys(props)

  keysArray.forEach((item, indx) => {
    queryString = queryString.concat(item, '=', props[item as keyof typeof props])

    if (indx !== keysArray.length - 1) {
      queryString = queryString.concat('&')
    }
  })

  return queryString
}
