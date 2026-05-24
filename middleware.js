import { NextResponse } from "next/server";

export function middleware() {

  return new NextResponse(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Maintenance</title>

          <style>
            body{
              margin:0;
              background:#000;
              color:white;
              display:flex;
              justify-content:center;
              align-items:center;
              height:100vh;
              font-family:Arial;
            }

            .container{
              text-align:center;
            }

            h1{
              font-size:55px;
              margin-bottom:20px;
            }

            p{
              font-size:20px;
              color:#cccccc;
            }
          </style>
        </head>

        <body>

          <div class="container">
            <h1>Website Under Maintenance</h1>

            <p>
              Strength Of Victory International Ministries
            </p>
          </div>

        </body>
      </html>
    `,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}