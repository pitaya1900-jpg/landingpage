'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Monitor scroll for navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyContact = () => {
    navigator.clipboard.writeText("010-2241-6225");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Glassmorphism Navbar */}
      <header className="container-custom">
        <nav className="navbar" style={scrolled ? { top: "8px", background: "rgba(255, 253, 251, 0.9)" } : {}}>
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Young-A <span className="nav-logo-dot"></span>
          </a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>소개</a></li>
            <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>내가 하는 일</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>연락처</a></li>
          </ul>
          <div>
            <a 
              href="#contact" 
              className="btn btn-secondary" 
              style={{ padding: "8px 18px", fontSize: "0.85rem" }}
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            >
              상담 문의
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="animate-fade-in-up">
              <div className="hero-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                대학생 진로 및 취업 컨설턴트
              </div>
              <h1 className="hero-title">
                길을 찾는 대학생들의<br />
                <span>나침반</span>이 되어줍니다.
              </h1>
              <p className="hero-desc">
                안녕하세요! 대학생들의 성공적인 첫걸음을 응원하고 돕는 <strong>하영아</strong>입니다.<br />
                진로 설정의 모호함을 걷어내고, 명확한 맞춤형 전략과 진정성 있는 1:1 멘토링을 통해<br />
                스스로 원하는 미래와 커리어를 디자인할 수 있도록 이끌어 드립니다.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                  1:1 상담 신청하기
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#services" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>
                  서비스 자세히 보기
                </a>
              </div>
            </div>
            <div className="hero-image-container animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="hero-image-wrapper animate-float">
                <Image 
                  src="/images/hero-illustration.png" 
                  alt="하영아 진로 컨설팅 일러스트" 
                  className="hero-image"
                  fill
                  priority
                  sizes="(max-width: 968px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-bg">
        <div className="container-custom">
          <div className="about-grid">
            <div className="about-image-mockup">
              <div style={{ position: "relative", width: "100%", height: "350px", background: "radial-gradient(circle, #FFEFEA 0%, #FAF7F2 100%)", borderRadius: "var(--radius-lg)", border: "1px dashed var(--accent)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "30px", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>💡</div>
                <h4 style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: "8px" }}>"함께 고민하고, 함께 나아갑니다"</h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, wordBreak: "keep-all" }}>
                  대학생 시절의 고민은 단순한 걱정이 아닌 성장의 신호입니다. 여러분의 장점을 극대화하고 약점을 보완하여 구체적인 로드맵으로 실현시킵니다.
                </p>
              </div>
            </div>
            <div className="about-content">
              <div className="section-subtitle">ABOUT ME</div>
              <h3>대학생의 눈높이에서 공감하고,<br />결과로 증명하는 컨설팅</h3>
              <p>
                대학생 시기는 일생에서 가장 많은 선택과 마주하는 중요한 골든타임입니다. 저는 단편적인 스펙 쌓기 코칭을 넘어, 학생이 진짜 원하는 진로가 무엇인지 함께 탐색하고, 구체적인 프로그램 설계와 탄탄한 취업 상담을 통해 실질적인 합격 로드맵을 선사합니다.
              </p>
              <p>
                다양한 취업 지원 프로그램 기획 및 운영 경험을 바탕으로, 공공기관 취업부터 대기업, 스타트업에 이르기까지 다변화된 채용 트렌드에 즉각적으로 대응할 수 있는 현실적인 팁을 제공합니다.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">상담 완료 학생 수</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">진행 교육 프로그램</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">상담 만족도</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container-custom">
          <div className="section-header">
            <div className="section-subtitle">WHAT I DO</div>
            <h2 className="section-title">주요 업무 영역</h2>
          </div>
          <div className="services-grid">
            {/* Service Card 1 */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="service-title">진로 및 취업 상담</h3>
              <p className="service-desc">
                대학생 개인의 역량, 강점, 흥미를 면밀히 파악하여 나침반처럼 올바른 직무 방향을 추천합니다. 자기소개서 클리닉부터 면접 시뮬레이션까지 전 과정 밀착 관리합니다.
              </p>
              <ul className="service-list">
                <li className="service-list-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  1:1 개인 강점 진단 및 진로 로드맵 수립
                </li>
                <li className="service-list-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  직무 분석 및 맞춤형 대외활동·스펙 추천
                </li>
                <li className="service-list-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  합격을 부르는 자기소개서 1:1 첨삭 및 퇴고
                </li>
                <li className="service-list-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  유형별 면접 코칭 및 모의면접 시뮬레이션
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="service-title">프로그램 기획 및 운영</h3>
              <p className="service-desc">
                대학교 취업지원센터 및 청년 기관과의 협력을 통해 실무 중심의 취업 캠프, 진로 워크숍 등을 직접 기획하고 총괄 운영하여 학생들의 참여도와 역량을 끌어올립니다.
              </p>
              <ul className="service-list">
                <li className="service-list-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  몰입형 취업/진로 캠프(1박 2일 혹은 단기) 총괄 기획
                </li>
                <li className="service-list-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  기업 실무 연계형 장기 취업 아카데미 운영
                </li>
                <li className="service-list-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  직무별 선배 초청 특강 및 네트워킹 이벤트 개최
                </li>
                <li className="service-list-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  정부 일자리 정책 연계 진로 취업 특수 사업 매니징
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-bg">
        <div className="container-custom">
          <div className="section-header">
            <div className="section-subtitle">CONTACT ME</div>
            <h2 className="section-title">소통과 문의</h2>
          </div>
          
          <div className="contact-container">
            <div className="contact-info-section">
              <h3>궁금한 점이 있거나<br />상담이 필요하신가요?</h3>
              <p>
                진로 선택의 막막함, 자기소개서 작성의 어려움, 면접 준비 과정에서의 두려움 모두 좋습니다. 부담 없이 편안하게 연락해 주세요.
              </p>
              
              <div className="contact-details">
                <a href="tel:01022416225" className="contact-card-tel">
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <span className="contact-item-label">전화번호 (클릭 시 통화 연결)</span>
                      <span className="contact-item-value">010-2241-6225</span>
                    </div>
                  </div>
                </a>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">오피스 위치</span>
                    <span className="contact-item-value">경기도 성남시 판교 스타트캠퍼스</span>
                  </div>
                </div>
              </div>

              <div className="contact-button-wrapper" style={{ marginTop: "32px" }}>
                <button onClick={handleCopyContact} className={`btn btn-primary pulse-button`}>
                  {copySuccess ? "전화번호 복사 완료!" : "전화번호 클립보드 복사"}
                </button>
              </div>
            </div>

            {/* Map mockup */}
            <div className="map-visual-container">
              <div className="map-visual-bg"></div>
              <div className="map-marker">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="map-location-name">판교 스타트캠퍼스</div>
              <div className="map-location-desc">성남시 분당구 판교역로 289</div>
              <div style={{ marginTop: "16px", padding: "6px 12px", background: "rgba(255, 255, 255, 0.8)", border: "1px solid var(--border-color)", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)" }}>
                📍 판교 삼평동 스타트업 허브
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-custom">
          <div className="footer-logo">
            Young-A <span className="nav-logo-dot"></span>
          </div>
          <p className="footer-copy">
            &copy; 2026 하영아. All rights reserved. Designed for College Career Mentorship.
          </p>
        </div>
      </footer>
    </>
  );
}
