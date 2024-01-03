import { mailOptions, transporter } from '@config/nodemailer';
import { NextResponse } from 'next/server';
const generateEmailContent = (data) => {
    const customerDetails = data.data;
    const trackingInformation = `
        Tracking ID: ${data.trackingId}
         <br/>
         <br>
        Please be advised that your order is currently in the processing stage. As soon as it is dispatched, we will provide you with further updates, including expected delivery dates.
    `;

    const customerServiceContact = `
    If you have any inquiries or concerns regarding your order, feel free to reply to this email or contact our customer service  
    <a href="mailto:ibadhashim4@gmail.com" style="text-decoration: none; color: #007bff;">Email</a>
    or Whatsapp at 03218202052
`;
    const customerProductList = data.cartItems.map(product => `
  <img src="${product.product.images[0]}" alt="Banner" class="banner-img">
  ${product.product.title} - 
  ${product.size !== null ? product.size : ''} 
  ${product.color !== null ? product.color : ''}
  <br/>
  <br>
`).join("\n");

    return {
        text: `Please enable HTML to view this email.`,
        html: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <style>
                  
                
                    .message-content {
                        padding: 8px;
                        font-size: 16px;
                        line-height: 25px;
                        color: #232323;
                    }
                    .form-container {
                        margin-bottom: 24px;
                        padding: 20px;
                        border: 1px dashed #ccc;
                        background-color: #f9f9f9;
                    }
                    .banner-img {
                        width: 100%;
                        max-width: 100%;
                        height: auto;
                        margin-bottom: 20px;
                    }
                </style>
                </head>
                <body>
                    <table>
                        <tr>
                            <td class="section-padding">
                                <div class="message-content">
                                <div class="form-container">
                                        <p>We are pleased to inform you that your recent order has been successfully placed. Below, you will find comprehensive details regarding your order and its tracking information:</p>
                                        <h4>Order Details:</h4>
                                        ${customerProductList}
                                     <p>Total Amount: ${data.totalAmount.toFixed(2)} <p/>
                                        <h4>Tracking Information</h4>
                                        <p>${trackingInformation}</p>
                                        <br>
                                        ${customerServiceContact}
                                        </div>
                                        <p>[Senpai Merch Ltd] Date of Placement: ${new Date().toLocaleDateString()}</p>
                                </div >
                            </td >
                        </tr >
                    </table >
                </body >
            </html >
    `,
    };
};
export async function POST(req) {
    try {
        const requestData = await req.json();
        mailOptions.to = requestData.data.email_address;

        const emailStatus = await transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(requestData),
            subject: `Confirmation of Product Order Placement and Tracking Information(ID: ${requestData.trackingId})`,
        });

        if (requestData.status === "success") {
            return NextResponse.json({ message: "Email Successfully Sent!" });
        }

        return NextResponse.json(requestData);
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ error: "Internal Server Error" });
    }
}
