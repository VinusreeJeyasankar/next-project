import { Suspense } from "react"
import LoginPage from "./login/page.js";

export const metadata = {
  title: 'Next.js',
}

function HomePage() {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <div>
          <LoginPage />
      </div>
    </Suspense>
    </>
  )
}

export default HomePage;

function Loading() {
  return <h2>🌀 Loading...</h2>;
}