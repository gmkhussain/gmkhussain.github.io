import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

type WebsiteContent = {
  id: number;
};

const Index = () => {

  const [data, setData] = useState<WebsiteContent | null>(null)

  useEffect(() => {
    async function getData() {
      const { data: apiData } = await supabase.from('website_content').select()
        .select("*")
        .limit(1)
        .single();

      if (apiData) {
        setData(apiData)
      }
    }

    getData()
  }, [])


  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
    <Hero data={data} />
      <TechStack />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
