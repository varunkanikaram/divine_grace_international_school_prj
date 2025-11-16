import './App.css'
import { useEffect, useState } from 'react'

// Helper function to get image with fallback
function getImage(src, alt = '', fit = 'cover') {
  return <img src={src} alt={alt} style={{width: '100%', height: '100%', objectFit: fit}} onError={(e) => {
    e.target.style.display = 'none'
    e.target.nextSibling.style.display = 'flex'
  }} />
}

function EnquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#fff',
          borderRadius: 12,
          padding: 24,
          maxWidth: 800,
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 50, height: 50, background: '#ffffff', borderRadius: 6, position: 'relative', overflow: 'hidden', padding: 4}}>
              {getImage('/photos/logo/logosymbol.jpg', 'School Logo', 'contain')}
              <div style={{display: 'none', width: '100%', height: '100%', background: 'var(--color-primary)', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10}}>DGIS</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h2 style={{margin: 0, color: '#002c5f', fontSize: 20}}>Divine Grace International School</h2>
              <span style={{fontSize: 12, color: '#666'}}>Nurturing Excellence, Inspiring Character</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 24,
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ×
          </button>
        </div>
        
        <p style={{color: '#666', marginBottom: 20}}>Registrations open for the academic year 2026 - 2027</p>
        
        <form style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
      <div>
            <label style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Student Name</label>
            <input 
              type="text" 
              placeholder="Please enter details"
              style={{width: '100%', padding: 12, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 14}}
            />
          </div>
          
          <div>
            <label style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Parent Name</label>
            <input 
              type="text" 
              placeholder="Please enter details"
              style={{width: '100%', padding: 12, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 14}}
            />
          </div>
          
          <div>
            <label style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Phone Number</label>
            <div style={{display: 'flex'}}>
              <div style={{padding: 12, background: '#f3f4f6', border: '1px solid #d1d5db', borderRight: 'none', borderRadius: '6px 0 0 6px', fontSize: 14}}>+91</div>
              <input 
                type="tel" 
                style={{flex: 1, padding: 12, borderRadius: '0 6px 6px 0', border: '1px solid #d1d5db', fontSize: 14}}
              />
            </div>
          </div>
          
          <div>
            <label style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Email</label>
            <input 
              type="email" 
              placeholder="Please enter details"
              style={{width: '100%', padding: 12, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 14}}
            />
          </div>
          
          <div>
            <label style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Admission Type</label>
            <select style={{width: '100%', padding: 12, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 14}}>
              <option>Select</option>
              <option>New Admission</option>
              <option>Transfer</option>
            </select>
          </div>
          
          <div>
            <label style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Admission for (Grade)</label>
            <select style={{width: '100%', padding: 12, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 14}}>
              <option>Select</option>
              <option>Pre-Primary</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
            </select>
          </div>
          
          <div>
            <label style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Locality</label>
            <input 
              type="text" 
              placeholder="Please enter details"
              style={{width: '100%', padding: 12, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 14}}
            />
          </div>
          
          <div style={{gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginTop: 8}}>
            <button 
              type="submit"
              className="btn" 
              style={{background: '#002c5f', color: '#fff', padding: 12, fontSize: 16, minWidth: 120}}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Navbar() {
  const menu = ['About Us','Academics','Co-curricular','Facilities','Admissions','Contact Us']
  const [showModal, setShowModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = menu.map(m => m.toLowerCase().replace(/\s+/g,'-'))
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fade-in" style={{
        background: 'var(--gradient-navbar)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(229,231,235,0.3)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 40,
        boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
      }}>
        <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80, maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 16, flex: '1'}}>
            <div className="float" style={{
              width: 64, 
              height: 64, 
              background: 'var(--gradient-card)', 
              borderRadius: 16, 
              position: 'relative', 
              overflow: 'hidden', 
              padding: 8,
              boxShadow: 'var(--shadow-soft)',
              border: '2px solid rgba(0,44,95,0.1)',
              flexShrink: 0
            }}>
              {getImage('/photos/logo/logosymbol.jpg', 'School Logo', 'contain')}
              <div style={{display: 'none', width: '100%', height: '100%', background: 'var(--color-primary)', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12}}>DGIS</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', minWidth: 0}}>
              <strong style={{fontSize: 18, color: 'var(--color-blue)', fontWeight: 700, lineHeight: 1.2, margin: 0}}>Divine Grace International School</strong>
              <span style={{fontSize: 12, color: 'var(--color-muted)', fontWeight: 500, lineHeight: 1.2, margin: 0}}>Nurturing Excellence, Inspiring Character</span>
            </div>
          </div>
          <nav aria-label="Primary" style={{display: 'flex', gap: 8, alignItems: 'center'}} className="desktop-nav">
            {menu.map((m, index) => {
              const sectionId = m.toLowerCase().replace(/\s+/g,'-')
              const isActive = activeSection === sectionId
              return (
              <a 
                key={m} 
                href={`#${sectionId}`} 
                className="slide-up"
                style={{
                  color: isActive ? 'var(--color-blue)' : '#374151', 
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 100}ms`,
                  background: isActive ? 'rgba(0,44,95,0.1)' : 'transparent',
                  borderBottom: isActive ? '2px solid var(--color-blue)' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  fontSize: '14px'
                }}
                onClick={(e) => {
                  e.preventDefault()
                  const targetId = m.toLowerCase().replace(/\s+/g,'-')
                  const targetElement = document.getElementById(targetId)
                  if (targetElement) {
                    const navbarHeight = 80 // Height of the fixed navbar
                    const elementPosition = targetElement.offsetTop - navbarHeight
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    })
                  }
                  setIsMobileMenuOpen(false)
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                  e.target.style.background = 'rgba(0,44,95,0.1)'
                  e.target.style.color = 'var(--color-blue)'
                  e.target.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#374151'
                  e.target.style.transform = 'translateY(0)'
                  }
                }}
              >
                {m}
              </a>
              )
            })}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: 24,
              cursor: 'pointer',
              color: 'var(--color-blue)',
              padding: 8
            }}
            className="mobile-menu-btn"
          >
            ☰
          </button>
          <button 
            onClick={() => setShowModal(true)}
            className="btn bounce-in desktop-apply-btn"
            style={{border: 'none', cursor: 'pointer', flexShrink: 0, marginLeft: '16px'}}
          >
            Apply Now
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--gradient-navbar)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '20px 0'
          }}>
            <div className="container">
              {menu.map((m, index) => {
                const sectionId = m.toLowerCase().replace(/\s+/g,'-')
                const isActive = activeSection === sectionId
                return (
                <a 
                  key={m} 
                  href={`#${sectionId}`} 
                  style={{
                    display: 'block',
                    color: isActive ? 'var(--color-blue)' : '#374151', 
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    transition: 'all 300ms ease',
                    background: isActive ? 'rgba(0,44,95,0.1)' : 'transparent',
                    paddingLeft: isActive ? '16px' : '0',
                    borderLeft: isActive ? '4px solid var(--color-blue)' : '4px solid transparent'
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    const targetId = m.toLowerCase().replace(/\s+/g,'-')
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      const navbarHeight = 80
                      const elementPosition = targetElement.offsetTop - navbarHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {m}
                </a>
                )
              })}
              <button 
                onClick={() => {
                  setShowModal(true)
                  setIsMobileMenuOpen(false)
                }}
                className="btn"
                style={{
                  width: '100%',
                  marginTop: 16,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </header>
      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

function Hero() {
  const slides = [
    '/photos/herosection/bus1.jpg',
    '/photos/herosection/hero%20image%20.jpg',
    '/photos/herosection/building.jpg',
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const goNext = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <section style={{padding: 0, margin: 0}}>
      <div style={{width: '100%', height: 'calc(100vh - 80px)', minHeight: '500px', maxHeight: '800px', position: 'relative', overflow: 'hidden'}}>
          {slides.map((src, i) => (
            <div key={src} style={{position: 'absolute', inset: 0, transition: 'opacity 600ms ease', opacity: i === index ? 1 : 0}}>
              {getImage(src, 'Hero slide', 'cover')}
              <div style={{display: 'none', width: '100%', height: '100%', background: '#e5e7eb'}} />
            </div>
          ))}
          <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
            <div style={{paddingLeft: 32, paddingRight: 32, paddingTop: 80, paddingBottom: 40, width: '100%', maxWidth: '1200px', margin: '0 auto'}} className="hero-content">
              <div style={{maxWidth: 700, color: '#ffffff', textAlign: 'left'}}>
                <h1 className="slide-up" style={{margin: 0, fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.2, fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>Give Your Child the Gift of Excellence</h1>
                <p className="slide-up" style={{marginTop: 16, marginBottom: 24, color: 'rgba(255,255,255,0.95)', fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.2)', animationDelay: '200ms'}}>Join 500+ Happy Families at Divine Grace International School. Where every child discovers their potential, builds character, and prepares for a bright future.</p>
                
                </div>
            </div>
          </div>
          {/* Bottom-right info container (CTAs + Stats) */}
          <div style={{
            position: 'absolute',
            right: 24,
            bottom: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'flex-end',
            maxWidth: 'min(520px, 90vw)'
          }}>
            <div className="slide-up" style={{display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end', animationDelay: '200ms'}}>
              <a href="#admissions" className="btn" style={{background: 'var(--gradient-primary)', fontSize: 'clamp(12px, 2vw, 14px)', padding: '10px 16px'}}>Secure Your Child's Future - Apply Now</a>
              <a href="#admissions" className="btn" style={{background: 'rgba(255,255,255,0.95)', color: 'var(--color-blue)', fontSize: 'clamp(12px, 2vw, 14px)', padding: '10px 16px'}}>Schedule a Campus Visit</a>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12, background: 'rgba(0,0,0,0.25)', padding: 12, borderRadius: 12}}>
                  {[
                    {label: 'Happy Families', value: '500+'},
                    {label: 'Success Rate', value: '95%'},
                    {label: 'NEP-Aligned Education', value: 'NEP'},
                    {label: 'Safe & Secure Campus', value: 'Shield'},
                  ].map((item, index) => (
                    <div key={item.label} className="bounce-in" style={{
                      background: 'rgba(255,255,255,0.15)', 
                  borderRadius: 10,
                  padding: 12,
                      textAlign: 'center', 
                      border: '1px solid rgba(255,255,255,0.2)',
                  animationDelay: `${300 + index * 80}ms`
                }}>
                  <div style={{fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 2}}>{item.value}</div>
                  <div style={{color: 'rgba(255,255,255,0.9)', fontSize: 11, fontWeight: 600}}>{item.label}</div>
                    </div>
                  ))}
            </div>
          </div>
          <button onClick={goPrev} aria-label="Previous slide" style={{position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: 9999, width: 36, height: 36, cursor: 'pointer'}}>
            ‹
        </button>
          <button onClick={goNext} aria-label="Next slide" style={{position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: 9999, width: 36, height: 36, cursor: 'pointer'}}>
            ›
          </button>
          <div style={{position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6}}>
            {slides.map((_, i) => (
              <div key={i} onClick={() => setIndex(i)} style={{width: 8, height: 8, borderRadius: '50%', background: i === index ? '#ffffff' : 'rgba(255,255,255,0.5)', cursor: 'pointer'}} />
            ))}
          </div>
        </div>
    </section>
  )
}

function WhyDGIS() {
  const items = [
    {title: 'Quality Education', desc: 'NEP 2020-aligned curriculum from Pre-Primary to Class 10', icon: '🎓'},
    {title: 'Value-Based Learning', desc: 'Rooted in respect, discipline, and tradition', icon: '💎'},
    {title: 'Holistic Development', desc: 'Sports, arts, leadership, and community service', icon: '🌟'},
    {title: 'Safe & Modern Campus', desc: 'CCTV, smart classrooms, and well-equipped labs', icon: '🛡️'},
  ]
  useEffect(() => {
    const grid = document.getElementById('why-dgis-grid')
    if (!grid) return
    const cards = Array.from(grid.querySelectorAll('.reveal-up'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { threshold: 0.15 })
    cards.forEach((el, idx) => {
      // slight stagger via transition delay
      el.style.transitionDelay = `${idx * 120}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return (
    <section id="why-dgis" className="section" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="slide-up" style={{marginTop: 0, color: 'var(--color-blue)'}}>Why Choose DGIS</h2>
          <p className="slide-up" style={{color: 'var(--color-muted)', fontSize: 18, maxWidth: 600, margin: '0 auto', animationDelay: '200ms'}}>Discover what makes Divine Grace International School the perfect choice for your child's education</p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24}} className="section-grid-4" id="why-dgis-grid">
          {items.map((i, index) => (
            <div key={i.title} className="card reveal-up" style={{textAlign: 'center'}} data-reveal-index={index}>
              <div style={{
                width: 70, 
                height: 70, 
                background: 'var(--gradient-primary)', 
                borderRadius: '50%', 
                margin: '0 auto 20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#fff', 
                fontSize: 28,
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1) rotate(5deg)'
                e.target.style.boxShadow = 'var(--shadow-glow)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)'
                e.target.style.boxShadow = 'var(--shadow-soft)'
              }}
              >
                {i.icon}
              </div>
              <h3 style={{margin: '0 0 12px 0', color: 'var(--color-blue)', fontSize: 18}}>{i.title}</h3>
              <p style={{marginBottom: 0, color: 'var(--color-muted)', lineHeight: 1.6}}>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoryVisionMission() {
  useEffect(() => {
    const section = document.querySelector('#about-us .story-vision-mission')
    if (!section) return
    const targets = section.querySelectorAll('.reveal-left, .reveal-right')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { threshold: 0.2 })
    targets.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 120}ms`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return (
    <section id="about-us" className="section" style={{background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)', position: 'relative', color: '#fff'}}>
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', minHeight: '600px'}} className="story-vision-mission">
          {/* Left Side - Story */}
          <div className="reveal-left">
            <div style={{position: 'relative'}} className="story-section">
              <h2 style={{color: '#fff', marginBottom: 32, fontSize: 40, fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.3)', lineHeight: 1.2}}>
                Our Story
              </h2>
              <div style={{
                position: 'absolute',
                top: -10,
                left: -20,
                width: 100,
                height: 100,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                zIndex: -1
              }} />
              <p style={{color: 'rgba(255,255,255,0.9)', fontSize: 18, lineHeight: 1.8, marginBottom: 40}}>
                Founded with a vision to create a school that feels like a second home, DGIS is dedicated to delivering quality education rooted in discipline, creativity, and care.
              </p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 1.7, margin: 0}}>
                Located in Cheeryala, Hyderabad, our campus provides a safe, welcoming space for every child to discover their potential and grow into confident, responsible individuals.
        </p>
      </div>
          </div>

          {/* Right Side - Vision & Mission */}
          <div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 40}} className="vision-mission-grid">
              {/* Vision */}
              <div className="reveal-right">
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(15px)',
                  padding: 30,
                  borderRadius: 20,
                  border: '2px solid rgba(255,255,255,0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="vision-card">
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 80,
                    height: 80,
                    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.3) 0%, rgba(155, 89, 182, 0.3) 100%)',
                    borderRadius: '0 20px 0 100%',
                    zIndex: 0
                  }} />
                  <div style={{position: 'relative', zIndex: 1}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
                      <div style={{
                        width: 60,
                        height: 60,
                        background: 'linear-gradient(135deg, #3498db 0%, #9b59b6 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 20,
                        boxShadow: '0 8px 25px rgba(52, 152, 219, 0.3)'
                      }}>
                        <span style={{fontSize: 28, color: '#fff'}}>👁️</span>
                      </div>
                      <h3 style={{color: '#fff', margin: 0, fontSize: 24, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>Vision</h3>
                    </div>
                    <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, fontSize: 16, margin: 0}}>
                      To empower students to excel academically, grow in character, and serve society with integrity and compassion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="reveal-right">
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(15px)',
                  padding: 30,
                  borderRadius: 20,
                  border: '2px solid rgba(255,255,255,0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="mission-card">
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 80,
                    height: 80,
                    background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.3) 0%, rgba(230, 126, 34, 0.3) 100%)',
                    borderRadius: '20px 0 100% 0',
                    zIndex: 0
                  }} />
                  <div style={{position: 'relative', zIndex: 1}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
                      <div style={{
                        width: 60,
                        height: 60,
                        background: 'linear-gradient(135deg, #e74c3c 0%, #e67e22 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 20,
                        boxShadow: '0 8px 25px rgba(231, 76, 60, 0.3)'
                      }}>
                        <span style={{fontSize: 28, color: '#fff'}}>🎯</span>
                      </div>
                      <h3 style={{color: '#fff', margin: 0, fontSize: 24, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>Mission</h3>
                    </div>
                    <ul style={{color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, paddingLeft: 0, margin: 0, listStyle: 'none'}}>
                      {[
                        'Deliver engaging, skill-based learning',
                        'Uphold moral values and respect for traditions',
                        'Encourage creativity, leadership, and teamwork',
                        'Provide a supportive environment for every learner'
                      ].map((item, index) => (
                        <li key={index} style={{display: 'flex', alignItems: 'flex-start', marginBottom: 16, fontSize: 15}}>
                          <div style={{
                            width: 8,
                            height: 8,
                            background: 'linear-gradient(135deg, #e74c3c 0%, #e67e22 100%)',
                            borderRadius: '50%',
                            marginRight: 16,
                            marginTop: 8,
                            flexShrink: 0,
                            boxShadow: '0 2px 8px rgba(231, 76, 60, 0.4)'
                          }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Academics() {
  const stages = [
    {title: 'Pre-Primary', subtitle: 'Nursery, LKG, UKG', desc: 'Play-based and activity-driven learning approach', icon: '🎨', color: '#FF6B6B'},
    {title: 'Primary School', subtitle: 'Classes 1–5', desc: 'Strong foundations in language, math, and science', icon: '📚', color: '#4ECDC4'},
    {title: 'Middle School', subtitle: 'Classes 6–8', desc: 'Developing critical thinking and communication skills', icon: '🔬', color: '#45B7D1'},
    {title: 'Secondary School', subtitle: 'Classes 9–10', desc: 'Preparing for board examinations and future pathways', icon: '🎯', color: '#96CEB4'},
  ]
  const methods = [
    {title: 'Interactive Smart Classes', desc: 'Technology-enhanced learning with smart boards and digital content', icon: '💻'},
    {title: 'Project-Based Learning', desc: 'Hands-on projects that develop practical skills and creativity', icon: '📋'},
    {title: 'Science Experiments', desc: 'Practical experiments to understand scientific concepts', icon: '🧪'},
    {title: 'Creative Arts Integration', desc: 'Arts and crafts integrated into core subjects for holistic learning', icon: '🎭'},
  ]
  useEffect(() => {
    const timeline = document.getElementById('academics-timeline')
    if (!timeline) return
    const line = timeline.querySelector('.timeline-line')
    const items = timeline.querySelectorAll('.reveal-from-center-left, .reveal-from-center-right')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === line) {
          if (entry.isIntersecting) line.classList.add('in-view'); else line.classList.remove('in-view')
        } else {
          if (entry.isIntersecting) entry.target.classList.add('in-view'); else entry.target.classList.remove('in-view')
        }
      })
    }, { threshold: 0.15 })
    if (line) io.observe(line)
    items.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 120}ms`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return (
    <section id="academics" className="section" style={{background: '#ffffff', position: 'relative', color: '#000'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 80}}>
          <h2 className="slide-up" style={{color: '#002c5f', marginBottom: 24, fontSize: 36, fontWeight: 800}}>
            Academics
          </h2>
          <p className="slide-up" style={{color: '#6b7280', fontSize: 18, lineHeight: 1.7, maxWidth: 900, margin: '0 auto', animationDelay: '200ms'}}>NEP 2020-aligned curriculum balancing core subjects, skills, and life lessons.</p>
        </div>
        
        <div style={{marginBottom: 80}} className="academics-grid">
          <h3 className="slide-up" style={{textAlign: 'center', color: '#002c5f', fontSize: 28, fontWeight: 700, marginBottom: 60}}>Academic Journey</h3>
          <div style={{position: 'relative'}} id="academics-timeline">
            <div className="timeline-line" style={{position: 'absolute', left: '50%', top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #002c5f 0%, #6b7280 100%)', transform: 'translateX(-50%)', zIndex: 1}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
              {stages.map((s, index) => (
                <div key={s.title} className="timeline-item" style={{display: 'flex', alignItems: 'center', gap: 40, flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
                  <div style={{flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left'}} className={index % 2 === 0 ? 'reveal-from-center-left timeline-content' : 'reveal-from-center-right timeline-content'}>
                    <div style={{background: '#f8fafc', padding: 24, borderRadius: 16, border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
                      <h4 style={{margin: '0 0 8px 0', color: '#002c5f', fontSize: 20, fontWeight: 700}}>{s.title}</h4>
                      <p style={{margin: '0 0 12px 0', color: '#6b7280', fontSize: 14, fontWeight: 500}}>{s.subtitle}</p>
                      <p style={{margin: 0, color: '#374151', lineHeight: 1.6, fontSize: 15}}>{s.desc}</p>
                    </div>
                  </div>
                  <div style={{width: 80, height: 80, background: s.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 25px rgba(0,0,0,0.2)', flexShrink: 0, position: 'relative', zIndex: 2}}>
                    <span style={{fontSize: 32, color: '#fff'}}>{s.icon}</span>
                  </div>
                  <div style={{flex: 1}} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="slide-up" style={{textAlign: 'center', color: '#002c5f', fontSize: 28, fontWeight: 700, marginBottom: 50}}>Teaching Excellence</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30}} className="teaching-methods-grid">
            {methods.map((m, index) => (
              <div key={m.title} className="bounce-in teaching-method-card" style={{background: '#f8fafc', padding: 30, borderRadius: 20, border: '1px solid #e2e8f0', textAlign: 'center', animationDelay: `${800 + index * 150}ms`, boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
                <div style={{width: 70, height: 70, background: '#002c5f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto'}}>
                  <span style={{fontSize: 28, color: '#fff'}}>{m.icon}</span>
                </div>
                <h4 style={{margin: '0 0 16px 0', color: '#002c5f', fontSize: 18, fontWeight: 700}}>{m.title}</h4>
                <p style={{color: '#6b7280', lineHeight: 1.6, margin: 0, fontSize: 15}}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CoCurricular() {
  const items = [
    {title: 'Sports & Fitness', desc: 'Team sports, athletics, yoga, indoor games, annual sports day', icon: '⚽', color: '#FF6B6B', bgColor: 'rgba(255, 107, 107, 0.1)'},
    {title: 'Cultural Activities', desc: 'Dance, music, drama, art exhibitions, cultural festivals', icon: '🎭', color: '#4ECDC4', bgColor: 'rgba(78, 205, 196, 0.1)'},
    {title: 'Clubs & Competitions', desc: 'Science club, debates, quizzes, creative writing, logic puzzles', icon: '🏆', color: '#45B7D1', bgColor: 'rgba(69, 183, 209, 0.1)'},
    {title: 'Community Engagement', desc: 'Charity, eco-initiatives, celebrations, outreach, conservation', icon: '🤝', color: '#96CEB4', bgColor: 'rgba(150, 206, 180, 0.1)'},
  ]

  useEffect(() => {
    const section = document.getElementById('co-curricular-bubbles')
    if (!section) return
    const bubbles = section.querySelectorAll('.co-curricular-bubble')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { threshold: 0.2 })
    bubbles.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 100}ms`
      el.style.animationDelay = `${idx * 0.5}s`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <section id="co-curricular" className="section" style={{background: 'linear-gradient(135deg, rgb(44, 62, 80) 0%, rgb(52, 152, 219) 100%)', position: 'relative', color: '#fff'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <h2 className="slide-up" style={{color: '#fff', marginBottom: 16, fontSize: 36, fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
            Learning Beyond the Classroom
          </h2>
          <p className="slide-up" style={{color: 'rgba(255,255,255,0.9)', fontSize: 18, lineHeight: 1.7, maxWidth: 900, margin: '0 auto', animationDelay: '200ms'}}>Discover the diverse range of activities that help students develop their talents, build character, and create lasting memories.</p>
        </div>
        
        {/* Center message and surrounding bubbles */}
        <div id="co-curricular-bubbles" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px', maxHeight: '500px'}}>
          {/* Center message */}
                <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            padding: '20px 30px',
            borderRadius: 30,
            border: '2px solid rgba(255,255,255,0.3)',
            textAlign: 'center'
          }}>
            <span style={{color: '#fff', fontSize: 14, fontWeight: 600}}>🌟 Holistic Development for Every Student 🌟</span>
          </div>

          {/* Surrounding bubbles in four corners */}
          {items.map((item, index) => {
            const positions = [
              {top: '5%', left: '5%'}, // Top-left
              {top: '5%', right: '5%'}, // Top-right
              {bottom: '5%', left: '5%'}, // Bottom-left
              {bottom: '5%', right: '5%'} // Bottom-right
            ]
            const pos = positions[index]
            
            return (
              <div key={item.title} className="co-curricular-bubble" style={{
                position: 'absolute',
                ...pos,
                zIndex: 1,
                width: 160,
                height: 160,
                  background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
                  borderRadius: '50%',
                  display: 'flex',
                flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                padding: 16,
                textAlign: 'center',
                  boxShadow: `0 12px 24px ${item.color}40`,
                border: '2px solid rgba(255,255,255,0.3)'
                }}>
                  <div style={{
                  width: 24,
                  height: 24,
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    color: item.color,
                  fontWeight: 'bold',
                  marginBottom: 12
                  }}>
                    {index + 1}
                  </div>
                <h3 style={{margin: '0 0 12px 0', color: '#fff', fontSize: 14, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>{item.title}</h3>
                <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, margin: 0, fontSize: 11}}>{item.desc}</p>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Facilities() {
  const items = [
    {title: 'Smart Classrooms', desc: 'Interactive smart boards, projectors, digital tools'},
    {title: 'Science & Computer Labs', desc: 'Well-equipped Physics, Chemistry, Biology, and CS labs'},
    {title: 'Library', desc: 'Extensive books and digital resources for all age groups'},
    {title: 'Playground & Indoor Games', desc: 'Spacious outdoor and indoor game areas'},
    {title: 'Safe School Transport', desc: 'Well-maintained buses, trained drivers and conductors'},
    {title: 'CCTV & First Aid', desc: 'Comprehensive surveillance and on-campus first aid'},
  ]

  useEffect(() => {
    const section = document.getElementById('facilities-grid')
    if (!section) return
    const cards = section.querySelectorAll('.facilities-card')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          // Start continuous bulge animation after initial reveal
          setTimeout(() => {
            entry.target.classList.add('bulge-animation')
          }, 1000)
        } else {
          entry.target.classList.remove('in-view', 'bulge-animation')
        }
      })
    }, { threshold: 0.2 })
    cards.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 150}ms`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <section id="facilities" className="section" style={{background: '#f9fafb'}}>
      <div className="container">
        <h2 style={{marginTop: 0}}>School Facilities</h2>
        <div id="facilities-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24}} className="section-grid-3">
          {items.map((i, index) => (
            <div key={i.title} className={`facilities-card bulge-${index + 1}`} style={{overflow: 'hidden'}}>
              <div style={{height: 160, background: '#e5e7eb', position: 'relative', overflow: 'hidden', borderRadius: '12px 12px 0 0'}}>
                {getImage(`/photos/${i.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}.jpg`, i.title)}
                <div style={{display: 'none', width: '100%', height: '100%', background: '#e5e7eb', alignItems: 'center', justifyContent: 'center', color: '#6b7280'}}>{i.title}</div>
              </div>
              <div style={{padding: 20}}>
                <h3 style={{margin: '0 0 8px 0', color: 'var(--color-blue)', fontSize: 18}}>{i.title}</h3>
                <p style={{marginBottom: 0, color: 'var(--color-muted)', lineHeight: 1.6}}>{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const items = [
    'School Building','School Logo','Smart Classroom','Computer Lab','Annual Day','Independence Day','Cultural Festival','Sports Day','Yoga Session','Art Workshop'
  ]
  
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const getGalleryImage = (name) => {
    if (name === 'School Building') {
      return '/photos/schoolbuilding/building.jpg'
    }
    if (name === 'School Logo') {
      return '/photos/schoollogo/horizon logo.jpg'
    }
    return `/photos/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`
  }
  
  const openModal = (index) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }
  
  const closeModal = () => setModalOpen(false)
  
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % items.length)

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 style={{marginTop: 0}}>Photo Gallery</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 16}} className="section-grid-6">
          {items.map((name, index) => (
            <div 
              key={name} 
              onClick={() => openModal(index)}
              className="bounce-in"
              style={{
                height: 120, 
                background: '#e5e7eb', 
                borderRadius: 16, 
                position: 'relative', 
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: 'var(--shadow-soft)',
                animationDelay: `${index * 50}ms`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05) translateY(-4px)'
                e.target.style.boxShadow = 'var(--shadow-medium)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) translateY(0)'
                e.target.style.boxShadow = 'var(--shadow-soft)'
              }}
            >
              {getImage(getGalleryImage(name), name)}
              <div style={{display: 'none', width: '100%', height: '100%', background: '#e5e7eb', alignItems: 'center', justifyContent: 'center', color: '#374151', fontSize: 12, textAlign: 'center', padding: 4}}>{name}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {modalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              background: '#fff',
              borderRadius: 8,
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={getGalleryImage(items[currentIndex])} 
              alt={items[currentIndex]}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div style={{display: 'none', width: '100%', height: '200px', background: '#e5e7eb', alignItems: 'center', justifyContent: 'center', color: '#374151'}}>
              {items[currentIndex]}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={goToPrev}
              style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 48,
                height: 48,
                cursor: 'pointer',
                fontSize: 20
              }}
            >
              ‹
            </button>
            <button 
              onClick={goToNext}
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 48,
                height: 48,
                cursor: 'pointer',
                fontSize: 20
              }}
            >
              ›
            </button>
            
            {/* Close button */}
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                cursor: 'pointer',
                fontSize: 18
              }}
            >
              ×
        </button>
            
            {/* Image title */}
            <div style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              right: 16,
              background: 'rgba(0,0,0,0.7)',
              color: '#fff',
              padding: 12,
              borderRadius: 6,
              textAlign: 'center'
            }}>
              {items[currentIndex]}
            </div>
            
            {/* Pagination dots */}
            <div style={{
              position: 'absolute',
              bottom: 60,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 8
            }}>
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function ChairmanMessage() {
  return (
    <section id="chairman" className="section" style={{background: '#f9fafb'}}>
      <div className="container chairman-section" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16}}>
        <div style={{width: 120, height: 120, background: '#e5e7eb', borderRadius: '50%', position: 'relative', overflow: 'hidden'}} className="chairman-photo">
          {getImage('/photos/chairman/chairman.jpg', 'Chairman')}
          <div style={{display: 'none', width: '100%', height: '100%', background: '#e5e7eb', alignItems: 'center', justifyContent: 'center', color: '#6b7280'}}>Chairman</div>
        </div>
        <div>
      
          <strong>Dr . CH. Balaraju</strong>
          <div style={{color: 'var(--color-muted)', marginBottom: 4}}> M.B.A, Ph D</div>
          <div style={{color: 'var(--color-blue)', fontWeight: 600, marginBottom: 8}}>Chairman</div>
          <p style={{color: 'var(--color-muted)'}}>
            "Welcome to Divine Grace International School. Our commitment is to provide excellence in education while fostering character development and leadership skills in every student."
          </p>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container" style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24, alignItems: 'center'}}>
        <div style={{background: '#f3f4f6', borderRadius: 8, padding: 16}}>
          <strong>What Parents Say About Us</strong>
          <p style={{marginBottom: 8, color: 'var(--color-muted)'}}>"As a working parent, I was worried about my child's care. But Divine Grace provides such a safe and supportive environment. Vikram has become more independent and responsible."</p>
          <div style={{display: 'flex', gap: 8, color: 'var(--color-muted)'}}>Sunita Reddy · Kukatpally · ⭐⭐⭐⭐⭐</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <div style={{fontSize: 28, fontWeight: 700}}>4.9/5</div>
          <div style={{color: 'var(--color-muted)'}}>Average Rating</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <div style={{fontSize: 18, fontWeight: 700}}>95%</div>
          <div style={{color: 'var(--color-muted)'}}>Recommend Us</div>
        </div>
      </div>
    </section>
  )
}

function Admissions() {
  const steps = [
    {title: 'Collect Application Form', desc: 'From the school office or download online', icon: '📝'},
    {title: 'Submit Documents', desc: 'With all required documents', icon: '📄'},
    {title: 'Attend Interaction', desc: 'Entrance test (if applicable)', icon: '🎯'},
    {title: 'Confirm Admission', desc: 'Complete with fee payment', icon: '✅'},
  ]
  const documents = [
    {title: 'Birth Certificate', icon: '📋'},
    {title: 'Previous school report card', icon: '📊'},
    {title: 'Passport-size photographs', icon: '📸'},
    {title: 'Address proof', icon: '🏠'},
  ]
  const [showModal, setShowModal] = useState(false)
  
  return (
    <>
      <section id="admissions" className="section" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', position: 'relative'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(0,44,95,0.1) 50%, transparent 100%)'}} />
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: 64}}>
            <h2 className="slide-up" style={{color: 'var(--color-blue)', marginBottom: 24, fontSize: 36, fontWeight: 800, position: 'relative'}}>
              Admissions Open
              <div style={{position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: 60, height: 4, background: 'var(--gradient-primary)', borderRadius: 2}} />
            </h2>
            <p className="slide-up" style={{color: 'var(--color-muted)', fontSize: 18, lineHeight: 1.7, maxWidth: 800, margin: '0 auto', animationDelay: '200ms'}}>Give your child the gift of excellence - where academic success meets character development</p>
            <div className="slide-up" style={{marginTop: 32, animationDelay: '400ms'}}>
              <button 
                onClick={() => setShowModal(true)}
                className="btn bounce-in"
                style={{fontSize: 18, padding: '18px 36px', background: 'var(--gradient-primary)', border: 'none', cursor: 'pointer'}}
              >
                Apply Now - Free Enquiry
              </button>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: 48, marginBottom: 64}}>
            <div>
              <h3 className="slide-up" style={{color: 'var(--color-blue)', fontSize: 28, fontWeight: 700, marginBottom: 32, textAlign: 'center'}}>Steps to Apply</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20}}>
                {steps.map((step, index) => (
                  <div key={step.title} className="card bounce-in" style={{background: 'var(--gradient-card)', border: '1px solid rgba(0,44,95,0.1)', animationDelay: `${300 + index * 100}ms`}}>
                    <div style={{display: 'flex', alignItems: 'center', textAlign: 'left'}}>
                      <div style={{width: 50, height: 50, background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 16, flexShrink: 0}}>
                        <span style={{fontSize: 24, color: '#fff'}}>{step.icon}</span>
                      </div>
                      <div>
                        <h4 style={{margin: 0, color: 'var(--color-blue)', fontSize: 16, fontWeight: 700}}>{step.title}</h4>
                        <p style={{margin: 0, color: 'var(--color-muted)', fontSize: 14}}>{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="slide-up" style={{color: 'var(--color-blue)', fontSize: 28, fontWeight: 700, marginBottom: 32, textAlign: 'center'}}>Documents Required</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16}}>
                {documents.map((doc, index) => (
                  <div key={doc.title} className="card bounce-in" style={{background: 'var(--gradient-card)', border: '1px solid rgba(0,44,95,0.1)', animationDelay: `${700 + index * 100}ms`}}>
                    <div style={{display: 'flex', alignItems: 'center', textAlign: 'left'}}>
                      <div style={{width: 40, height: 40, background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 16, flexShrink: 0}}>
                        <span style={{fontSize: 20, color: '#fff'}}>{doc.icon}</span>
                      </div>
                      <p style={{margin: 0, color: 'var(--color-text)', fontSize: 16, fontWeight: 500}}>{doc.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

function ContactUs() {
  return (
    <section id="contact-us" className="section" style={{background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', position: 'relative', color: '#fff'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 80}}>
          <h2 className="slide-up" style={{color: '#fff', marginBottom: 24, fontSize: 36, fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
            Contact Us
          </h2>
          <p className="slide-up" style={{color: 'rgba(255,255,255,0.9)', fontSize: 18, lineHeight: 1.7, maxWidth: 800, margin: '0 auto', animationDelay: '200ms'}}>Get in touch with us for any inquiries or to schedule a visit to our campus.</p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40}} className="section-grid-2">
          {/* Contact Information */}
          <div className="bounce-in" style={{animationDelay: '300ms'}}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(15px)',
              padding: 40,
              borderRadius: 20,
              border: '2px solid rgba(255,255,255,0.2)',
              height: '100%'
            }}>
              <h3 style={{color: '#fff', marginBottom: 30, fontSize: 24, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>Get in Touch</h3>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{
                    width: 50,
                    height: 50,
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 16,
                    flexShrink: 0
                  }}>
                    <span style={{fontSize: 20, color: '#fff'}}>📍</span>
                  </div>
                  <div>
                    <h4 style={{margin: '0 0 4px 0', color: '#fff', fontSize: 16, fontWeight: 600}}>School Address</h4>
                    <p style={{margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 14, lineHeight: 1.5}}>
                      Divine Grace International School<br/>
                      Cheeryal X Road, Keesara Road<br/>
                      Hyderabad, Telangana 501303
                    </p>
                  </div>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{
                    width: 50,
                    height: 50,
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 16,
                    flexShrink: 0
                  }}>
                    <span style={{fontSize: 20, color: '#fff'}}>📞</span>
                  </div>
                  <div>
                    <h4 style={{margin: '0 0 4px 0', color: '#fff', fontSize: 16, fontWeight: 600}}>Phone</h4>
                    <p style={{margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 14}}>+91 98765 43210</p>
                  </div>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{
                    width: 50,
                    height: 50,
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 16,
                    flexShrink: 0
                  }}>
                    <span style={{fontSize: 20, color: '#fff'}}>✉️</span>
                  </div>
                  <div>
                    <h4 style={{margin: '0 0 4px 0', color: '#fff', fontSize: 16, fontWeight: 600}}>Email</h4>
                    <p style={{margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 14}}>info@divinegrace.edu.in</p>
                  </div>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{
                    width: 50,
                    height: 50,
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 16,
                    flexShrink: 0
                  }}>
                    <span style={{fontSize: 20, color: '#fff'}}>🕒</span>
                  </div>
                  <div>
                    <h4 style={{margin: '0 0 4px 0', color: '#fff', fontSize: 16, fontWeight: 600}}>Office Hours</h4>
                    <p style={{margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 14}}>Mon - Fri: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bounce-in" style={{animationDelay: '500ms'}}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(15px)',
              padding: 40,
              borderRadius: 20,
              border: '2px solid rgba(255,255,255,0.2)',
              height: '100%'
            }}>
              <h3 style={{color: '#fff', marginBottom: 30, fontSize: 24, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>Send us a Message</h3>
              
              <form style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: 16,
                      outline: 'none',
                      transition: 'all 300ms ease'
                    }}
                    placeholderStyle={{color: '#fff'}}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.6)'
                      e.target.style.background = 'rgba(255,255,255,0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                      e.target.style.background = 'rgba(255,255,255,0.1)'
                    }}
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: 16,
                      outline: 'none',
                      transition: 'all 300ms ease'
                    }}
                    placeholderStyle={{color: '#fff'}}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.6)'
                      e.target.style.background = 'rgba(255,255,255,0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                      e.target.style.background = 'rgba(255,255,255,0.1)'
                    }}
                  />
                </div>
                
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: 16,
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'all 300ms ease',
                      fontFamily: 'inherit'
                    }}
                    placeholderStyle={{color: '#fff'}}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.6)'
                      e.target.style.background = 'rgba(255,255,255,0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                      e.target.style.background = 'rgba(255,255,255,0.1)'
                    }}
                  />
                </div>
                
                <button 
                  type="submit"
                  className="btn"
                  style={{
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 16,
                    padding: '14px 24px',
                    alignSelf: 'flex-start'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="section fade-in" style={{background: 'var(--gradient-primary)', color: '#fff', position: 'relative'}}>
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'}} />
      <div className="container" style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32}}>
        <div>
          <h3 style={{marginTop: 0, color: '#fff', fontSize: 20, marginBottom: 16}}>Divine Grace International High School</h3>
          <p style={{opacity: 0.9, lineHeight: 1.6, marginBottom: 20}}>Committed to providing world-class education that nurtures excellence, builds character, and shapes future leaders.</p>
          
          {/* Social Media Buttons */}
          <div style={{
            display: 'flex', 
            justifyContent: 'flex-start', 
            gap: 12, 
            marginBottom: 20,
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://www.facebook.com/dgischeeryalhyd?mibextid=wwXIfr&rdid=9sE7iVUTNrV8EQGY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16zXf1ynUs%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 300ms ease',
                fontSize: 13,
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(24, 119, 242, 0.2)'
                e.target.style.borderColor = 'rgba(24, 119, 242, 0.5)'
                e.target.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)'
                e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                alt="Facebook" 
                style={{width: 16, height: 16, filter: 'brightness(0) invert(1)'}}
              />
              Visit Facebook
            </a>
            
            <a 
              href="https://www.instagram.com/instagram/?igsh=MWNudTRyMG1vNHM0MA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 300ms ease',
                fontSize: 13,
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(228, 64, 95, 0.2)'
                e.target.style.borderColor = 'rgba(228, 64, 95, 0.5)'
                e.target.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)'
                e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                alt="Instagram" 
                style={{width: 16, height: 16, filter: 'brightness(0) invert(1)'}}
              />
              Visit Instagram
            </a>
            
            <a 
              href="https://www.youtube.com/@divinegraceinternationalsc8569"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 300ms ease',
                fontSize: 13,
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 0, 0, 0.2)'
                e.target.style.borderColor = 'rgba(255, 0, 0, 0.5)'
                e.target.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)'
                e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" 
                alt="YouTube" 
                style={{width: 16, height: 16, filter: 'brightness(0) invert(1)'}}
              />
              Visit YouTube
            </a>
          </div>
          
          <a 
            href="https://www.google.com/maps/place/Divine+Grace+International+School/@17.5074784,78.6260263,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9d3d996f51d3:0x1d9d0a8fc46429ac!8m2!3d17.5074784!4d78.6260263!16s%2Fg%2F11g9dh_w_m?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#fff',
              textDecoration: 'none',
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 300ms ease',
              fontSize: 14,
              fontWeight: 500
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)'
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)'
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            📍 View on Google Maps
          </a>
        </div>
        <div>
          <h4 style={{margin: '0 0 16px 0', color: '#fff', fontSize: 16}}>Quick Links</h4>
          <ul style={{paddingLeft: 0, listStyle: 'none', margin: 0}}>
            {['Admissions', 'Academics', 'Facilities', 'Gallery', 'Contact'].map((link, index) => (
              <li key={link} style={{marginBottom: 8}}>
                <a href={`#${link.toLowerCase()}`} 
                   className="slide-up"
                   style={{
                     color: 'rgba(255,255,255,0.8)', 
                     textDecoration: 'none', 
                     transition: 'all 300ms ease',
                     animationDelay: `${index * 50}ms`
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.color = '#fff'
                     e.target.style.transform = 'translateX(4px)'
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.color = 'rgba(255,255,255,0.8)'
                     e.target.style.transform = 'translateX(0)'
                   }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{margin: '0 0 16px 0', color: '#fff', fontSize: 16}}>Academic</h4>
          <ul style={{paddingLeft: 0, listStyle: 'none', margin: 0}}>
            {['Curriculum', 'Laboratories', 'Library', 'Sports', 'Activities'].map((item, index) => (
              <li key={item} className="slide-up" style={{marginBottom: 8, color: 'rgba(255,255,255,0.8)', animationDelay: `${index * 50}ms`}}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{margin: '0 0 16px 0', color: '#fff', fontSize: 16}}>Contact Us</h4>
          <p style={{opacity: 0.9, lineHeight: 1.6, marginBottom: 0}}>
            123 Education Street, Knowledge City, State - 500001<br/>
            +91 98765 43210<br/>
            info@divinegrace.edu.in<br/>
            Mon - Fri: 8:00 AM - 4:00 PM
          </p>
        </div>
      </div>
      <div className="container" style={{borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: 32, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.8)'}}>
        <div>© 2025 Divine Grace International High School. Cheeryal X Road, Keesara Road, Hyderabad, Telangana 501303.</div>
        <div style={{display: 'flex', gap: 20}}>
          {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link, index) => (
            <a key={link} href="#" 
               className="slide-up"
               style={{
                 color: 'rgba(255,255,255,0.8)', 
                 textDecoration: 'none', 
                 transition: 'all 300ms ease',
                 animationDelay: `${index * 100}ms`
               }}
               onMouseEnter={(e) => {
                 e.target.style.color = '#fff'
                 e.target.style.transform = 'translateY(-2px)'
               }}
               onMouseLeave={(e) => {
                 e.target.style.color = 'rgba(255,255,255,0.8)'
                 e.target.style.transform = 'translateY(0)'
               }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function FloatingSidebar() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div style={{
        position: 'fixed',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }} className="floating-sidebar">
        <button
          onClick={() => setShowModal(true)}
          className="bounce-in"
          style={{
            width: 120,
            height: 50,
            borderRadius: '25px',
            border: 'none',
            background: 'var(--gradient-primary)',
            color: '#fff',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            animationDelay: '100ms',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05) translateY(-2px)'
            e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)'
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
          }}
          title="Enquiry Form"
        >
          Enquiry Form
        </button>
      </div>
      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

function Preloader() {
  const [loading, setLoading] = useState(true)
  const [showLogo, setShowLogo] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Smooth preloader sequence
    const timer1 = setTimeout(() => {
      setShowLogo(true) // Show logo after background loads
    }, 500)

    const timer2 = setTimeout(() => {
      setFadeOut(true) // Start fade out
    }, 2500)

    const timer3 = setTimeout(() => {
      setLoading(false) // Hide preloader completely
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  if (!loading) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `url('/photos/schoolbuilding/building.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 1.2s ease-in-out'
    }}>

      {/* School Logo and Name Animation */}
      {showLogo && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          animation: 'slideUpFromBottom 1.5s ease-out'
        }}>
          {/* Logo */}
          <div style={{
            width: 200,
            height: 200,
            background: 'rgba(255,255,255,0.1)',
          // removed blur to improve performance during preloader
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid rgba(255,255,255,0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <img 
              src="/photos/logo/logosymbol.jpg" 
              alt="School Logo"
              style={{
                width: 120,
                height: 120,
                objectFit: 'contain',
                borderRadius: '50%'
              }}
              className="preloader-logo"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div style={{display: 'none', fontSize: 48, color: '#fff'}}>🏫</div>
          </div>
          
          {/* School Name */}
          <div style={{
            textAlign: 'center',
            animation: 'slideUp 1.2s ease-out 0.8s both'
          }}>
            <h1 style={{
              color: '#fff',
              fontSize: 32,
              fontWeight: 800,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              textAlign: 'center',
              margin: 0
            }}>
              Divine Grace International School
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 16,
              textAlign: 'center',
              margin: '8px 0 0 0',
              fontWeight: 500
            }}>
              Nurturing Excellence, Inspiring Character
            </p>
          </div>
        </div>
      )}

    </div>
  )
}

export default function App() {
  const [showAutoModal, setShowAutoModal] = useState(false)

  useEffect(() => {
    // Check if modal has been shown before in this session
    const hasShownModal = sessionStorage.getItem('enquiryModalShown')
    
    if (!hasShownModal) {
      // Show modal after 20 seconds
      const timer = setTimeout(() => {
        setShowAutoModal(true)
        // Mark as shown in session storage
        sessionStorage.setItem('enquiryModalShown', 'true')
      }, 20000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div>
      <Preloader />
      <Navbar />
      <Hero />
      <ChairmanMessage />
      <WhyDGIS />
      <StoryVisionMission />
      <Academics />
      <CoCurricular />
      <Facilities />
      <Admissions />
      <ContactUs />
      <Footer />
      <FloatingSidebar />
      <EnquiryModal isOpen={showAutoModal} onClose={() => setShowAutoModal(false)} />
    </div>
  )
}
