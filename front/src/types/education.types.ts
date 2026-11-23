/** 1: Título/Base, 2: IT Complementario, 3: Otras áreas */
export type CertificateLevel = 1 | 2 | 3;

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  imageUrl?: string;
  codigoValidacion?: string;
  credentialUrl?: string;
  level: CertificateLevel;
  category: string;
}