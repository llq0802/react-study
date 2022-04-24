import React, { useEffect, memo, useMemo } from 'react'

function Child(props) {
  let cc = useMemo(() => props.cc + 1, [props.cc])

  useEffect(() => {
    console.log('Child', props);
  }, [props])
  return (
    <div>Child</div>
  )
}

export default memo(Child)