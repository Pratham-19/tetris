'use client'

import { Board, Controller } from '@/components/GameComponents'
import { useBoard } from '@/hooks/useBoard'

export default function Game({
    rows,
    cols,
    setGameOver,
}: {
    rows: number
    cols: number
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [board] = useBoard({
        rows,
        cols,
    })
    return (
        <div className="relative">
            <Board board={board} />
            <Controller setGameOver={setGameOver} />
        </div>
    )
}

//   const [gameStats, addLinesCleared] = useGameStats();
//   const [player, setPlayer, resetPlayer] = usePlayer();
//   const [board, setBoard] = useBoard({
//     rows,
//     columns,
//     player,
//     resetPlayer,
//     addLinesCleared
//   });

//   return (
// <div className="Tetris">
//   <Board board={board} />
//   <GameStats gameStats={gameStats} />
//   <Previews tetrominoes={player.tetrominoes} />
//   <GameController
//     board={board}
//     gameStats={gameStats}
//     player={player}
//     setGameOver={setGameOver}
//     setPlayer={setPlayer}
//   />
