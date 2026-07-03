import React from 'react';

export interface Division {
  name: string;
  description: string;
}

export interface Vehicle {
  name: string;
  type: string;
  image?: string;
}

export interface Department {
  id: string;
  name: string;
  fullName: string;
  logo: React.ReactNode;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  divisions: Division[];
  ranks: string[];
  fleet: Vehicle[];
  requirements: string[];
  color: string; // Tailwind tint
  descriptionPoints?: string[];
  discordLink?: string;
}

export interface Application {
  id: string;
  departmentId: string;
  departmentName: string;
  applicantName: string;
  discordTag: string;
  age: number;
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
}


