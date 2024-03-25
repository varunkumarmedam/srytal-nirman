import { createContext, useState } from 'react';

const LoadingContext = createContext({ isLoading: false });

export default LoadingContext;