import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Get in touch</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="font-bold">Let's work</span>
            <br />
            <span className="text-gradient italic font2">together</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            Have a project in mind? Looking for a frontend expert? 
            Let's build something amazing together.
          </p>

          <motion.a
            href="mailto:gmk.hussain+website@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all hover:glow-strong"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 GMK Hussain</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">YouTube</a>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
