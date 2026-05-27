import { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Navbar from "./components/Navbar"
import CursorGlow from "./components/CursorGlow"
import ScrollToTop from "./components/ScrollToTop"
import Loader from "./components/Loader"

import Home from "./pages/Home"
import Properties from "./pages/Properties"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Evaluation from "./pages/Evaluation"
import PropertyDetails from "./pages/PropertyDetails"
import Saved from "./pages/Saved"

export default function App() {
  const location = useLocation()

  // 🔥 loaders
  const [firstLoad, setFirstLoad] = useState(true)
  const [routeLoad, setRouteLoad] = useState(false)

  // =========================
  // FIRST LOAD LOADER
  // =========================
  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstLoad(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // =========================
  // ROUTE CHANGE LOADER
  // =========================
  useEffect(() => {
    if (firstLoad) return

    setRouteLoad(true)

    const timer = setTimeout(() => {
      setRouteLoad(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {/* GLOBAL LOADER (FIRST + ROUTE) */}
      <Loader visible={firstLoad || routeLoad} />

      <div className="bg-[#0f0f0f] text-white min-h-screen overflow-hidden relative">

        <CursorGlow />
        <ScrollToTop />
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />

            <Route
              path="/properties"
              element={
                <PageTransition>
                  <Properties />
                </PageTransition>
              }
            />

            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />

            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />

            <Route
              path="/evaluation"
              element={
                <PageTransition>
                  <Evaluation />
                </PageTransition>
              }
            />

<Route
  path="/properties/:id"
  element={
    <PageTransition>
      <PropertyDetails />
    </PageTransition>
  }
/>

<Route path="/saved" element={<Saved />} />

          </Routes>
        </AnimatePresence>

      </div>
    </>
  )
}

/* Page animation wrapper */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}