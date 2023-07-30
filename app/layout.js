import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";

export const metadata = {
  title: "Metrix dashboard",
  description: "We're a provider of fit-for-purpose services",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children} </main>
      </body>
    </html>
  );
};

export default RootLayout;
