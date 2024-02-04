import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request) {
  try {
    await sql`DELETE FROM pets
    WHERE name = 'Spaki';
    `
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

}
