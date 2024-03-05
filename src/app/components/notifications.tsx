'use client'

import { useState, ChangeEvent } from 'react';
import { subscribe, notificationsSupported } from '@/utils/serviceWorkerHelpers'
import { permissionStatusMessage } from '@/utils/notificationHelpers'
import { sendMessage } from '@/utils/requestHelpers'

export default function Notification() {
  const [textareaValue, setTextareaValue] = useState('');
  const [permission, setPermission] = useState(
    window?.Notification?.permission || 'По умолчанию'
  );

  if (!notificationsSupported()) {
    return <h3>Установи приложение</h3>
  }

  const requestPermission = async () => {
    await subscribe();
    const receivedPermission = await window?.Notification.permission;
    setPermission(receivedPermission);
  }

  const handleSend = async () => {
    await sendMessage(textareaValue);
    setTextareaValue('')
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }

  return (
    <>
      <h3>WebPush PWA</h3>
      <h4>{`Статус допуска уведомлений: ${permissionStatusMessage(permission)}`}</h4>
      <button onClick={requestPermission}>
        Запросить разрешение и подписаться
      </button>
      <br /><br /><br />
      <textarea value={textareaValue} onChange={handleTextAreaChange}></textarea>
      <br /><br />
      <button onClick={handleSend} className='btn btn-primary'>отправить сообщение</button>
    </>
  );
}