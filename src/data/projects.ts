import type { Project } from './types/projects';

export const projects: Project[] = [
	{
		title: 'Gestión de Cursos',
		description:
			'Plataforma que automatiza la gestión de cursos e inscripciones con portal para alumnos y herramientas administrativas.',
		images: [
			'/projects/cursos/1_1.webp',
			'/projects/cursos/1_2.webp',
			'/projects/cursos/1_3.webp',
			'/projects/cursos/1_4.webp',
			'/projects/cursos/1_5.webp',
			'/projects/cursos/1_6.webp',
			'/projects/cursos/1_7.webp',
			'/projects/cursos/1_8.webp',
		],
		links: [{ url: 'https://demo-cursos.up.railway.app/login', label: 'Ver Demo', icon: 'portal' }],
	},
	{
		title: 'Control de Acceso Gym',
		description:
			'Sistema automatizado para gimnasios que gestiona membresías, control de acceso en tiempo real y panel administrativo.',
		images: [
			'/projects/gym/2_0.webp',
			'/projects/gym/2_1.webp',
			'/projects/gym/2_2.webp',
			'/projects/gym/2_3.webp',
			'/projects/gym/2_4.webp',
			'/projects/gym/2_5.webp',
			'/projects/gym/2_6.webp',
			'/projects/gym/2_7.webp',
			'/projects/gym/2_8.webp',
			'/projects/gym/2_9.webp',
		],
		links: [{ url: 'https://gym-access.up.railway.app', label: 'Ver Demo' }],
	},

	{
		title: 'Sitio Web Pizzería',
		description:
			'Web moderna para restaurante con menú digital, optimizada para mejorar visibilidad online y experiencia del cliente.',
		images: [
			'/projects/pipzum/3_1.webp',
			'/projects/pipzum/3_2.webp',
			'/projects/pipzum/3_3.webp',
			'/projects/pipzum/3_4.webp',
			'/projects/pipzum/3_5.webp',
			'/projects/pipzum/3_6.webp',
		],
		links: [{ url: 'https://pipzum.vercel.app/', label: 'Visitar Sitio' }],
	},
];
