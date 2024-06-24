'use client'
import { useState, useCallback } from 'react'

import { useGameStats } from '@/store/gameStats'
import { usePlayer } from '@/store/player'

export const useReset = () => {
    const [gameOver, setGameOver] = useState(true)
    const { resetGameStats } = useGameStats()
    const { resetPlayer } = usePlayer()

    const resetGame = useCallback(() => {
        setGameOver(false)
        resetGameStats()
        resetPlayer()
    }, [])

    return { gameOver, setGameOver, resetGame }
}
