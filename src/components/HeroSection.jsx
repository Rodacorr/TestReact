import PropTypes from 'prop-types'
import AnimatedHeroTitle from './AnimatedHeroTitle'

function HeroSection({ onExplore }) {
  return (
    <div className="hero-section">
      <AnimatedHeroTitle />
      <div className="scroll-indicator" onClick={onExplore}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  onExplore: PropTypes.func.isRequired
}

export default HeroSection 