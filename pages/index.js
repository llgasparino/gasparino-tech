import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    // Inicialize o mapa quando o componente for montado
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`
      script.async = true
      document.head.appendChild(script)

      window.initMap = function() {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -25.5388732, lng: -49.2618331 }, // Coordenadas da loja
          zoom: 18 // Ajuste o nível de zoom
        })

        new google.maps.Marker({
          position: { lat: -25.5388732, lng: -49.2618331 }, // Coordenadas da loja
          map: map,
          title: 'Gasparino Tech Support'
        })
      }
    }
  }, [])

  const validateUrl = (url) => {
    const allowedUrls = ['https://www.linkedin.com/in/llgasparino', 'https://web.whatsapp.com/send?phone=5541995966299&text=Oi+tudo+bem,+quero+formatar+meu']
    return allowedUrls.includes(url)
  }

  const handleLinkClick = (url) => {
    if (validateUrl(url)) {
      window.location.href = url
    } else {
      alert('URL inválida')
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gasparino Tech Support</title>
        <meta name="description" content="Montagem de computadores, formatação e suporte técnico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Gasparino Tech Support</h1>
        </div>
        <nav className={styles.nav}>
          <Link href="#services">Serviços</Link>
          <Link href="#contact">Contato</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <h2>Montagem de Computadores, Formatação e Suporte Técnico Profissional</h2>
        <p>Transforme seu computador em uma máquina poderosa com nossos serviços personalizados.</p>
        <Link href="#contact" className={styles.cta}>Solicite um Orçamento</Link>
      </section>

      <section id="services" className={styles.contact}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
      </section>

      <section id="services" className={styles.services}>
        <div className={styles.service}>
          <h3>Montagem de Computadores</h3>
          <p>Montagem personalizada para gamers, profissionais e uso doméstico, com as melhores peças do mercado.</p>
          <Image 
            src="/images/ryzen.jpg" 
            alt="Montagem de Computadores" 
            width={450} 
            height={450} 
          />
        </div>
        <div className={styles.service}>
          <h3>Formatação e Instalação</h3>
          <p>Formatação rápida e eficiente, com instalação do sistema operacional e software de sua escolha.</p>
          <Image 
            src="/images/windows.jpg" 
            alt="Formatação Windows" 
            width={450} 
            height={450} 
          />
        </div>
        <div className={styles.service}>
          <h3>Suporte Técnico</h3>
          <p>Suporte remoto ou presencial para solucionar qualquer problema de hardware ou software.</p>
          <Image 
            src="/images/supt.jpg" 
            alt="Suporte Técnico" 
            width={450} 
            height={450} 
          />
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h2 className={styles.sectionTitle}>Entre em Contato</h2>
        <p>Pronto para melhorar o desempenho do seu computador? Conecte-se comigo!</p>
        <div className={styles.contactForm}>
          <button onClick={() => handleLinkClick('https://www.linkedin.com/in/llgasparino')} className={`${styles.link} ${styles.linkLinkedIn}`}>Visite meu LinkedIn</button>
          <button onClick={() => handleLinkClick('https://web.whatsapp.com/send?phone=5541995966299&text=Oi+tudo+bem,+quero+formatar+meu')} className={`${styles.link} ${styles.linkWhatsApp}`}>Me mande um WhatsApp</button>
        </div>
        <div id="map" className={styles.map}></div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Gasparino Tech. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}