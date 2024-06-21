import { NextResponse, NextRequest } from 'next/server'

import { isHashValid } from '@/lib/utils'

export async function POST(request: NextRequest) {
    if (!process.env.BOT_TOKEN) return NextResponse.json({ error: 'Bot Token not found' }, { status: 400 })
    const token = process.env.BOT_TOKEN
    try {
        const { hash } = await request.json()
        if (!hash) return NextResponse.json({ error: 'Missing required field hash' }, { status: 400 })
        const data = Object.fromEntries(new URLSearchParams(hash))

        const isValid = await isHashValid(data, token)

        if (isValid) return NextResponse.json({ message: 'Valid hash' }, { status: 200 })
        return NextResponse.json({ message: 'Invalid hash' }, { status: 403 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Error creating post' }, { status: 500 })
    }
}
