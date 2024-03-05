import { NextResponse, NextRequest } from 'next/server'
import { PushSubscription } from 'web-push'
import {
  saveSubscriptionToDb,
} from '@/utils/db'

export async function POST(request: NextRequest) {
  const subscription = (await request.json()) as PushSubscription | null

  if (!subscription) {
    console.error('Подписка не удалась!')
    return
  }

  const updatedDb = await saveSubscriptionToDb(subscription)

  return NextResponse.json({ message: 'success', updatedDb })
}