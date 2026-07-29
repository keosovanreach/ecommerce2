# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Ecommerce2 Features

- Product catalog with categories
- Shopping cart functionality
- User authentication (Login/Signup)
- Checkout process with multiple payment options (ABA, ACLEDA)
- Order management with Telegram notifications
- Responsive design

## Telegram Order Notifications Setup

⚠️ **IMPORTANT:** You need to configure your Telegram bot credentials for order notifications to work. Currently, the `.env` file has placeholder values that won't work.

### 1. Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` and follow the instructions
3. Choose a name and username for your bot
4. **Save the Bot Token** you receive (looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### 2. Get Your Chat ID

1. Start a chat with your new bot by searching for your bot's username
2. Send any message to the bot (e.g., "Hello")
3. Open your browser and visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Look for `"chat":{"id":123456789}` in the JSON response
5. **Save the numeric chat ID** (the number after `"id":`)

### 3. Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values:
   ```
   VITE_TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   VITE_TELEGRAM_CHAT_ID=123456789
   ```

### 4. Test the Integration

1. Run the application: `npm run dev`
2. Add items to cart and complete checkout
3. Click "Pay with ABA" on the payment page
4. Check your Telegram bot for the order notification!

### 4. Test the Integration

1. Run the application: `npm run dev`
2. Add items to cart and complete checkout
3. Click "Pay with ABA" on the payment page
4. Check your Telegram bot for the order notification!

## Payment Integration

The application integrates with ABA PayWay for Cambodian bank payments. The payment button redirects to ABA's secure payment gateway.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
