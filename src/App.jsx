import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/actions/clientActions';
import { verify, setAuthToken } from '@/api/api';
import { fetchCategories } from '@/store/actions/productActions';
import Header from '@/layout/Header';
import PageContent from '@/layout/PageContent';
import Footer from '@/layout/Footer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    dispatch(fetchCategories());

    if (token) {
      setAuthToken(token);
      verify(token).then((response) => {
        dispatch(setUser(response));
        setAuthToken(response.token);
        localStorage.setItem('userToken', response.token);
      });
    } else localStorage.removeItem('userToken');
  }, []);

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  );
}

export default App;
