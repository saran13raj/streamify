# My React Project

This README provides instructions for setting up and running the project, as well as an overview of its structure and key technologies used.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/saran13raj/streamify.git
cd streamify
```

### Installation and Running

This project uses Vite for fast development and building. Follow these steps to get started:

1. Install dependencies:

    ```bash
    pnpm install
    ```

2. Run the development server:

    ```bash
    pnpm dev
    ```

3. Build for production:

    ```bash
    pnpm build
    ```

4. Run unit tests:
    ```bash
    pnpm test
    ```

## Project Structure

This project follows the Feature Sliced Design architecture, which organizes code into layers and slices for better maintainability and scalability. Learn more about Feature Sliced Design [here](https://feature-sliced.design/docs/get-started/overview).

## State Management

State management is handled by Effector.js, a powerful and lightweight state manager. Effector provides a clear and predictable way to manage application state. For more information, check out the [Effector React API documentation](https://effector.dev/en/api/effector-react/).

## UI Components and Styling

The project uses Tailwind CSS for utility-first styling and leverages the shadcn/ui component library for beautiful, accessible UI components. Explore the available components at [ui.shadcn.com](https://ui.shadcn.com/).

## Testing

Unit tests are written using Jest, a JavaScript Testing Framework with a focus on simplicity.

Uncomment `coverageReporters` in `jest.config.ts` file to generate coverage report for tests.

## Additional Information

Click on revenue distribution pie chart segment to filter recent streams by that revenue source.

Could have mocked API calls for metrics and charts similar to recent streams API call. Then planned to not do it at this time and hardcoded it to the effector store.

It's best to sort Tailwind classes using [Tailwind prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier). So it's easy find the exact class while debugging if you understand by what order Tailwind orders in CSS.

Should add more units and integration tests for full coverage.

> All the songs listed are from few of my favorite artists. Most streamed chart lists my top 5 favorite songs at this time.

Demo - https://streamify-9g1.pages.dev

-- built by [saran13raj.com](https://saran13raj.com/)
