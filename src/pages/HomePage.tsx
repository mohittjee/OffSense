import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-300 text-gray-800">
      <nav className="flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold flex justify-center items-center"
        >
          <img src='./Offsense.svg' className='h-8 w-8'/>
          ffSense
        </motion.div>
        <div className="flex space-x-4">
          {['Start', 'Portfolio', "FAQ's"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <Button variant="outline" className="bg-white text-purple-600 hover:bg-purple-100">
            Contact
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          The Web Development Agency for beautiful and perfectly optimized websites
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Revolutionize Your Online Presence with Cutting-Edge Web Design and Development Services Tailored for High-Performing Businesses
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-white text-purple-600 hover:bg-purple-100">
            Let's work together
          </Button>
        </motion.div>
      </main>

      <footer className="absolute bottom-0 w-full p-4">
        <div className="flex justify-around">
          {['Web Design', 'Web Development', 'Search Engine Optimization', 'Hosting'].map((service) => (
            <motion.div
              key={service}
              className="text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;