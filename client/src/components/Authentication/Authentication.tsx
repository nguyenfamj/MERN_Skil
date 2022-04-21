import { useEffect } from 'react';
// Import from RTK
import { useLazyAuthenticateQuery } from '../../redux/services/authApi';
import { setUser } from '../../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHook';

export const Authentication = () => {
  const [trigger, result] = useLazyAuthenticateQuery();

  // Get isAuthenticated state from store
  const { user, accessToken } = useAppSelector((state) => state.auth);

  // Handle authenticateUser and change state in the store
  const dispatch = useAppDispatch();
  const authenticateUser = async () => {
    await trigger();
    if (result?.data?.success) {
      console.log('Authenticated');
      dispatch(setUser({ user: result?.data?.user }));
    } else if (result.error) {
      console.log('Authentication Error', result.error);
    }
  };

  // Only re-render when data.success (boolean) is changed
  useEffect(() => {
    if (user !== result?.data?.user && accessToken) {
      authenticateUser();
    }
  }, [result?.data?.user, accessToken]);

  return <></>;
};
