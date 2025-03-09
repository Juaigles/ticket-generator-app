import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TicketPage from "./pages/TicketPage"
import Layout from "./pages/Layout"
import FormPage from "./pages/PageForm"


function App() {

  return (
    <Layout>

      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>

      </Router>
    </Layout>
  )
}

export default App
