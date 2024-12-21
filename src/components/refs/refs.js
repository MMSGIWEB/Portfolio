import { createRef } from 'react';

export const projectsRef = createRef();
export const skillsRef = createRef();
export const contactRef = createRef();

// Fonction pour défiler jusqu'à une section
export const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
}