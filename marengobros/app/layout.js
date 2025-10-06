import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavPills from "../components/ui/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Marengo Bros | Custom Travel Itineraries & Content Writing | California",
    template: "%s | Marengo Bros",
  },
  description:
    "Expert travel writers Dan and Scott Marengo offer custom travel itineraries and professional travel content writing for California businesses. Freelance travel writing services tailored to your needs.",
  keywords: [
    "travel itinerary planning",
    "custom travel itineraries",
    "California travel writing",
    "travel content writing",
    "freelance travel writers",
    "California travel content",
    "business travel writing",
    "travel blog writing",
    "Dan Marengo",
    "Scott Marengo",
  ],
  authors: [{ name: "Dan Marengo" }, { name: "Scott Marengo" }],
  creator: "Marengo Bros",
  publisher: "Marengo Bros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://marengobros.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Marengo Bros | Custom Travel Itineraries & Content Writing",
    description:
      "Expert travel writers Dan and Scott Marengo offer custom travel itineraries and professional travel content writing for California businesses.",
    url: "https://marengobros.com", // Replace with your actual domain
    siteName: "Marengo Bros",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Marengo Bros - Travel Writing & Itinerary Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marengo Bros | Custom Travel Itineraries & Content Writing",
    description:
      "Expert travel writers offering custom travel itineraries and professional travel content writing for California businesses.",
    images: ["/og-image.jpg"], // Same image as OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png", // Create this for iOS devices (180x180px)
  },
  verification: {
    // google: 'your-google-verification-code', // Add when you set up Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Marengo Bros",
              description:
                "Custom travel itineraries and professional travel content writing services for California businesses",
              url: "https://marengobros.com",
              logo: "https://marengobros.com/mb-logo.svg",
              image: "https://marengobros.com/og-image.jpg",
              priceRange: "$$",
              areaServed: {
                "@type": "State",
                name: "California",
              },
              serviceType: [
                "Travel Itinerary Planning",
                "Travel Content Writing",
                "Business Travel Writing",
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "Dan Marengo",
                },
                {
                  "@type": "Person",
                  name: "Scott Marengo",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children} <NavPills />
      </body>
    </html>
  );
}
