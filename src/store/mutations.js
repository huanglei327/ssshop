
export const UpSearchs = (state, value) => {
  if (state.searchValues.length > 9) {
    //删除最后一个
    state.searchValues.splice(0, 1)
  }
  state.searchValues.push(value)
  localStorage.setItem('searchValues', JSON.stringify(state.searchValues))
}

export const DelSearchs = (state) => {
  state.searchValues = []
  localStorage.setItem('searchValues', JSON.stringify(state.searchValues))
}