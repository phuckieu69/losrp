import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

import lapdExplorerNight from '../assets/images/media_lapd_explorer_night.png';
import chpChargerGarage from '../assets/images/media_chp_charger_garage.png';
import fbiHrtOperator from '../assets/images/media_fbi_hrt_operator.png';
import fbiHostageRescueSuv from '../assets/images/media_fbi_hostage_rescue_suv.png';
import gasStationStop from '../assets/images/media_gas_station_stop.png';
import patrolForestRoad from '../assets/images/media_patrol_forest_road.png';
import redTruckStopsign from '../assets/images/media_red_truck_stopsign.png';

export default function MediaSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems = [
    { id: 0, src: lapdExplorerNight, alt: 'LAPD Explorer Night Traffic Stop' },
    { id: 1, src: chpChargerGarage, alt: 'CHP Dodge Charger in Garage' },
    { id: 2, src: fbiHrtOperator, alt: 'FBI HRT Operator with Rescue Van' },
    { id: 3, src: fbiHostageRescueSuv, alt: 'FBI Hostage Rescue Team SUV' },
    { id: 4, src: gasStationStop, alt: 'Night Patrol at Gas Station' },
    { id: 5, src: patrolForestRoad, alt: 'Patrol SUV on Forest Road' },
    { id: 6, src: redTruckStopsign, alt: 'Red Pickup Truck at Stop Sign' }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  };

  return (
    <section className="relative z-20 py-20 lg:py-28 bg-[#020813] border-t border-slate-900/60" id="media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase block mb-2 font-mono">
              IN-GAME MOMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              MEDIA GALLERY
            </h2>
          </div>
        </div>

        {/* Media Grid - Pure photos, no details, no type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="media-grid">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative aspect-[16/10] bg-slate-950/40 border border-slate-900/60 rounded-md overflow-hidden cursor-pointer shadow-lg hover:border-blue-500/30 transition-all duration-300"
              id={`media-card-${item.id}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 opacity-85 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay Zoom Icon */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-11 h-11 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 backdrop-blur-sm">
                  <ZoomIn size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer z-50"
            >
              <X size={20} />
            </button>

            {/* Navigation Left */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer z-50"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Active Image */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-[75vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selectedImageIndex].src}
                alt={galleryItems[selectedImageIndex].alt}
                className="max-w-full max-h-full rounded-md object-contain shadow-2xl border border-slate-900/80"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer z-50"
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-mono">
              {selectedImageIndex + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

