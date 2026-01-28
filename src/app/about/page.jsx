"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, Heart, Users, ShieldCheck, Zap, MapPin, Briefcase,  } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";

// Asset Imports
import JiteshNarang from "../../../public/assets/team/Jitesh_Narang.png";
import NirupamKathuriya from "../../../public/assets/team/Nirupam_Kathuriya.png";
import PoojaVaid from "../../../public/assets/team/Pooja_Vaid.png";
import VaibhavNegi from "../../../public/assets/team/Vaibhav_Negi.png";
import SagarBhatli from "../../../public/assets/team/Sagar_Bhatli.png";

const STATS = [
  { label: "Destinations", value: "50+", icon: <Globe className="w-5 h-5" /> },
  {
    label: "Happy Travelers",
    value: "120K",
    icon: <Users className="w-5 h-5" />,
  },
  { label: "Tour Experts", value: "85", icon: <Award className="w-5 h-5" /> },
  {
    label: "Safety Rating",
    value: "100%",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

const TEAM = [
  { name: "Pooja Vaid", role: "Managing Partner", img: PoojaVaid },
  { name: "Vaibhav Negi", role: "Managing Partner", img: VaibhavNegi },
  { name: "Sagar Bhatli", role: "Managing Partner", img: SagarBhatli },
  { name: "Jitesh Narang", role: "Managing Partner", img: JiteshNarang },
];

const WHY_US = [
  {
    title: "Bespoke Solutions",
    desc: "Bespoke solutions crafted to your exacting standards, tailored to individual and corporate travel needs.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Dedicated Relationship Manager",
    desc: "A dedicated relationship manager ensuring personalized attention and seamless coordination throughout your journey.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Client-First Philosophy",
    desc: "A refined, client-first philosophy rooted in trust, transparency, discretion, and long-term relationships.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "End-to-End Execution",
    desc: "Seamless end-to-end execution of travel, visas, documentation, and logistics under one distinguished umbrella.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Meticulous Excellence",
    desc: "Excellence delivered through meticulous attention to detail at every stage of planning and execution.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "PAN India Visa Assistance",
    desc: "Comprehensive PAN India visa assistance with expert guidance, compliance, and timely processing.",
    icon: <MapPin className="w-6 h-6" />,
  },
];

const SERVICES = [
  {
    title: "Visa & Documentation",
    items: [
      "Bespoke visa services across India",
      "Legalization and Attestation of Documents",
      "FRRO Services for foreign nationals",
    ],
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Luxury Travel",
    items: [
      "Curated domestic & international travel",
      "Luxury hotel & global flight arrangements",
      "Premium foreign exchange solutions",
    ],
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Corporate & MICE",
    items: [
      "Executive MICE management",
      "Corporate travel logistics",
      "Dedicated relationship desk",
    ],
    icon: <Briefcase className="w-6 h-6" />, // Note: You'll need to import Briefcase from lucide-react
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-600">
      <GlassNavbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
            alt="Adventure background"
            fill
            priority
            className="object-cover scale-105"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/20 backdrop-blur-md rounded-full text-red-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-8"
          >
            <Zap className="w-3 h-3 fill-current" />
            The QCD Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8]"
          >
            Redefining <br />
            <span className="text-red-600 font-serif italic font-medium lowercase">
              adventure
            </span>
          </motion.h1>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-4/5 w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80"
                alt="Traveler"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden md:block z-20 bg-white p-8 rounded-[2.5rem] shadow-xl max-w-xs border border-gray-100">
              <Heart className="text-red-600 w-8 h-8 mb-4" />
              <p className="font-semibold text-gray-800 leading-snug">
                "We don't just book trips; we craft core memories that stay with
                you forever."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
              Why We <span className="text-red-600">Started</span>
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Founded in 2025,{" "}
                <span className="text-gray-900 font-bold">QCD Travels</span>{" "}
                emerged from a simple realization: the travel industry was
                becoming too robotic. We wanted to bring the soul back to
                exploration.
              </p>
              <p>
                Our team consists of lifelong nomads and logistics masters.
                Together, we ensure every itinerary is as unique as the person
                traveling it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-10 gap-x-4 pt-8 border-t border-gray-100">
              {STATS.map((stat, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 text-red-600 mb-1">
                    {stat.icon}
                    <span className="text-3xl font-black text-gray-900 group-hover:text-red-600 transition-colors">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="bg-gray-50 py-10 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Top Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[0.8] mb-8"
            >
              Why{" "}
              <span className="text-red-600 italic font-serif">
                Choose
              </span>{" "}
              Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg lg:text-xl leading-relaxed"
            >
              We’ve stripped away the fluff of traditional travel agencies to
              focus on what actually matters:{" "}
              <span className="text-gray-900 font-bold italic">
                speed, safety, and soul.
              </span>
            </motion.p>
          </div>

          {/* Bottom Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white rounded-xl border border-gray-100 hover:border-red-600/20 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- CORE SERVICES --- */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex flex-col mb-16">
      <h3 className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
        What We Do
      </h3>
      <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none">
        Elite Travel <br />
        <span className="text-gray-300">Architecture</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {SERVICES.map((service, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group border-t-4 border-gray-100 pt-8 hover:border-red-600 transition-colors duration-500"
        >
          <div className="text-red-600 mb-6">{service.icon}</div>
          <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6">
            {service.title}
          </h4>
          <ul className="space-y-4">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-500 group-hover:text-gray-900 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                <span className="text-sm font-medium leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* --- DIRECTOR'S MESSAGE --- */}
      
      <section className="px-6 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-gray-950 rounded-[4rem] overflow-hidden relative shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
            <div className="lg:col-span-2 relative min-h-100">
              <Image
                src={NirupamKathuriya}
                alt="Nirupam Kathuriya"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent lg:bg-linear-to-r" />
            </div>

            <div className="lg:col-span-3 p-5 lg:p-5 flex flex-col justify-center relative">
              <Zap className="absolute top-10 right-10 text-white/5 w-32 h-32 rotate-12" />

              <h3 className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-8">
                Director's Desk
              </h3>
              <blockquote className="text-2xl lg:text-4xl font-medium text-white leading-tight mb-10 font-serif italic opacity-90">
                "QCD is a convergence of diverse expertise unified by a singular
                vision — to deliver seamless and hassle-free solutions.
                Established with the intent to simplify complex bureaucratic
                mechanisms, we combine in-depth industry knowledge with a
                practical, hands-on approach to free our clients from redundant
                procedures and prolonged processes."
              </blockquote>

              <div className="flex flex-wrap gap-12">
                <div>
                  <p className="text-white font-black text-3xl uppercase tracking-tighter">
                    Nirupam Kathuriya
                  </p>
                  <p className="text-red-500 text-xs font-bold uppercase tracking-widest mt-1">
                    Founder & CEO
                  </p>
                </div>
                {/* <div className="flex gap-8 border-l border-white/10 pl-8">
                  <StatSimple label="Years Exp" value="15+" />
                  <StatSimple label="Global Clients" value="120K" />
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- TEAM GRID --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9]">
            The Minds <br />{" "}
            <span className="text-red-600 italic font-serif lowercase">
              of the magic
            </span>
          </h2>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] pb-2 border-b-2 border-red-600">
            London • Dubai • New Delhi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

/* --- SUB-COMPONENTS --- */

const StatSimple = ({ label, value }) => (
  <div>
    <p className="text-white font-black text-2xl">{value}</p>
    <p className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">
      {label}
    </p>
  </div>
);

const TeamCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="relative aspect-3/4 rounded-4xl overflow-hidden mb-6 bg-gray-100">
      <Image
        src={member.img}
        alt={member.name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-500" />
    </div>
    <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight">
      {member.name}
    </h4>
    <p className="text-red-600 text-[10px] font-bold uppercase tracking-widest mt-1">
      {member.role}
    </p>
  </motion.div>
);

export default AboutPage;
