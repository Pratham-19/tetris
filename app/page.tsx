'use client'
import { LogOut } from 'lucide-react'

import { GameSound } from '@/components/GameComponents'
import { Game, SplashScreen } from '@/components/Pages'
import { useReset } from '@/hooks'
import useTelegramInitData from '@/hooks/useTelegramInitData'

export default function Home() {
    const game: Record<string, number> = {
        rows: 25,
        cols: 15,
    }
    const { gameOver, resetGame, setGameOver } = useReset()

    const data = useTelegramInitData()

    if (!data?.query_id) {
        return <SplashScreen />
    }

    return (
        <main className="relative flex h-screen w-screen items-center justify-center ">
            <div className="absolute right-5 top-5 flex items-center justify-center gap-3 ">
                <GameSound />
                {!gameOver && (
                    <button
                        className="cursor-pointer"
                        onClick={() => {
                            setGameOver(true)
                        }}>
                        <LogOut size={22} />
                    </button>
                )}
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
                <Game rows={game.rows} cols={game.cols} setGameOver={setGameOver} />
            )}
        </main>
    )
}
