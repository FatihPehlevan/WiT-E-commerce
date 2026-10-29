import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/actions/clientActions';
import { verify } from '@/api/api';
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
      verify(token).then((response) => {
        dispatch(setUser(response));
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
