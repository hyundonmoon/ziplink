# hdm.lt

hdm.lt is a URL shortener built with Next.js, TailwindCSS, and TypeScript.

## Features

-   **Instant URL shortening**: Generate shortened links quickly and easily.
-   **Seamless UI/UX**: Designed with TailwindCSS for a clean and responsive experience.
-   **Type-safe**: Developed with TypeScript and Zod for robust and maintainable code.
-   **User authentication**: Users can sign up and log in to manage their shortened URLs.
-   **Custom slugs**: Users can specify their own slugs for URLs. (WIP)
-   **Analytics**: Track the number of clicks on each shortened URL (WIP).

## Getting started

### Prerequisites

Before running this project, ensure you have the following set up:

1. **PostgreSQL Database**

    - Set up a PostgreSQL instance either locally or through a cloud provider like [Vercel](https://vercel.com/integrations/postgresql).

2. **GitHub OAuth App**

    - Create an OAuth app in [GitHub Developer Settings](https://github.com/settings/developers).
    - Save the **Client ID** and **Client Secret** for your environment variables.

3. **Cloudflare Turnstile**
    - Get a **Turnstile site key and secret** from [Cloudflare Turnstile](https://dash.cloudflare.com/turnstile).
    - Save these keys for your environment variables.

### Installation

To run this project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/hyundonmoon/hdm.lt.git
    cd hdm.lt
    ```

2. **Install dependencies**:

    ```bash
    pnpm install
    ```

3. **Set up environment variables**:  
   Check the `.env.example` file in the repository for the required variables. Create a `.env.local` file and configure the values accordingly.

4. **Run the development server**:

    ```bash
    pnpm run dev
    ```

5. **Open in your browser**:  
   Navigate to `http://localhost:3000` to view the app.

## Contributing

Contributions are welcome! If you'd like to improve the project, follow these steps:

1. Fork the repository
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your feature description"
    ```
4. Push your branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
