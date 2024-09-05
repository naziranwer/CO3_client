interface TelegramWebApp {
  initDataUnsafe?: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
    };
  };
  ready: () => void;
  expand: () => void;
  sendData: (data: string) => void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
