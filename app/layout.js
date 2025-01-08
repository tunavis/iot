import './globals.css';
import Sidebar from '../components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, display: 'flex', height: '100vh' }}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
