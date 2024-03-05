export const permissionStatusMessage = (permission: string) => {
  switch (permission) {
    case 'default':
      return 'По умолчанию'
    case 'granted':
      return 'Разрешено'
    case 'denied':
      return 'Запрещено'
    default:
      break;
  }
};