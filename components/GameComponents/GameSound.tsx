import { VolumeX, Volume2 } from 'lucide-react'
import { useRef, useState } from 'react'

export default function GameSound() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)
    const handleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
                setIsPlaying(false)
            } else {
                audioRef.current.play()
                setIsPlaying(true)
            }
        }
    }

    return (
        <div className="flex items-center justify-center">
            <button onClick={handleAudio}>{isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}</button>
            <audio src="/audio/bg-audio.mp3" loop ref={audioRef} />
        </div>
    )
}
