import { Image, Link } from 'lucide-react';
import './App.css';
import { Button } from './components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardHeader,
} from './components/ui/card';

import bangenteImg from '@/assets/bangente2.png';
import scImg from '@/assets/monitoring_app.png';
import faImg from '@/assets/filtrationadvice.png';
import wingooImg from '@/assets/wingoo.png';
import zumetricsImg from '@/assets/zumetrics.png';
import growthRoadImg from '@/assets/growthroad.png';
import { Badge } from './components/ui/badge';

function App() {
    const projects = [
        {
            id: 1,
            title: 'Bangente - Mobile App',
            description:
                'A mobile banking application that allows users to access their accounts and perform various banking transactions.',
            image: bangenteImg,
            technologies: [
                'React Native',
                'Expo (SDK 42–52)',
                'Native Modules Integration (.xcframework, .aar)',
            ],
            link: 'https://play.google.com/store/apps/details?id=com.bangente.movil&hl=en-US',
        },
        {
            id: 2,
            title: 'SC - Monitoring Web App',
            description:
                'Platform where companies can list and monitor their dashboards related to enviromentant regulations in real-time.',
            image: scImg,
            technologies: [
                'React',
                'TailwindCSS',
                'TypeScript',
                'GraphQL',
                'Apollo Client',
            ],
            link: 'https://www.smartcompliance-sia.com/login',
        },
        {
            id: 3,
            title: 'FA - Monitoring Web App',
            description:
                'Air filtration real-time monitoring and optimization of HVAC systems. Leveraging lab reports and data analysis to help companies reduce costs and improve efficiency.',
            image: faImg,
            technologies: ['Angular (v10 - v17)', 'RxJS', 'TypeScript'],
            link: 'https://filtrationadvice.com/air-filtration-management',
        },
        {
            id: 4,
            title: 'Wingoo - HR Platform',
            description:
                'With a single registration and without the need to search and filter among thousands of opportunities, companies invite you through the platform.',
            image: wingooImg,
            technologies: [
                'React (v15)',
                'Next.js',
                'Ruby on Rails',
                'TypeScript',
                'SASS',
            ],
            link: 'https://www.wingoo.io',
        },
        {
            id: 5,
            title: 'Growth Road - Social Media Analytics',
            description:
                'Their mission is to revolutionize education and psychometric profile assessment.',
            image: growthRoadImg,
            technologies: [
                'React (v15)',
                'Next.js',
                'Ruby on Rails',
                'TypeScript',
                'SASS',
            ],
            link: 'https://www.growthroad.es/',
        },
        {
            id: 6,
            title: 'Zumetrics - Social Media Analytics',
            description:
                'Zumetrics is a social media analytics platform that helps businesses understand their audience and improve their social media strategy.',
            image: zumetricsImg,
            technologies: [
                'React (v15)',
                'Next.js',
                'Ruby on Rails',
                'TypeScript',
                'SASS',
            ],
            link: 'https://my.zumetrics.vercel.app/',
        },
    ];

    return (
        <section>
            <section className="flex items-center justify-center bg-white h-20">
                <p className="text-center text-2xl font-black">Yosef Blandin</p>
            </section>

            <section className="py-10 md:py-16 px-4 bg-white">
                <p className="text-center text-sm lg:text-lg text-black font-black">
                    Angular, React, Next.js
                </p>
                <p className="text-center text-sm lg:text-lg text-black font-black">
                    Tailwind CSS, TypeScript, Redux, React Native
                </p>
                <h3 className="my-2 text-2xl lg:text-4xl uppercase text-center text-black font-black">
                    Frontend Developer
                </h3>

                <h3 className="text-center uppercase text-sm lg:text-xl text-black font-black">
                    with over 4 years of experience
                </h3>

                <h3 className="mt-20 mb-10 text-center text-base lg:text-xl text-black font-black">
                    Below you can get a glimpse of my work
                </h3>

                <section className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto">
                    {projects.map((project) => (
                        <Card key={project.id} className="w-[350px]">
                            <CardHeader>
                                <CardTitle className="uppercase font-black">
                                    {project.title}
                                </CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                                <section className="flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <Badge
                                            key={technology}
                                            className="mt-2"
                                        >
                                            {technology}
                                        </Badge>
                                    ))}
                                </section>
                            </CardHeader>
                            <CardContent>
                                <img
                                    className="h-40 w-full object-cover object-top rounded-xl"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </CardContent>
                            <CardFooter className="flex gap-8 justify-between">
                                <Button
                                    variant="outline"
                                    className="flex-grow cursor-pointer"
                                    onClick={() => {
                                        window.open(project.link, '_blank');
                                    }}
                                >
                                    Visit
                                </Button>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="flex-grow"
                                >
                                    Read More
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </section>
            </section>
        </section>
    );
}

export default App;
