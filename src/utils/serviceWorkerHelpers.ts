import { CONFIG } from '@/config';
import { saveSubscription } from '@/utils/requestHelpers';

export const notificationsSupported = () =>
  'Notification' in window &&
  'serviceWorker' in navigator &&
  'PushManager' in window

export const unregisterServiceWorkers = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations()
  await Promise.all(registrations.map((r) => r.unregister())) 
}

export const registerServiceWorker = async () => {
  return navigator.serviceWorker.register('/service.js')
}

export const subscribe = async () => {
  await unregisterServiceWorkers()

  const swRegistrstion = await registerServiceWorker()
  await window?.Notification.requestPermission()

  try {
    const options = {
      applicationServerKey: CONFIG.PUBLIC_KEY,
      userVisibleOnly: true,
    }

    const subscription = await swRegistrstion.pushManager.subscribe(options)
    
    await saveSubscription(subscription)

    console.log({ subscription })
  } catch (err) {
    console.error('Error', err)
  }
}