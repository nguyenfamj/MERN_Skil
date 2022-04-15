import { useEffect } from 'react';
// Import from RTK
import { useAuthenticateQuery } from '../../redux/services/authApi';
import { setUser } from '../../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHook';

export const Authentication = () => {
  const { data, error, isFetching } = useAuthenticateQuery();

  // Get isAuthenticated state from store
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  // Handle authenticateUser and change state in the store
  const dispatch = useAppDispatch();
  const authenticateUser = async () => {
    if (isFetching) {
      console.log('Loading...');
    }
    if (data?.success) {
      console.log('Authenticated');
      dispatch(setUser({ user: data?.user }));
    } else if (error) {
      console.log('Authentication Error');
    }
  };

  // Only re-render when data.success (boolean) is changed
  useEffect(() => {
    if (isAuthenticated && user === data?.user) authenticateUser();
  }, [data?.success]);

  return <></>;
};
