# happy meal

ระบบสั่งอาหารร้านสเต๊ก — Next.js (App Router, JavaScript) + Supabase, deploy บน Vercel

## เริ่มใช้งาน
```bash
npm install
cp .env.example .env.local   # แล้วใส่ค่า Supabase
npm run dev
```

## Deploy บน Vercel
1. push โค้ดขึ้น Git แล้ว import โปรเจกต์เข้า Vercel
2. ตั้ง Environment Variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy

## หมายเหตุสำคัญ
โปรเจกต์ใช้ Next.js เวอร์ชันล่าสุด ซึ่ง `params` ของ Dynamic Route เป็น Promise
ต้อง unwrap ด้วย `use()` จาก React เสมอ (รายละเอียดและ schema อยู่ใน `CLAUDE.md`)
