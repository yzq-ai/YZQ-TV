'use client';

import { createContext, ReactNode, useContext } from 'react';

const SiteContext = createContext<{ siteName: string; announcement?: string }>({
  // 默认值
  siteName: 'YZQ-TV',
  announcement:
    '欢迎来到我搭建的影视网站',
});

export const useSite = () => useContext(SiteContext);

export function SiteProvider({
  children,
  siteName,
  announcement,
}: {
  children: ReactNode;
  siteName: string;
  announcement?: string;
}) {
  return (
    <SiteContext.Provider value={{ siteName, announcement }}>
      {children}
    </SiteContext.Provider>
  );
}
