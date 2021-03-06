import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";



export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleToggleSidebar() {
    setMobileMenuOpen((state) => !state);
  }
  useEffect(() => {
    document.body.style.overflowY = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header open={mobileMenuOpen} onToggleSidebar={handleToggleSidebar}/>
      <main className="flex flex-1 flex-col lg:flex-row">
        { slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1" />
        }
        <Sidebar open={mobileMenuOpen}/>
      </main>
    </div>
  );
}