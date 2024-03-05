import { NextResponse, NextRequest } from 'next/server'
import webpush from 'web-push'
import { CONFIG } from '@/config'
import {
  getSubscriptionsFromDb,
} from '@/utils/db'

webpush.setVapidDetails(
  'mailto:test@example.com',
  CONFIG.PUBLIC_KEY,
  CONFIG.PRIVATE_KEY,
)

export async function POST(request: NextRequest) {

  const data = await request.json();
  const subscriptions = await getSubscriptionsFromDb();

  subscriptions.forEach((s) => {
    const payload = JSON.stringify({
      title: 'Пуш уведомление',
      body: data,
    })
    webpush.sendNotification(s, payload)
  })

  return NextResponse.json({
    message: `Сообщений отправлено: ${subscriptions.length}`,
  })
}