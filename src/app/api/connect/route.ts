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

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('connect')  
    .select('*')
  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ status: false, error: error.message }, { status: 500 });
  }

  if (!data) return NextResponse.json({ status: true, data: [] }, { status: 200 });

  return NextResponse.json({ status: true, tabs: data }, { status: 200 });
}