import { cn } from '@/lib/utils'
import { IBoard } from '@/types/Board'

const Board = ({ board }: { board: IBoard }) => {
    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.cols}, 1fr)`,
    }

    return (
        <div className="grid gap-1 bg-white shadow-lg" style={boardStyles}>
            {board.rows.map((row, y) =>
                row.map((cell, x) => (
                    <div className={cn('relative w-auto', cell.className)} key={x + y}>
                        <div className="Sparkle" />
                    </div>
                )),
            )}
        </div>
    )
}

export default Board
