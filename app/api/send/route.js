import EmailTemplate from '@components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const res_data = await req.json();
        const { data: details } = res_data;
        const {
            email_address,
            first_name,
            last_name,
            address,
            apartment,
            city,
            country,
            phone,
            secondPhone,
        } = details;
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email_address,
            subject: 'This is senpai merch',
            react: EmailTemplate({ firstName: first_name, lastName: last_name }),
        });
        if (data.status === "success") {
            return NextResponse.json({ message: "Email Successfully Sent!" })
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
