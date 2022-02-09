import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import React from 'react';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL: React.FC<{}> = ({ children }) => {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

export default RTL;