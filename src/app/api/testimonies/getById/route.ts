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
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const supabase = await createClient();
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ status: false, error: "Missing id" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('testimonies')
      .select(`
        *,
        testimony_data!fk_testimony (*)   -- get all related testimony_data
      `)
      .eq('id', id)
      .single()

    console.log(data)
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ status: false, error: error.message }, { status: 500 });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ status: false, message: "No testimony_data found" }, { status: 404 });
    }

    return NextResponse.json({ status: true, data }, { status: 200 });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ status: false, error: "Something went wrong" }, { status: 500 });
  }
}