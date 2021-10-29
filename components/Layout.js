import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header className='header'>
        <Link href='/'>
          <a className='header-anchor'>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
      <style jsx>{`
        .header-anchor {
          color: #a62f03;
        }
      `}</style>
    </div>
  );
}
