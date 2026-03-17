/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */

import { createClient } from '@/supabase/server';
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
) {
  const supabase = await createClient()
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id)
  const { data, error } = await supabase
    .from('ministries')
    .select(`slug`)
    .eq('id', id)
    .single()

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({status: false, error: error.message }, { status: 500 })
  }

  if (!data) return NextResponse.json(null);

  return NextResponse.json({status: true, data: data}, {status: 200})
}
