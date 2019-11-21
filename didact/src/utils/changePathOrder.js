export const changePathOrder = (starting, ending, arr) => {
    let returned = arr.map((el, i) => {
      if (`${i}` === starting) {
        let spliced = arr.splice(starting, 1)[0];
        arr.splice(ending, 0, spliced)
        return arr
      }
      return arr
    });
    returned[starting].forEach((el, i) => {
      if(el.path_order >= 0) el.path_order = i
      else el.user_path_order = i + 1
    })
    return returned[starting]
  };