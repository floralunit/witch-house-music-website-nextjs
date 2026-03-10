export const metadata = {
  title: "Witch House Archive | floralunit world ❤",
  description: "Witch House Archive, мой витчхаус архив",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
