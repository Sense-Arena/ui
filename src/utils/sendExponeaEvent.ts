declare global {
  interface Window {
    exponea: {
      track: (eventName: string, eventData: { [key: string]: any }) => void;
      identify: (
        userObject: { [key: string]: any },
        options?: { [key: string]: any },
        successCallback?: () => void,
        errorCallback?: () => void,
        immediate?: boolean,
      ) => void;
    };
  }
}

export const sendExponeaEvent = (eventName: string, eventData: { [key: string]: any }, email?: string) => {
  if (!window.exponea) {
    console.debug('[SA]: skip event, BR not inited', eventName);
    return;
  }
  withIdentify(() => {
    window.exponea.track(eventName, eventData);
  }, email);
};

const withIdentify = (fn: () => void, email?: string) => {
  if (email) {
    window.exponea.identify({ email_id: email.toLowerCase().trim() }, {}, () => {
      fn();
    });
  } else {
    fn();
  }
};
