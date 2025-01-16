import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import hoamai from 'assets/hoamai.webp';
import phaono from 'assets/phaono.svg';
const FallingFlowers = () => {
  const particlesInit = async (engine: any) => {
    // Load full plugin để đảm bảo tất cả các hiệu ứng được hỗ trợ
    await loadFull(engine);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 20, // Số lượng hạt
      },
      shape: {
        type: 'image', // Sử dụng hình ảnh cho các hạt
        image: [
          {
            src: hoamai, // Hình hoa đào
            width: 20,
            height: 20,
          },
          {
            src: phaono, // Hình pháo nổ
            width: 20,
            height: 20,
          },

        ],
      },
      opacity: {
        value: 0.7, // Độ trong suốt
      },
      size: {
        value: { min: 5, max: 10 }, // Kích thước ngẫu nhiên cho hạt
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'bottom' as const, // Rơi xuống dưới
        straight: false, // Chuyển động không thẳng
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse', // Tạo hiệu ứng đẩy khi hover chuột
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
  };

  return <Particles init={particlesInit}

    options={particlesOptions} />;
};

export default FallingFlowers;
