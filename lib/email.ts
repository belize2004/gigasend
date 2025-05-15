export function generateEmailTemplate({
  senderEmail,
  numberOfFiles,
  link,
  name,
  message,
  fileSize
}: {
  senderEmail: string;
  numberOfFiles: number;
  link: string;
  name: string;
  message: string;
  fileSize: number
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Files Shared via GigaSend</title>
      <style>
          body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              color: #333333;
          }
          .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .email-header {
              background-color: #f8f8f8;
              text-align: center;
              padding: 20px;
              border-bottom: 1px solid #eeeeee;
          }
          .logo {
              width: 180px;
              height: auto;
          }
          .email-content {
              padding: 30px;
          }
          .email-footer {
              background-color: #f8f8f8;
              text-align: center;
              padding: 15px;
              font-size: 12px;
              color: #777777;
              border-top: 1px solid #eeeeee;
          }
          h1 {
              color: #333333;
              font-size: 22px;
              margin-top: 0;
              font-weight: 600;
          }
          .sender-info {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 20px;
              border-left: 4px solid #0d6efd;
          }
          .file-count {
              font-weight: 600;
              margin-bottom: 20px;
              color: #333333;
          }
          .files-container {
              margin-bottom: 25px;
          }
          .file-item {
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              padding: 12px;
              background-color: #f8f9fa;
              border-radius: 8px;
              transition: all 0.2s ease;
          }
          .file-item:hover {
              background-color: #f1f3f5;
          }
          .file-icon {
              width: 40px;
              height: 40px;
              background-color: #e9ecef;
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 15px;
              color: #0d6efd;
              font-weight: bold;
          }
          .file-details {
              flex-grow: 1;
          }
          .file-name {
              font-weight: 600;
              margin-bottom: 3px;
              color: #333333;
          }
          .file-size {
              font-size: 12px;
              color: #777777;
          }
          .download-button {
              background-color: #0d6efd;
              color: white;
              border: none;
              padding: 8px 15px;
              border-radius: 6px;
              font-weight: 600;
              cursor: pointer;
              text-decoration: none;
              font-size: 14px;
              transition: background-color 0.2s ease;
          }
          .download-button:hover {
              background-color: #0b5ed7;
          }
          .expiry-notice {
              font-size: 13px;
              background-color: #fff8e6;
              padding: 12px;
              border-radius: 8px;
              border-left: 4px solid #ffc107;
              margin-top: 25px;
          }
          @media only screen and (max-width: 620px) {
              .email-container {
                  width: 100%;
                  border-radius: 0;
              }
              .email-content {
                  padding: 20px;
              }
              .file-item {
                  flex-direction: column;
                  align-items: flex-start;
              }
              .file-icon {
                  margin-bottom: 10px;
                  margin-right: 0;
              }
              .download-button {
                  margin-top: 10px;
                  width: 100%;
                  text-align: center;
              }
          }
      </style>
  </head>
  <body>
      <div class="email-container">
          <div class="email-header">
              <img src="https://example.com/gigasend-logo.png" alt="GigaSend" class="logo">
          </div>
          
          <div class="email-content">
              <h1>Files Shared with You</h1>
              
              <div class="sender-info">
                  <strong>From:</strong> ${senderEmail}
              </div>
              
              <div class="file-count">
                  <span>${numberOfFiles} files shared</span>
              </div>
              
              <div class="files-container">
                  <div class="file-item" style="text-align: center; padding: 25px;">
                      <div style="margin-bottom: 15px;">
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM12 17L15 14H13V11H11V14H9L12 17Z" fill="#0d6efd"/>
                          </svg>
                      </div>
                      <div class="file-details" style="margin-bottom: 20px;">
                          <div class="file-name" style="font-size: 18px;">${name}</div>
                          <div class="file-size">${fileSize}</div>
                      </div>
                      <a href="${link}" class="download-button" style="padding: 12px 25px; font-size: 16px;">Download Now</a>
                  </div>
              </div>
              <h4>Message</h4>
              <p>${message}</p>
              
              <div class="expiry-notice">
                  <strong>Note:</strong> These download links will expire in 7 days. Please download your files before then.
              </div>
              
              <div class="expiry-notice">
                  <strong>Note:</strong> These download links will expire in 7 days. Please download your files before then.
              </div>
          </div>
          
          <div class="email-footer">
              <p>Sent securely via GigaSend</p>
              <p>&copy; 2025 GigaSend. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `
}
