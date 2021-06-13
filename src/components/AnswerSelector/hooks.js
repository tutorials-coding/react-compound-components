import { useEffect, useRef } from 'react'

export function useEffectSkipMount(cb, deps) {
  const mounted = useRef(true)
  useEffect(() => {
    if (!mounted.current) {
      return cb()
    }
    mounted.current = false
  }, [...deps])
}
