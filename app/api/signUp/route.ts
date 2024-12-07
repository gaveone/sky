import SignUp from '@/server/endPoint/SignUp';
import { NextRequest, NextResponse } from 'next/server';


type Response = {
     type: "STUDENT" | "ADMIN" | "TEACHER";
     data: [string, string | number][];
}
export async function POST(request: NextRequest) {
     // const url = request.nextUrl
     const body: Response = await request.json();
     const re = await SignUp({ data: body.data, type: body.type })
     return NextResponse.json({ message: 'Data received successfully', data: re });

}