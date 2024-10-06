import React from 'react'

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-white hover:text-yellow-300 transition-colors">
    {children}
  </li>
)

const Button = ({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) => (
  <button
    className={`px-6 py-2 font-bold text-lg ${
      primary
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-800 text-white border-2 border-white hover:bg-gray-700'
    } rounded-md transition-colors`}
  >
    {children}
  </button>
)

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=40&width=40" alt="Winfluence logo" className="h-10" />
            <span className="text-2xl font-bold">Winfluence</span>
          </div>
          <ul className="hidden md:flex space-x-6">
            <NavItem>Services</NavItem>
            <NavItem>Work</NavItem>
            <NavItem>Clients</NavItem>
            <NavItem>Careers</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem>FAQ</NavItem>
          </ul>
          <div className="flex space-x-4">
            <Button>Log In</Button>
            <Button primary>Sign In</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-yellow-300 text-3xl font-bold">Advertising Gen - Z Style</h2>
            <h1 className="text-6xl font-extrabold leading-tight">
              Shaping Next Gen
              <div className="bg-yellow-300 text-gray-900 inline-block transform -skew-x-12 px-4 mx-2">
                ADVERTISING
              </div>
              with
              <span className="text-blue-500"> Gen - Z </span>
              Creativity.
            </h1>
            <Button primary>Explore Now</Button>
            <p className="text-gray-400">Have any Questions?</p>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 bg-yellow-300 w-48 h-48 rounded-full -z-10 blur-2xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 bg-blue-500 w-48 h-48 rounded-full -z-10 blur-2xl opacity-50"></div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Team working"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              />
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Team meeting"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              />
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Team collaboration"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform col-span-2"
              />
            </div>
            <div className="absolute top-0 right-0 bg-blue-600 text-white p-4 rounded-full shadow-lg">
              <span className="text-3xl font-bold">200+</span>
              <br />
              Ads
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-4">
              <img src="/placeholder.svg?height=50&width=50" alt="User 1" className="w-12 h-12 rounded-full border-2 border-white" />
              <img src="/placeholder.svg?height=50&width=50" alt="User 2" className="w-12 h-12 rounded-full border-2 border-white" />
              <img src="/placeholder.svg?height=50&width=50" alt="User 3" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <div>
              <span className="text-4xl font-bold">150+</span>
              <p className="text-gray-400">Active User & Business</p>
            </div>
          </div>
          <p className="text-xl max-w-2xl">
            Explore our dynamic advertising portfolio showcasing digital transformations and measurable successes
          </p>
        </div>
      </main>
    </div>
  )
}