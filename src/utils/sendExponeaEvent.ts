declare global {
  interface Window {
    exponea: {
      track: (eventName: string, eventData: Record<string, any>) => void;
      identify: (
        userObject: Record<string, any>,
        options?: Record<string, any>,
        successCallback?: () => void,
        errorCallback?: () => void,
        immediate?: boolean,
      ) => void;
    };
  }
}

let exponeaEventsStore: Record<string, Record<string, any>> = {};

const runStoreWatcher = () => {
  const timer = setInterval(() => {
    if (window.exponea) {
      console.debug('runStoreWatcher when BR is ready', exponeaEventsStore);
      Object.keys(exponeaEventsStore).forEach((eventName: keyof typeof exponeaEventsStore) => {
        console.debug('runStoreWatcher push', eventName, exponeaEventsStore[eventName]);

        window.exponea.track(eventName, exponeaEventsStore[eventName]);
      });

      exponeaEventsStore = {};
      clearInterval(timer);
    }
  }, 1000);
};

export const sendExponeaEvent = (eventName: string, eventData: Record<string, any>, email?: string) => {
  if (!window.exponea) {
    console.debug('[SA]: skip event, BR not inited', eventName);
    exponeaEventsStore = {
      ...exponeaEventsStore,
      eventName: eventData,
    };
    runStoreWatcher();
    return;
  }
  withIdentify(() => {
    window.exponea.track(eventName, eventData);
  }, email);
};

export const exponeaIdentify = (key: string, value: string) => {
  if (!window.exponea) {
    console.debug('[SA]: skip identify, BR not inited');
    return;
  }
  window.exponea.identify({ [key]: value });
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
