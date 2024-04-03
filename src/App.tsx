import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Announcements } from '~/pages/Announcements'
import { Blog } from '~/pages/Blog'
import { ErrorPage } from '~/pages/ErrorPage'
import { Landing } from '~/pages/Landing'
import { RequestDemo } from '~/pages/RequestDemo'
import { RequestQuote } from '~/pages/RequestQuote'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/request-a-quote" element={<RequestQuote />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
