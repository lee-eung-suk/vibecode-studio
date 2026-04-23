import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const toolId = params.id;

    // Get current analytics
    const { data: analyticsData } = await supabase
      .from('analytics')
      .select('*')
      .eq('tool_id', toolId)
      .single();

    if (!analyticsData) {
      // Create new analytics record if doesn't exist
      await supabase.from('analytics').insert([
        {
          tool_id: toolId,
          views_count: 1,
          unique_visitors: 1,
        },
      ]);
    } else {
      // Increment views
      await supabase
        .from('analytics')
        .update({
          views_count: (analyticsData.views_count || 0) + 1,
          last_visited: new Date(),
        })
        .eq('tool_id', toolId);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to track view:', error);
    return NextResponse.json(
      { error: 'Failed to track view' },
      { status: 500 }
    );
  }
}
