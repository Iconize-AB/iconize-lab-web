import React, { useState, useEffect } from 'react';
import './RubiksCube.scss';
import IconizeLogo from '../resources/iconize-new.png'; // Make sure this path is correct

const RubiksCube = ({ size = 200 }) => {
  const [isSolving, setIsSolving] = useState(false);
  
  const colors = {
    scrambled: ['#7E57C2', '#1A237E', '#66BB6A', '#EF5350', '#ffffff'],
    solved: {
      front: '#6200ea',
      back: '#EF5350',
      left: '#7E57C2',
      right: '#1A237E',
      top: '#ffffff',
      bottom: '#66BB6A'
    }
  };

  // Scrambled state
  const createScrambledFace = () => {
    return Array(9).fill(null).map(() => ({
      color: colors.scrambled[Math.floor(Math.random() * colors.scrambled.length)],
      id: `cube-${Math.random()}`,
      isLogo: false
    }));
  };

  // Solved state
  const createSolvedFace = (faceColor) => {
    return Array(9).fill(null).map(() => ({
      color: faceColor,
      id: `cube-solved-${Math.random()}`,
      isLogo: true
    }));
  };

  // Initialize faces
  const [faces, setFaces] = useState({
    front: createScrambledFace(),
    back: createScrambledFace(),
    left: createScrambledFace(),
    right: createScrambledFace(),
    top: createScrambledFace(),
    bottom: createScrambledFace()
  });

  // Toggle solving animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSolving(prev => !prev);
      
      if (!isSolving) {
        // Set solved state with logos
        setFaces({
          front: createSolvedFace(colors.solved.front),
          back: createSolvedFace(colors.solved.back),
          left: createSolvedFace(colors.solved.left),
          right: createSolvedFace(colors.solved.right),
          top: createSolvedFace(colors.solved.top),
          bottom: createSolvedFace(colors.solved.bottom)
        });
      } else {
        // Set scrambled state
        setFaces({
          front: createScrambledFace(),
          back: createScrambledFace(),
          left: createScrambledFace(),
          right: createScrambledFace(),
          top: createScrambledFace(),
          bottom: createScrambledFace()
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isSolving]);

  const renderFace = (faceCubes, faceType) => {
    return faceCubes.map((cube, index) => (
      <div 
        key={cube.id}
        className={`cube ${isSolving ? 'solving' : ''}`}
        style={{ 
          backgroundColor: cube.color,
          transitionDelay: `${index * 0.1}s`
        }}
      >
        {isSolving && (
          <div className="logo-wrapper">
            <img 
              src={IconizeLogo} 
              alt="Iconize Logo" 
              className="cube-logo"
              style={{ opacity: isSolving ? 1 : 0 }}
            />
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="rubiks-loader" style={{ width: size, height: size }}>
      <div className={`rubiks-cube ${isSolving ? 'solving' : ''}`}>
        <div className="face front">{renderFace(faces.front, 'front')}</div>
        <div className="face back">{renderFace(faces.back, 'back')}</div>
        <div className="face left">{renderFace(faces.left, 'left')}</div>
        <div className="face right">{renderFace(faces.right, 'right')}</div>
        <div className="face top">{renderFace(faces.top, 'top')}</div>
        <div className="face bottom">{renderFace(faces.bottom, 'bottom')}</div>
      </div>
    </div>
  );
};

export default RubiksCube;
