import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
// import { Badge } from '@/components/ui/badge';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

const LandingPage = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-black text-gray-600">
      <nav className="flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold flex justify-center items-center"
        >
          <img src='./logo2.svg' className='h-8 w-8' />
          ffSense
        </motion.div>
        <div className="flex space-x-4">
          {/* {[
            { icon: 'bi-twitter-x', href: 'https://twitter.com', label: 'Twitter' },
            { icon: 'bi-github', href: 'https://github.com', label: 'GitHub' },
            { icon: 'bi-linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.label}
            >
              <i className={`${item.icon} text-2xl`}></i>
            </motion.a>
          ))} */}
          <Button variant="outline" className="bg-white text-purple-600 hover:bg-purple-100">
            Let&apos;s Get In
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-7 text-center">
        {/* <div className='flex justify-center items-center mb-4'>
          <div className="bg-slate-800 p-4 flex items-center space-x-2 rounded-full max-w-fit">
            <Badge variant="secondary" className="bg-white text-black font-semibold px-2 py-0.5 text-xs rounded-full">
              New
            </Badge>
            <span className="text-white text-sm font-medium">We just released</span>
          </div>
        </div> */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold mb-6 bg-custom-gradient1 bg-clip-text text-transparent"
        >
          <span className='text-5xl'>DISCOVER</span>
          <div className="h-[10rem] flex items-center justify-center">
            <TextHoverEffect text="THE ART" />
          </div>
          <span className='text-5xl'>OF WEB DEVELOPMENT</span>
          <span className='text-green-400'> WITH US</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Explore curated UI/UX inspiration, tools, and libraries at your fingertips.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-white text-purple-600 hover:bg-purple-100">
            Explore now!
          </Button>
        </motion.div>
      </main>

      <footer className="border-t border-slate-700 bottom-0 absolute w-full">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Offsense. All rights reserved.
          </div>
          <div className="flex space-x-4 items-center">
            <span className='text-muted-foreground font-semibold text-lg'>Find me elsewhere in the internet:</span>
            {[
              { icon: 'bi-twitter-x', href: 'https://x.com/OffSenseTweets', label: 'Twitter' },
              { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/offsense/', label: 'LinkedIn' },
              { icon: 'bi-github', href: 'https://github.com/mohittjee/OffSense', label: 'GitHub' },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={item.label}
              >
                <i className={`${item.icon} text-xl hover:text-white`}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;