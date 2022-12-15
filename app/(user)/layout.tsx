import Banner from "../../components/site/Banner"
import Header from "../../components/site/Header"
import "../../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Header/>
        <div className="mt-[10px]">
          <Banner/>
          {children}
        </div>
      </body>
    </html>
  )
}
