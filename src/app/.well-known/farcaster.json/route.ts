import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        headers: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
        payload: "eyJkb21haW4iOiAib25zZW5ib3QtbGlua3ZlcnNlLWZ1c2lvbi1vODlxeTNzYTUtZnJhbWVjZXB0aW9uLXYyLnZlcmNlbC5hcHAifQ",
        signature: "aACt79z7oje3v0Q-bL-sCq7thPc0m3g8R9uDrJGvrutjH7r745Rn5_vSPyUSXFxe2OPVdes2rtEgpuUAfKWopxs"
    });
}
