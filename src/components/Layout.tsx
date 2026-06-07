import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-earth-100 text-slate-text">
      <Header />
      <div className="flex-1 flex flex-col h-full w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
