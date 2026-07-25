import {VercelRequest, VercelResponse} from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);  

export default async function handler(req: VercelRequest, res: VercelResponse ) {
    const {name, email, message} = await req.body;

    try{
        const {data, error} = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'ososamuel246@gmail.com',
            replyTo: email,
            subject: `New Message from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        if(error) {
            res.status(400).json({error});
        }

        return res.status(200).json({success: true, data})
    } catch(err) {
        return res.status(500).json({error: err})
    }

}