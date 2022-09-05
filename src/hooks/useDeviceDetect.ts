import { useEffect, useState } from 'react';

const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
  const isSSR = () => Boolean(userAgent.match(/SSR/i));
  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  const isDesktop = () => Boolean(!isMobile() && !isSSR());
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  };
};
export const useDeviceDetect = () => {
  const [devices, setDevices] = useState<{
    android: boolean;
    desktop: boolean;
    ios: boolean;
    mobile: boolean;
    ssr: boolean;
  }>({
    ios: false,
    android: false,
    desktop: false,
    mobile: false,
    ssr: false,
  });

  useEffect(() => {
    const results = getMobileDetect(navigator.userAgent);
    setDevices({
      android: results.isAndroid(),
      desktop: results.isDesktop(),
      ios: results.isIos(),
      mobile: results.isMobile(),
      ssr: false,
    });
  }, []);

  return devices;
};
