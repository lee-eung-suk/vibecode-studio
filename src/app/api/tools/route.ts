import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('tools')
      .select('*, analytics(*)')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch tools:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tools' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from('tools')
      .insert([
        {
          name: body.name,
          description: body.description,
          category_id: body.category_id,
          vibecode_url: body.vibecode_url,
          thumbnail_url: body.thumbnail_url,
        },
      ])
      .select();

    if (error) throw error;

    // Create analytics record
    await supabase.from('analytics').insert([
      {
        tool_id: data[0].id,
        views_count: 0,
        unique_visitors: 0,
      },
    ]);

    return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
    console.error('Failed to create tool:', error);
    return NextResponse.json(
      { error: 'Failed to create tool' },
      { status: 500 }
    );
  }
}
