'use client'
import { useState, useCallback } from 'react'

export const useReset = () => {
    const [gameOver, setGameOver] = useState(true)

    const resetGame = useCallback(() => {
        setGameOver(false)
    }, [])

    return { gameOver, setGameOver, resetGame }
}
