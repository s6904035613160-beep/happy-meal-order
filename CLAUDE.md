# happy meal — ระบบสั่งอาหารร้านสเต๊ก

## Stack
- Next.js เวอร์ชันล่าสุด (App Router) — **JavaScript เท่านั้น ห้ามใช้ TypeScript**
- Deploy บน Vercel, ฐานข้อมูลบน Supabase
- Supabase client อยู่ที่ `lib/supabaseClient.js`
  (`import { supabase } from '@/lib/supabaseClient'`)
- Env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  (ดู `.env.example`; ห้าม commit `.env.local`)

## กฎสำคัญ: params ของ Dynamic Route เป็น Promise
Next.js เวอร์ชันล่าสุด `params` (และ `searchParams`) เป็น **Promise**
ห้ามอ่านค่าตรง ๆ

Client Component (`'use client'`) ต้อง unwrap ด้วย `use()` จาก React เสมอ:

```js
'use client';
import { use } from 'react';

export default function OrderPage({ params }) {
  const { sessionId } = use(params); // ห้ามใช้ params.sessionId ตรง ๆ
}
```

Server Component ให้ใช้ `const { sessionId } = await params;` (async function)

## โครงสร้างฐานข้อมูล (มีอยู่แล้วใน Supabase — ไม่ต้องสร้าง ใช้อ้างอิงทั้งโปรเจกต์)

| ตาราง | คอลัมน์ |
|---|---|
| `sessions` | id, table_number, adult_count, child_count, status, created_at |
| `menu_categories` | id, name, sort_order |
| `menu_items` | id, category_id, name |
| `orders` | id, session_id, table_number, items (jsonb), status, created_at |

อย่าเพิ่มหรือเปลี่ยนชื่อคอลัมน์นอกเหนือจากนี้ ถ้าต้องแก้ schema ให้ถามก่อน

## หน้าที่วางแผนไว้
- `/` หน้าแรก (ทดสอบ deploy)
- `/generate-qr` สร้าง QR สำหรับโต๊ะ
- `/kitchen` หน้าครัว
- หน้าสั่งอาหาร (Dynamic Route) จะสร้างในขั้นตอนถัดไป
