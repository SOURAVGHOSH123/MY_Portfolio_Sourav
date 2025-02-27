import React from 'react';
import ShopSite from '../assets/shop_site.jpg'
import CampSite from '../assets/Camp_site.jpg'
import Facial from '../assets/Facial_Recognition.jpg'
import { ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Facial Recognition Attendance System",
      description: "A Facial Recognition Attendance System is an advanced biometric solution that automates attendance tracking by identifying individuals based on their facial features. It eliminates the need for manual attendance marking, reducing fraud and improving efficiency.",
      image: Facial,
      link: "https://github.com/SOURAVGHOSH123/Facial-Recognition-System"
    },
    {
      title: "Shop Site",
      description: "A Shopping Website (E-Commerce website) is an online platform that allows users to browse, select, and purchase products. It provides a seamless shopping experience with secure transactions, product recommendations, and order tracking.",
      image: ShopSite,
      link: "https://github.com/SOURAVGHOSH123/Shop_Site"
    },
    {
      title: "Yalm Camp Project",
      description: "This is a yalmCamp Project where we have to perform CRUD(Create, read, update and Delete) operation and review our camp site. We have to store the documentation on the MongoDB Database.(i.e. MongoDB Atlas).",
      image: CampSite,
      link: "https://github.com/SOURAVGHOSH123/Camp_Project"
    },
    {
      title: "Automobiles Performance Monitor",
      description: "Create an automobile sales management system using Excel to manage vehicle inventory, track sales data, and generate performance reports. The system includes automated calculations, pivot tables for analysis, and dashboards for insights, enabling efficient sales tracking and decision-making for automobile dealerships.",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800",
      link: "https://github.com/SOURAVGHOSH123/Automobiles-Performance-Monitor"
    },
    {
      title: "News Paper Read",
      description: "The News_Paper_Read project is a Python-based application designed to scrape, analyze, and curate news articles from various online sources. Utilizing the powerful Newspaper3k library, this project enables users to efficiently extract valuable information from news websites, making it easier to access and summarize content.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800",
      link: "https://github.com/SOURAVGHOSH123/NEWSPaper_website"
    },
    {
      title: "Online Library Management",
      description: "The Online Library Management System project is designed to streamline and enhance the management of library operations through a user-friendly interface built using Java in the NetBeans IDE. This system aims to facilitate the efficient handling of book records, user registrations, and transactions within a library environment.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800",
      link: "https://github.com/SOURAVGHOSH123/Online-Library-Managment"
    }
  ];

  return (
    <section className="min-h-screen pt-10 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          Projects Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-3d bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transform hover:translate-x-2 transition-transform"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;