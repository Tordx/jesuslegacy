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

import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/server';

export async function GET() {
	const supabase = await createClient();

	try {

		const { data, error } = await supabase
			.from('gallery_images')
			.select('*')
		if (error) {
			console.error('Supabase error:', error);
			return NextResponse.json({ status: false, message: error.message }, { status: 500 });
		}

		if (!data) {
			return NextResponse.json({ status: false, message: 'Gallery not found' }, { status: 404 });
		}

		return NextResponse.json({ status: true, data }, { status: 200 });
	} catch (err) {
		console.error('Unexpected error:', err);
		return NextResponse.json({ status: false, message: 'Something went wrong' }, { status: 500 });
	}
}