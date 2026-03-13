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
			return NextResponse.json({ status: false, message: 'About not found' }, { status: 404 });
		}

		return NextResponse.json({ status: true, data }, { status: 200 });
	} catch (err) {
		console.error('Unexpected error:', err);
		return NextResponse.json({ status: false, message: 'Something went wrong' }, { status: 500 });
	}
}