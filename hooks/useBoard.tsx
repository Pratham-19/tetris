import { useState, useEffect } from 'react'

import { buildBoard } from '@/lib/board'
import { IBoard } from '@/types/Board'

export const useBoard = ({
    rows,
    cols,
    player,
    resetPlayer,
    addLinesCleared,
}: {
    rows: number
    cols: number
    player?: any
    resetPlayer?: any
    addLinesCleared?: any
}) => {
    const [board, setBoard] = useState<IBoard>(buildBoard({ rows, cols }))

    // useEffect(() => {
    //     setBoard((previousBoard) =>
    //         nextBoard({
    //             board: previousBoard,
    //             player,
    //             resetPlayer,
    //             addLinesCleared,
    //         }),
    //     )
    // }, [player, resetPlayer, addLinesCleared])

    return [board]
}
