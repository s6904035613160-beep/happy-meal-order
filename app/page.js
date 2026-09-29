import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="home">
      <h1>happy meal</h1>
      <p>ระบบสั่งอาหารร้านสเต๊ก — หน้านี้ใช้ทดสอบว่า deploy สำเร็จ</p>
      <nav className="links">
        <Link href="/generate-qr">สร้าง QR โต๊ะ</Link>
        <Link href="/kitchen">หน้าครัว</Link>
      </nav>
    </main>
  );
}
