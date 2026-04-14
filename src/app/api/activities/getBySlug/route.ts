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
  const slug = searchParams.get("slug");

  if (!id) {
    return NextResponse.json(
      { status: false, error: "Missing id" },
      { status: 400 }
    );
  }

  // ✅ Fetch ONLY by id
  const { data, error } = await supabase
    .from('activities')
    .select(`*`)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json(
      { status: false, error: error.message },
      { status: 500 }
    );
  }

  if (!data) {
    return NextResponse.json(null, { status: 404 });
  }

  if (slug !== data.slug) {
    return NextResponse.json(
      {
        status: true,
        redirect: true,
        correct_slug: data.slug,
        data,
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { status: true, data },
    { status: 200 }
  );
}