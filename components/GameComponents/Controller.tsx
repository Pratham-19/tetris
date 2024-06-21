import { motion } from 'framer-motion'
import { ArrowBigDown, ArrowBigLeft, ArrowBigRight, ArrowBigUp, Rotate3dIcon } from 'lucide-react'

const buttonPattern = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
]

const Controller = ({ setGameOver }: { setGameOver: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const onKeyUp = ({ code }: { code: string }) => {
        console.log('onKeyUp', code)
    }

    const onKeyDown = ({ code }: { code: string }) => {
        if (code === 'KeyQ') {
            setGameOver(true)
            console.log('rotate')
        }
        console.log('onKeyDown', code)
    }

    return (
        <div className="flex items-center justify-between">
            {/* <input className="absolute top-[-100em]" type="text" onKeyDown={onKeyDown} onKeyUp={onKeyUp} autoFocus /> */}
            <section className="grid grid-cols-3 gap-1.5 ">
                {buttonPattern.map((row, rowIndex) =>
                    row.map((cell, cellIndex) => (
                        <motion.button
                            key={`${rowIndex}-${cellIndex}`}
                            className={`flex size-9 items-center justify-center rounded-md text-xl font-bold
              ${cell ? 'cursor-pointer border-2 border-black bg-[#FF440C]' : 'bg-transparent'} `}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
                            {cell ? getArrowIcon(rowIndex, cellIndex) : ''}
                        </motion.button>
                    )),
                )}
            </section>
            <section>
                <motion.button
                    className="flex size-16 cursor-pointer items-center justify-center rounded-full border-2 border-black bg-[#FF440C] text-center font-bold text-black"
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
                    <Rotate3dIcon size={24} />
                </motion.button>
            </section>
        </div>
    )
}

export default Controller

const getArrowIcon = (rowIndex: number, cellIndex: number) => {
    if (rowIndex === 0 && cellIndex === 1) {
        return <ArrowBigUp size={24} />
    } else if (rowIndex === 1 && cellIndex === 0) {
        return <ArrowBigLeft size={24} />
    } else if (rowIndex === 1 && cellIndex === 2) {
        return <ArrowBigRight size={24} />
    } else if (rowIndex === 2 && cellIndex === 1) {
        return <ArrowBigDown size={24} />
    }

    return ''
}
