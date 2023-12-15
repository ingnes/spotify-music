const ms_to_mm = function (value) {
  if (!value) {
    return '00:00'
  }

  const min = Math.floor(value / 60000)
  const seg = ((value % 60000) / 1000).toFixed(0)

  return `${min}:${seg}`
}

export { ms_to_mm }
