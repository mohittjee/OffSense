// import React from 'react';
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// const FeaturePlan = ({ title, description, duration, percentage, color }) => (
//   <Card className={`bg-${color}-100 border-none`}>
//     <CardHeader className="pb-2">
//       <h3 className="text-sm uppercase">{title}</h3>
//       <p className="text-xs">{description}</p>
//     </CardHeader>
//     <CardContent>
//       <p className="text-xs">{duration}</p>
//       <p className="text-2xl font-bold">{percentage}</p>
//       <Button variant="ghost" className="p-0 h-auto">
//         <ArrowRight className="h-4 w-4" />
//       </Button>
//     </CardContent>
//   </Card>
// );

// const LifePlanningPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <header className="flex justify-between items-center mb-8">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold mr-2">Lyf-)</h1>
//           <span className="text-sm text-gray-500">/isurance@tiropay.au</span>
//         </div>
//         <div>
//           <Button variant="outline" className="mr-2">Log In</Button>
//           <Button>Get Started</Button>
//         </div>
//       </header>

//       <main>
//         <h1 className="text-4xl font-bold text-center mb-4">Life Planning, Making<br />Easy to Turn Dreams a Reality.</h1>
//         <p className="text-center mb-6">Get Exclusive offers on purchase of any plans</p>

//         <div className="flex justify-center mb-12">
//           <div className="relative w-full max-w-md">
//             <Input type="email" placeholder="Your Email" className="pr-24" />
//             <Button className="absolute right-0 top-0 bottom-0">Sign Up</Button>
//           </div>
//         </div>

//         <div className="mb-4 flex justify-between items-center">
//           <h2 className="text-2xl font-bold">Featured Plans</h2>
//           <Button variant="link">Explore All</Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           <FeaturePlan
//             title="Money Momentum"
//             description="Tract Premium helps you start saver investments insights covering."
//             duration="3 yrs CAGR"
//             percentage="7.20%"
//             color="green"
//           />
//           <FeaturePlan
//             title="Long-Term"
//             description="Create a vision. To get started, imagine your dream life."
//             duration="25 yrs CAGR"
//             percentage="14.20%"
//             color="gray"
//           />
//           <FeaturePlan
//             title="Focussed"
//             description="Be focused Life planning, however, can serve as a roadmap or guide."
//             duration="1 yr returns"
//             percentage="11.20%"
//             color="purple"
//           />
//           <FeaturePlan
//             title="Fixed Income"
//             description="Get multiple benefits, and lumpsum option & Guaranteed Returns"
//             duration="5 yrs CAGR"
//             percentage="8.20%"
//             color="yellow"
//           />
//         </div>
//       </main>

//       <footer className="mt-8 flex justify-between items-center">
//         <div>
//           <Button variant="link" className="p-0 mr-4">Terms Policy</Button>
//           <Button variant="link" className="p-0">Customer Story</Button>
//         </div>
//         <Button variant="ghost" className="p-0">
//           <ArrowRight className="h-6 w-6" />
//         </Button>
//       </footer>
//     </div>
//   );
// };

// export default LifePlanningPage;