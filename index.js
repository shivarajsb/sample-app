const generateParticles = () => {
  const particles = [];
  for (let i = 0; i < 20; i++) {
    particles.push({
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    });
  }
  return particles;
};

module.exports = { generateParticles };
