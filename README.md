# 🚗 Site for BankWest Auto Detailing

This is a professional, responsive website built for a local car detailing business. The frontend is built using **Next.js** and **Tailwind CSS**, with a minimal backend route integrated to handle contact form submissions using the **Resend API**.

> 🧼 Live Site: [bankwestautodetailing.com](https://bankwestautodetailing.com)  
> 📁 GitHub Repo: [https://github.com/jnotsknab/car-detailing-site.git](https://github.com/jnotsknab/car-detailing-site.git)

---

## ✨ Features

- Responsive and modern UI with Tailwind CSS
- Mobile-friendly design
- Sticky header hero section
- Scrollable service overview and contact section
- Fully functional **contact form**
- Contact form submissions send emails directly using the **Resend API**
- SEO and accessibility-friendly setup
- Integrated with a custom domain via Vercel

---

## 🧱 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com)
- **Backend**: [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- **Email Service**: [Resend](https://resend.com)

---

## 📬 Contact Form Setup

The contact form uses a single API route:

```http
POST /api/send
```

This route accepts JSON payloads from the form and uses the Resend API to send formatted HTML emails to the business inbox.

### Example Payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Detailing Inquiry",
  "message": "Hi, I'm interested in booking a full interior service."
}
```

---

## 🛠️ Getting Started (Local Development)

1. **Clone the repository:**

```bash
git clone https://github.com/jnotsknab/car-detailing-site.git
cd car-detailing-site
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env.local` file:**

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_RECEIVER=your@email.com
```

4. **Run the development server:**

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🚀 Deployment

The site is deployed on [Vercel](https://vercel.com). To deploy your own version:

- Fork or clone the repository
- Push it to your GitHub account
- Import the project into your Vercel dashboard
- Set the required environment variables (`RESEND_API_KEY`, `EMAIL_RECEIVER`) in Vercel settings

---

## 🧪 Environment Variables

| Variable         | Description                                |
|------------------|--------------------------------------------|
| `RESEND_API_KEY` | Your API key from Resend for email sending |
| `EMAIL_RECEIVER` | The email address that receives messages   |

---

## 📄 License

This project is **not open-source** and was built specifically for a private client.  
You may reference the implementation or structure for learning purposes, but reproduction or redistribution is not permitted.

---

## 📷 Screenshots

*Coming soon — screenshots of the live homepage, contact form, and responsive mobile design.*

---

## 🤝 Contact

For business inquiries or collaborations:  
📧 [Reach me at jtbtrichel@gmail.com]

---

**Made with ❤️ by Jonathan Bankston**
