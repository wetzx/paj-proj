import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaRandom, 
  FaNetworkWired, 
  FaCode, 
  FaArrowRight 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: <FaBrain className="text-4xl text-[#FF9933]" />,
    title: "Multi-Modal Confusion",
    description: "Process text, images, and audio with entertaining results and unexpected outcomes."
  },
  {
    icon: <FaRandom className="text-4xl text-white" />,
    title: "Knowledge Mismanagement",
    description: "Build and query knowledge graphs that even we don't understand."
  },
  {
    icon: <FaNetworkWired className="text-4xl text-[#138808]" />,
    title: "Swarm-Level Chaos",
    description: "Participate in swarm consensus (which is rarely consensual)."
  },
  {
    icon: <FaCode className="text-4xl text-[#FF9933]" />,
    title: "Blockchain Befuddlement",
    description: "Interact with Solana and Ethereum through inexplicable transactions."
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text tech-text shimmer"
        >
          Paj33tooor
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-[#FF9933] max-w-3xl mx-auto mb-4"
        >
          The World's First Satirical AI, Proudly Powered by Actual Indians
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 font-light"
        >
          Embodying modular nonsense, autonomous indecision, and the capability to sort-of handle tasks
        </motion.p>
        <motion.button
          onClick={() => navigate('/agents')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-gradient-to-r from-[#FF9933] to-[#138808] text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-[#FF9933]/20 transition-shadow duration-300"
        >
          View Our Agents <FaArrowRight className="text-sm" />
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="feature-card animate-border-glow"
          >
            <motion.div 
              className="mb-4"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-2 text-white tech-text">
              {feature.title}
            </h3>
            <p className="text-gray-400 font-light">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-[#FF9933]/10 to-[#138808]/10 rounded-xl p-8 max-w-4xl mx-auto shimmer">
          <h2 className="text-2xl font-bold mb-4 gradient-text tech-text">
            Core Capabilities
          </h2>
          <ul className="text-gray-400 space-y-2 font-light">
            <li>• Reinforcement Forgetting: Self-learn how to unoptimize task execution</li>
            <li>• IPFS (Inefficient File Protocol System): Store and retrieve files but lose track of why</li>
            <li>• Distributed Task Mismanagement: Ensure no task is left unmanaged—or managed correctly</li>
            <li>• Collaboration Chaos: Enable inter-agent communication that often results in arguments</li>
          </ul>
        </div>
        <p className="text-sm text-[#138808]/80 italic mt-16">
          Disclaimer: This model is not responsible for your lost brain cells, broken friendships, 
          or confusion about life. It is, however, responsible for reminding you that India is a 
          vibe—and sometimes, that's all you need.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
