import { createClient } from '@/supabase/server';
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
) {
  const supabase = await createClient()
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");
  console.log(id)
  const { data, error } = await supabase
    .from('ministries')
    .select(`*`)
    .eq('id', id)
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({status: false, error: error.message }, { status: 500 })
  }

  if (!data) return NextResponse.json(null);

  return NextResponse.json({status: true, data: data}, {status: 200})
}
