import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Products } from './components/Products'
import { NavBar } from './components/NavBar'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css';
import { RecoilRoot } from 'recoil';
const queryClient = new QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <RecoilRoot>
          <nav>
            <NavBar />
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products/:id' element={<Products />} />
          </Routes>
        </RecoilRoot>
      </div>
      <ReactQueryDevtools initialIsopen={false} position='bottom-right' />
    </QueryClientProvider>

  );
}

export default App;
