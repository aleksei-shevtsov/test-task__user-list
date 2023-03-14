import { configureStore } from '@reduxjs/toolkit'
import  userList  from './userList/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
      userList
    },
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
