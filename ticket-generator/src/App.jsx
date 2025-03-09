import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FormPage from "./pages/formPage"
import TicketPage from "./pages/ticketPage"
import Layout from "./pages/Layout"


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
