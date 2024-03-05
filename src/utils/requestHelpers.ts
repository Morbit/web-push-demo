const ORIGIN = window.location.origin;
const headers = {
  'Content-Type': 'application/json',
}

export const saveSubscription = async (subscription: PushSubscription) => {
  const BACKEND_URL = `${ORIGIN}/api/subscribe`

  const response = await fetch(BACKEND_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(subscription),
  })

  return response.json()
}

export const sendMessage = async (message: string) => {
  const BACKEND_URL = `${ORIGIN}/api/send`

  const response = await fetch(BACKEND_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(message),
  })

  return response.json()
}