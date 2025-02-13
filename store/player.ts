import { create } from 'zustand'

import { getRandomTetrics } from '@/lib/tetrics'
import { IPlayer, Tetrino } from '@/types/Game'

interface PlayerStore {
    player: IPlayer
    setPlayer: (player: IPlayer) => void
    resetPlayer: () => void
    resetPlayerGame: () => void
}

const buildPlayer = (previous?: IPlayer): IPlayer => {
    let tetrominoes: Tetrino[] = []

    if (previous) {
        tetrominoes = [...previous.tetrominoes]
        tetrominoes.unshift(getRandomTetrics())
    } else {
        tetrominoes = Array(4)
            .fill(0)
            .map((_) => getRandomTetrics())
    }
    return {
        collided: false,
        isFastDropping: false,
        position: { row: 0, column: 4 },
        tetrominoes,
        tetromino: tetrominoes.pop()!,
    }
}

export const usePlayer = create<PlayerStore>((set) => ({
    player: buildPlayer(),
    setPlayer: (player: IPlayer) => set({ player }),
    resetPlayer: () =>
        set((state) => ({
            player: buildPlayer(state.player),
        })),
    resetPlayerGame: () => set({ player: buildPlayer() }),
}))
interface SoundStore {
    isPlaying: boolean
    startPlaying: () => void
    stopPlaying: () => void
}

export const useSound = create<SoundStore>((set) => ({
    isPlaying: false,
    startPlaying: () => set((state) => ({ isPlaying: true })),
    stopPlaying: () => set((state) => ({ isPlaying: false })),
}))
