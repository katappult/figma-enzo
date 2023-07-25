import './App.css';
import { ConfigProvider } from 'antd';
import Header from './components/Header';
import Verticaltabs from './components/Verticaltabs';

function App() {
  return (
    <div className='mainpage'>
      <Header />
      <div className='container'>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2E6E54',
          },
        }}
      >
        <Verticaltabs></Verticaltabs>
      </ConfigProvider>
      </div>
    </div>
  );
}

export default App;
