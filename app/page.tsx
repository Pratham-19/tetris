'use client'
import { GameSound } from '@/components/GameComponents'
import { Game } from '@/components/Pages'
import { useReset } from '@/hooks'

export default function Home() {
    const game: Record<string, number> = {
        rows: 20,
        cols: 10,
    }
    const { gameOver, setGameOver, resetGame } = useReset()
    console.log(gameOver)

    return (
        <main className="relative flex h-screen w-screen items-center justify-center ">
            <div className="absolute right-5 top-5">
                <GameSound />
            </div>
            {gameOver ? (
                <div className="flex flex-col items-center justify-center rounded-xl border-2 border-b-4 border-r-4 border-black bg-white p-9">
                    <h2 className="my-5 text-3xl font-bold">Tetris Block</h2>
                    <button
                        className="cursor-pointer rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#FF501B] px-5 py-1 text-white transition-transform duration-300 hover:scale-95"
                        onClick={resetGame}>
                        <h2>Start</h2>
                    </button>
                </div>
            ) : (
                <Game />
            )}
        </main>
    )
}
