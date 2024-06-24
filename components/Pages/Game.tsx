'use client'

import { Board, Controller } from '@/components/GameComponents'
import { useBoard } from '@/hooks'
import { useGameStats } from '@/store/gameStats'
import { usePlayer } from '@/store/player'

export default function Game({
    rows,
    cols,
    setGameOver,
}: {
    rows: number
    cols: number
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const { player, setPlayer, resetPlayer } = usePlayer()
    const { gameStats, addLinesCleared } = useGameStats()

    const [board] = useBoard({
        rows,
        cols,
        player,
        resetPlayer,
        addLinesCleared,
    })
    return (
        <div className="relative w-[85vw] space-y-3">
            <Board board={board} gameStats={gameStats} player={player} />
            <Controller setGameOver={setGameOver} player={player} setPlayer={setPlayer} board={board} />
        </div>
    )
}
