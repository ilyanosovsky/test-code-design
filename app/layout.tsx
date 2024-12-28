import './globals.css'
import { Source_Code_Pro } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Company Dashboard',
  description: 'Manage companies you are following',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={sourceCodePro.className}>
        <div className="flex min-h-screen bg-black">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}