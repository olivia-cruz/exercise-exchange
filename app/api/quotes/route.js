import { NextResponse } from "next/server";
import { Request } from "zeromq";

const QUOTE_URL = "tcp://localhost:5557";

export async function GET() {
    const sock = new Request();
    sock.connect(QUOTE_URL);
    await sock.send("quote request");
    const [ result ]  = await sock.receive();
    const resultString = result.toString();
    return NextResponse.json({ quote: resultString});
}
