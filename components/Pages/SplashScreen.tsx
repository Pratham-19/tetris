import Image from 'next/image'

const SplashScreen = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
            <Image src="/images/logo.png" alt="Tetris Block" width={140} height={140} className="size-20" />
            <h2 className="text-2xl font-semibold uppercase text-white">Tetris</h2>
        </div>
    )
}

export default SplashScreen
