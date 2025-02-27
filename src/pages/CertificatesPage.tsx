import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import ReactCirtificate from '../assets/cirtificates/React_js_cirtificate.jpg'
import OLEVELR1M5 from '../assets/cirtificates/OLevelM1-R5.jpg'
import OLEVELR2M5 from '../assets/cirtificates/OLevelM2-R5.jpg'
import OLEVELR3M5 from '../assets/cirtificates/OLevelM3-R5.jpg'
import OLEVELR4M5 from '../assets/cirtificates/OLevelM4-R5.jpg'
import RDBMS from '../assets/RDBMS.jpg'
import NODE from '../assets/node.jpg'
import IOT from '../assets/IOT.jpg'
import INFORMATION from '../assets/INFORMATION.jpg'
import CYBER from '../assets/cyber.jpg'

const CertificatesPage = () => {
  const certificates = [
    {
      name: 'Python 3 Programming',
      issuer: 'Coursera',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800',
      description: 'Comprehensive Python programming certification covering core concepts and advanced topics.',
      url: 'https://coursera.org/verify/specialization/LYNLX75WKUR3'
    },
    {
      name: 'Relational Database and SQL',
      issuer: 'Coursera',
      image: RDBMS,
      description: 'A relational database is a type of database that stores data in tables with rows and columns. Each table represents an entity (e.g., Users, Orders) and contains relationships with other tables.',
      url: 'https://coursera.org/verify/4DWCLDBD8X4A'
    },
    {
      name: 'Node.js',
      issuer: 'Infosys Springboard',
      image: NODE,
      description: 'Server-side JavaScript development with Node.js ecosystem and best practices.',
      url: 'https://coursera.org/verify/4DW'
    },
    {
      name: 'React.js',
      issuer: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800',
      description: 'Modern React development including hooks, context, and state management.',
      url: ReactCirtificate
    },
    {
      name: "Web Designing and Tools",
      issuer: 'NIELIT O-Level',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800',
      description: 'Comprehensive web certification covering computer fundamentals and programming.',
      url: OLEVELR2M5
    },
    {
      name: "Internet of Things and It's Application",
      issuer: 'NIELIT O-Level',
      image: IOT,
      description: 'Comprehensive IoT certification covering computer fundamentals and programming.',
      url: OLEVELR4M5
    },
    {
      name: "Information Technology Tools and Networks",
      issuer: 'NIELIT O-Level',
      image: INFORMATION,
      description: 'Comprehensive IT certification covering computer fundamentals and programming.',
      url: OLEVELR1M5
    },
    {
      name: 'Introduction of Cyber Security',
      issuer: 'Google (Coursera)',
      image: CYBER,
      description: 'Advanced cybersecurity concepts and practices from Google experts.',
      url: 'https://coursera.org/verify/MA4PKFPPU2TZ'
    },
  ];

  return (
    <section className="min-h-screen pt-10 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="card-3d bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Award className="text-white drop-shadow-lg" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-indigo-600 text-sm mb-3">{cert.issuer}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <a href={cert.url}>
                  <button className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                    View Certificate <ExternalLink size={16} />
                  </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesPage;