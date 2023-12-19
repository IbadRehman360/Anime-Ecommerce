import { mailOptions, transporter } from '@config/nodemailer';
import { NextResponse } from 'next/server';
const generateEmailContent = (data) => {
    const customerDetails = data.data;
    const trackingInformation = `
        Tracking ID: ${data.trackingId} <br>
        Please be advised that your order is currently in the processing stage. As soon as it is dispatched, we will provide you with further updates, including expected delivery dates.
    `;

    const customerServiceContact = `
    If you have any inquiries or concerns regarding your order, feel free to reply to this email or contact our customer service  
    <a href="mailto:ibadhashim4@gmail.com" style="text-decoration: none; color: #007bff;">Email</a>
    or Whatsapp at 03358202052.
`;
const customerProductList = data.cartItems.map(product => `<img src="${product.product.images[0]}" alt="Banner" class="banner-img">
${product.product.title} - ${product.size}, ${product.color}
         
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
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        display: none;
                        font-size: 1px;
                        color: #fefefe;
                        line-height: 1px;
                        max-height: 0px;
                        max-width: 0px;
                        opacity: 0;
                        overflow: hidden;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                    }
                    .section-padding {
                        padding: 10px 15px 30px 15px;
                    }
                    .message-content {
                        padding: 20px;
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
                    .form-heading {
                        color: #2a2a2a;
                        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                        font-weight: 400;
                        text-align: left;
                        line-height: 20px;
                        font-size: 18px;
                        margin: 0 0 8px;
                        padding: 0;
                    }
                    .form-answer {
                        color: #2a2a2a;
                        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                        font-weight: 300;
                        text-align: left;
                        line-height: 20px;
                        font-size: 16px;
                        margin: 0 0 24px;
                        padding: 0;
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
                                <h4>Dear ${customerDetails.first_name} ${customerDetails.last_name}</h4>
                                <div class="form-container">
                                        <p>We are pleased to inform you that your recent order has been successfully placed. Below, you will find comprehensive details regarding your order and its tracking information:</p>
                                        <h4>Order Details:</h4>
                                        ${customerProductList}
                                     <p>Total Amount: ${data.totalAmount}<p/>
                                        <h4>Tracking Information</h4>
                                        <p>${trackingInformation}</p>
                                        <br>
                                        ${customerServiceContact}
                                        </div>
                                </div>
                                <p>[Senpai Merch Ltd] Date of Placement: ${new Date().toLocaleDateString()}</p>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        `,
};
};
export async function POST(req) {
    try {
        const requestData = await req.json();

        const emailStatus = await transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(requestData),
            subject: `Confirmation of Product Order Placement and Tracking Information (ID: ${requestData.trackingId})`,
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
    //         {
    //             product: {
    //                 _id: '65589af70ae5a19520117a1a',
    //                 title: 'Strongest Vessel Club Tee',
    //                 description:
    //                     'Elevate your style with our premium white hoodie featuring a unique anime design. Crafted with the perfect blend of comfort and fashion, this hoodie is a must-have for any anime enthusiast. 🎨 **Color:** White, Blue, Black 👕 **Material:** High-quality cotton blend   🎭 **Design:** Stand out from the crowd with an eye-catching anime design that showcases your love for Japanese animation.',
    //                 price: 20000,
    //                 category_id: {
    //                     _id: '654cc9b672d1fa8b7fc1316b',
    //                     name: 'Bracelet',
    //                     createdAt: '2023-11-09T11:59:50.291Z',
    //                     updatedAt: '2023-11-09T11:59:50.291Z',
    //                     __v: 0
    //                 },
    //                 anime_category_id: '654cc5ce72d1fa8b7fc130f3',
    //                 reviews_id: Array(9)[
    //                     '654adf7c8e0f56318b7f3d42', '65649bc7ea39c10c67916fd2', '6580349b1494814ddb6ca672',
    //                     '658034d21494814ddb6ca696', '6580353a1494814ddb6ca701', '6580353f1494814ddb6ca705',
    //                     '658035451494814ddb6ca709', '658035451494814ddb6ca70d', '6580354f1494814ddb6ca71c'
    //                 ],
    //                 stock_quantity: 24,
    //                 __v: 0,
    //                 images: [
    
    //                     'https://www.kiayaaccessories.com/cdn/shop/files/Kimetsu-No-Yaiba-Demon-Slayer-Rings-for-Men-Kocho-Shinobu-Rengoku-Kyojuro-Iguro-Obanai-Cosplay-Jewelry.jpg?v=1697457373&width=700',
    //                     'https://th.bing.com/th/id/OIP.ZLDCu0PbqtO72jkUd2H_qwHaHa?pid=ImgDet&rs=1',
    
    //                     'https://th.bing.com/th/id/OIP.T2QMq4HYUsEuYWJDlyvxvwHaHa?pid=ImgDet&rs=1'
    //                 ],
    //                 colors: ['red', 'blue', 'orange', 'red', 'pink'],
    //                 sizes: {
    //                     XS: true,
    //                     XSS: false,
    //                     S: true,
    //                     M: false,
    //                     L: true,
    //                     XL: false,
    //                     '2XL': false,
    //                     '3XL': true
    //                 },
    //                 highlights: [
    //                     'Comfortable Fabric', 'Trendy Design', 'Versatile Style', 'Durable Build',
    //                     'Warmth On-The-Go'
    //                 ],
    //                 discount_price: 899,
    //                 createdAt: '2023-11-18T11:07:35.176Z',
    //                 updatedAt: '2023-12-19T03:01:55.117Z',
    //                 is_accessories: false
    //             },
    //             quantity: 1,
    //             color: 'red',
    //             size: 'XS'
    //         }
    //     ]
    // }