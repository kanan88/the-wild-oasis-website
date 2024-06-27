import Logo from './_components/Logo';
import Navigation from './_components/Navigation';

export const metadata = {
  title: 'The Wild Oasis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
        <footer>&copy; 2024 The Wild Oasis </footer>
      </body>
    </html>
  );
}
