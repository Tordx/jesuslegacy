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

/*
 * Jesus Legacy Church Project
 */

import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/server';

export async function GET() {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from('testimonies')
      .select(`
        *,
        testimony_data!fk_testimony (
          title,
          description,
          image_slug,
          name
        )
      `)
      .eq('status', 'active');

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { status: false, message: error.message },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { status: false, message: 'No testimonies found' },
        { status: 404 }
      );
    }

    const formatted = data.map((item) => {
      const td = item.testimony_data?.[0];

      const firstDescription = td?.description?.[0] || '';

      const preview =
        firstDescription.length > 20
          ? firstDescription.slice(0, 20) + '...'
          : firstDescription;

      const { ...rest } = item;

      return {
        ...rest,
        title: td?.title || '',
        name: td?.name || '',
        image_slug: td?.image_slug || '',
        description: preview,
      };
    });

    return NextResponse.json(
      { status: true, data: formatted },
      { status: 200 }
    );
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { status: false, message: 'Something went wrong' },
      { status: 500 }
    );
  }
}