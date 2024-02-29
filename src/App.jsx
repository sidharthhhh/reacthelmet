import { AppRoutes } from './routes';
import { Header } from './Header';
// import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}
