export interface IBoard {
    rows: {
        occupied: boolean
        className: string
    }[][]

    size: {
        rows: number
        cols: number
    }
}
