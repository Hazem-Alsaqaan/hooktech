import { Open_Sans } from "next/font/google";
import "./globals.css";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700", "800"],
});

export const metadata = {
  title: "HookTech",
  description:
    "HookTeck - A specialized company in creating and developing mobile applications and web pages using the latest technologies. We provide customized solutions that meet your business needs and enhance your digital presence, with a focus on quality, performance, and exceptional user experience , شركة متخصصة في إنشاء وتطوير تطبيقات الهاتف وصفحات الويب باستخدام أحدث التقنيات. نقدم حلولًا مخصصة تلبي احتياجات عملك وتعزز وجودك الرقمي، مع التركيز على الجودة والأداء والتجربة المتميزة للمستخدم.",
  keywords: [
    "شركة تطوير التطبيقات",
    "تطوير تطبيقات الهاتف ",
    "تطوير تطبيقات الويب ",
    " تصميم مواقع إلكترونية ",
    "إنشاء تطبيقات الجوال",
    "برمجة المواقع",
    "حلول برمجية مخصصة",
    "تطبيقات الأعمال",
    "تطوير واجهات المستخدم ",
    "تحسين الأداء الرقمي",
    "Mobile app development",
    "Web development",
    "Website design",
    "Custom software solutions",
    "Mobile application development",
    "Business apps",
    "User interface design",
    "Web application development",
    "Digital presence",
    "Front-end development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
