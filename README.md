# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Configure the contact form

The contact form sends messages through EmailJS. Create an EmailJS email service and template, then configure the template to use `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, and `{{message}}`. Set the template's Reply-To field to `{{reply_to}}`.

Create a `.env` file in the project root using `.env.example` as a reference:

```powershell
Copy-Item .env.example .env
```

Replace the example values in `.env` with the values from your EmailJS account:

```text
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Restart the Vite development server after changing environment variables. For deployment, add the same variables to the hosting provider's environment settings before building. Vite exposes `VITE_` variables in the browser bundle, so use only the EmailJS **public key** here; never put an EmailJS private key in frontend code or environment variables prefixed with `VITE_`.
