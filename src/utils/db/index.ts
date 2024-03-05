import { PushSubscription } from 'web-push'
import { JSONFilePreset } from 'lowdb/node'

type DummyDb = {
  subscriptions: PushSubscription[]
}

const defaultData: DummyDb = { subscriptions: [] }

export const saveSubscriptionToDb = async (
  subscription: PushSubscription
): Promise<PushSubscription[]> => {
  const db = await JSONFilePreset('./db.json', defaultData);

  db.data.subscriptions.push(subscription);
  await db.write();
  
  return Promise.resolve(db.data.subscriptions)
}

export const getSubscriptionsFromDb = async () => {
  const db = await JSONFilePreset('./db.json', defaultData)
  return Promise.resolve(db.data.subscriptions)
}
